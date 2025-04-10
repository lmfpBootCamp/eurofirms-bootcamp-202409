import 'dotenv/config'
const { API_PORT } = process.env

//console.log(process.env)

import express from 'express'

const api = express()

api.get('/', (req, res) => res.send('Hello, World!'))

api.listen(API_PORT, () => console.log(`Express API is up => http://127.0.0.1:${API_PORT}`))