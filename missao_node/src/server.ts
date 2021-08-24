import "reflect-metadata"
import express, { Request, Response, NextFunction } from 'express'
import './database'
import 'express-async-errors'

import { router } from "./routes"

const PORT = 8080
const app = express()
app.use(express.json())

app.use(router)

// Tratativa de Errors
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {

    if (err instanceof Error) return res.status(400).json({ error: err.message })

    return res.status(500).json({
        message: "Error Não Tratado",
        error: 'Internal Server Error'
    })
})

app.listen(PORT, () => console.log('Server is Running!'))