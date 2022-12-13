
import prisma from "../../db";
import { Request, Response, NextFunction } from 'express';


export async function createStore(req: Request, res: Response, next: NextFunction) {
    const createdStore = await prisma.store.create({
        data: {
            ...req.body
        }
    })
    res.status(200).json(createStore);
}

export async function getStores(req: Request, res: Response, next: NextFunction) {
    const allStores = await prisma.store.findMany();
    res.status(200).json(allStores);
}

export async function findStoreId(req: Request, res: Response, next: NextFunction) {
    const store = await prisma.store.findUnique({
        where: {
            id: req.params.id
        }
    });
    res.status(200).json(store);
}

export async function updateStore(req: Request, res: Response, next: NextFunction) {

    const updateStore = await prisma.store.update({
        where: {
            id: req.params.id
        },
        data : {
            ...req.body
        }
    });
    res.status(201).json(updateStore);
}

export async function deleteStore(req: Request, res: Response, next: NextFunction) {

    const deletestore = await prisma.store.delete({
        where: {
            id: req.params.id
        }
    })
    res.status(204).json({
        message: "deleted successfully"
    })
}


