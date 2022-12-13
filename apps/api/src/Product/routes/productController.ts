
import prisma from "../../db";
import { NextFunction, Request, Response } from "express";


export async function addProduct(req: Request, res: Response, next: NextFunction) {

    const createdProduct = await prisma.product.create({
        data: {
            ...req.body
        }


    });

    res.status(200).json(createdProduct);


}