const mongoose = require('mongoose');
const {ApolloServer} = require('apollo-server')

const typeDefs = require('./schema')
const resolvers = require('./resolvers')

mongoose.connect('mongodb://127.0.0.1:27017/db_product', { useNewUrlParser: true, useUnifiedTopology: true});

const server = new ApolloServer ({typeDefs,resolvers});

server.listen()
      .then(({url}) =>{
        console.log(`System berjalan di ${url}`);
      })