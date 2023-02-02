import prisma from "@database/prisma";
import { NextFunction, Request, Response } from "express";
import { ApiFeatures } from "@middlewares/validationMiddlewareCreator/apiFeatures";

export async function addCustomer(req: Request, res: Response, next: NextFunction) {
    const { profile, storeId, ...rest } = req.body;
    const createdCustomer = await prisma.customer.create({

        data: {
            ...rest,
            store: {
                connect: {
                    id: storeId
                }
            },
            profile: {
                create: profile,
            }
        }, include: {
            profile: true,
        }
    })
    res.status(200).json(createdCustomer);

}


export async function getAllCustomers(req: Request, res: Response, next: NextFunction) {
 
    const feautres = new ApiFeatures(req);   
    const allCustomers = await prisma.customer.findMany(
        feautres.all()
    );
    res.status(200).json(allCustomers);

}

export async function getCustomerById(req: Request, res: Response, next: NextFunction) {
    const Customer = await prisma.customer.findUnique({
        where: {
            id: req.params.id
        }, include: {
            profile: true,
        }
    });

    res.status(200).json(Customer);
}

export async function updateCustomer(req: Request, res: Response, next: NextFunction) {

    const customer = await prisma.customer.findUnique({
        where: {
            id: req.params.id
        }
    });

    console.log(customer);

    const updatedCustomerProfile = await prisma.profile.update({
        where: {
            id: customer.profileId
        },
        data: req.body.profile
    })

    const updatedCustomer = await prisma.customer.update({
        where: {
            id: req.params.id
        },
        data: req.body,
        include: {
            profile: true,
        }
    });
    res.status(201).json(updatedCustomerProfile);

}


export async function deleteCustomer(req: Request, res: Response, next: NextFunction) {
    const customer = await prisma.customer.findUnique({
        where: {
            id: req.params.id
        }
    });
    const deleteUser = await prisma.customer.delete({
        where: {
            id: req.params.id
        }
    })
    const deletedTraderProfile = await prisma.profile.delete({
        where: {
            id: customer.profileId
        }
    })


    res.status(204).json({
        message: "deleted successfully"
    })
}