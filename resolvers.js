const ProductModels = require('./models/product.js')

module.exports = {
    Query: {
        getAllProduct: async () => await ProductModels.find({})
    },

    Mutation: {
        createProduct: async (_, args) => {
            try {
                const product = new ProductModels(args);
                await product.save();
                console.log(`Produk berhasil dibuat: ${product}`);
                return product;
            } catch (error) {
                console.error(`Error saat membuat produk: ${error.message}`);
                throw new Error('Gagal membuat produk');
            }
        },
        
        updateProduct: async (_, args) => {
            try {
                const updatedProduct = await ProductModels.findByIdAndUpdate(args._id, args, { new: true });
        
                if (updatedProduct) {
                    console.log(`Produk dengan ID ${args._id} berhasil diperbarui`);
                    return updatedProduct;
                } else {
                    console.log(`Produk dengan ID ${args._id} tidak ditemukan`);
                    throw new Error('Produk tidak ditemukan');
                }
            } catch (error) {
                console.error(`Error saat memperbarui produk dengan ID ${args._id}: ${error.message}`);
                throw new Error('Gagal memperbarui produk');
            }
        },
        
        deleteProduct: async (_, args) => {
            try {
                const deletedProduct = await ProductModels.findByIdAndDelete(args._id);
                
                if (deletedProduct) {
                    console.log(`Produk dengan ID ${args._id} berhasil dihapus`);
                    return true;
                } else {
                    console.log(`Produk dengan ID ${args._id} tidak ditemukan`);
                    return false;
                }
            } catch (error) {
                console.error(`Error menghapus produk dengan ID ${args._id}: ${error.message}`);
                return false;
            }
        }   
    }
}