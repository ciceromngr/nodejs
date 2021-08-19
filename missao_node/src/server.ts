import "reflect-metadata"
import express from 'express'
import './database'
const app = express()

const PORT = 8080

app.listen(PORT, () => console.log('Server is Running!'))