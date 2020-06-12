# About
This repo just has a code to deploy your simple express API's to AWS lambda using serverless. <br/>
Uses aws-serverless-express <br/>
You can edit the service name and region in serverless.yml file

# API's

## /hello
Method: GET <br/>
Response: "Hello World!!" 

## /mirror
Method: POST <br/>
Response: Mirrors the request body

# Requirements
### `npm install -g serverless`

# Configuration
### `serverless config credentials --provider aws --key access_key --secret secret_key`

# Installing Dependencies
### `npm install`


# Deployment
### `serverless deploy`


