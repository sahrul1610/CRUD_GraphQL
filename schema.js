const {gql} = require('apollo-server');

const typeDefs = gql`
    type Product{
        _id: ID!,
        productName: String!,
        price: Float!,
        stock: Int!
    }

    type Query{
        getAllProduct: [Product]!
    }

    type Mutation{
        createProduct(
            productName: String!,
            price: Float!,
            stock: Int!
        ):Product!,

        updateProduct(
            _id: ID!,
            productName: String,
            price: Float,
            stock: Int
        ):Product!,

        deleteProduct(
            _id: ID!
        ):Boolean
    }
`;

module.exports = typeDefs;