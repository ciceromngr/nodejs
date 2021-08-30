import { Request, Response, NextFunction } from "express";
import { verify } from 'jsonwebtoken'

export interface IPayload {
    sub: string
}

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {

    // Receber o token

    const authToken = req.headers.authorization

    // Validar se o token esta preenchido
    if (!authToken) return res.status(401).end()
    const [, token] = authToken.split(" ")

    try {
        // VAlidar se token é Valido
        const { sub } = verify(token, "330fc70191ba2528a5fe7ff13a25e4e9") as IPayload
        req.user_id = sub
        return next()
    } catch (error) {
        return res.status(401).end()
    }
    // Recuperar informacoes do usuario
}