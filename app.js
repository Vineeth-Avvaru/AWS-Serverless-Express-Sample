const express = require('express');
const awsServerlessExpress = require('aws-serverless-express')

const app = express();

app.get("/hello", (req, res)=> {
    res.send("Hello World!!")
})

app.post("/mirror", (req, res)=> {
    res.send(req.body.message);
})


const server = awsServerlessExpress.createServer(app)

exports.handler = (event, context) => { awsServerlessExpress.proxy(server, event, context) }