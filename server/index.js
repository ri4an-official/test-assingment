const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const cors = require('cors')
const schema = require('./schema')
const PORT = 5000
express()
    .use(cors())
    .use('/graphql', graphqlHTTP({ schema, graphiql: true }))
    .listen(PORT, () => console.log('Servers started on port', PORT))
