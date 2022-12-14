import prisma from "@database/prisma";
import {NextFunction, Request, Response} from "express";


export async function addCustomer(req: Request, res: Response, next: NextFunction) {
    const createdCustomer = await prisma.customer.create({
        data: {
            gender: req.body.gender,
            profile: {
                create: {
                    firstName: req.body.profile.firstName,
                    lastName: req.body.profile.lastName,
                    email: req.body.profile.email,
                    phoneNumber: req.body.profile.phoneNumber,
                    birthDate: new Date(),
                    address: req.body.profile.address
                }
            }
        }
    })
    res.status(200).json(createdCustomer);

}


export async function getAllCustomers(req: Request, res: Response, next: NextFunction) {
    const allCustomers = await prisma.customer.findMany();
    res.status(200).json(allCustomers);

}

export async function getCustomerById(req: Request, res: Response, next: NextFunction) {
    const Customer = await prisma.customer.findUnique({
        where: {
            id: req.params.id
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

    // const updatedCustomer = await prisma.customer.update({
    //     where: {
    //         id: req.params.id

    //     },
    //     data: {
    //         ssn: req.body.ssn,
    //         policy: req.body.policy,
    //         description: req.body.description,
    //     }
    // });
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