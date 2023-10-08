// @ts-check

const { MongoClient} = require('mongodb')

const uri = `mongodb://root:connor@localhost:27017`
const client = new MongoClient(uri, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
})

module.exports = client