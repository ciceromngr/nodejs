import { Request, Response, NextFunction, response } from "express";




export function ensureAdmin(req: Request, res: Response, next: NextFunction) {
    // Verificar se o Usuario é admin

    const admin = true

    if (admin) return next()

    return response.status(401).json({
        error: " User is not Unauthorized "
    })
}
