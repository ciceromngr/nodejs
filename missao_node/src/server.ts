import "reflect-metadata"
import express from 'express'
import './database'

import { router } from "./routes"

const PORT = 8080
const app = express()
app.use(express.json())
app.use(router)

app.listen(PORT, () => console.log('Server is Running!'))