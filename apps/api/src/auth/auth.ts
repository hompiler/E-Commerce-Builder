import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
import express, { Request, Response } from "express";


export function isValidPassword(
    enteredPassword: string,
    userPassword: string
) {
    return bcrypt.compareSync(enteredPassword, userPassword);
}
export function signToken(id: string) {

    return Jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
}

export async function protectRoutes(req: Request, res: Response) {
    //check if the token exist
    const header = req.headers.authorization;
    let token;
    if (header && header.startsWith('Bearer')) {
        token = header.split(',')[1];
    }

    if (!token) {
        res.status(401).send("you are not logged in !");
        return;
    }
    // verify token
    Jwt.verify(token,process.env.JWT_SECRET,(err,decoded)=>{
        if (err){
            res.send("NOt Authorized !!!")
            return;
        }
        console.log(decoded)
    });

    

}

