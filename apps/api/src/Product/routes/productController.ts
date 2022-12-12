import prisma from "../../db";
import { NextFunction, Request, Response } from "express";

export async function addProduct(req: Request, res: Response, next: NextFunction) {

    const createdProduct = await prisma.product.create({
        data: {

            name: req.body.name,
            price: req.body.price,
            specification: req.body.specification,
            image: req.body.image,
            quantity: req.body.quantity,
            description: req.body.description,
            suppliedBy: {
                create: {
                    ssn: req.body.suppliedBy.name,
                    policy: req.body.suppliedBy.policy,
                    description: req.body.suppliedBy.description,
                    profile: {
                        create: {
                            firstName: req.body.suppliedBy.profile.firstName,
                            lastName: req.body.suppliedBy.profile.lastName,
                            email: req.body.suppliedBy.profile.email,
                            phoneNumber: req.body.suppliedBy.profile.phoneNumber,
                            birthDate: new Date(),
                            address: req.body.suppliedBy.profile.address,
                        }
                    }
                }
            },

            categories: {
                create:
                {
                    name: req.body.categories.name,
                    description: req.body.categories.description
                }
            }

            // traderId: req.body.traderId

            // Store: {
            //     create: {

            //         name: req.body.Store.name,
            //         configuration: req.body.Store.configuration,
            //         storeConfigurationId: req.body.Store.storeConfigurationId,
            //         trader: req.body.Store.trader,
            //         traderId: req.body.Store.traderId,

            //     }

            // },
            // storeId: req.body.storeId,

            // Order: req.body.Order,
            // orderId: req.body.orderId
        }


    });

    res.status(200).json(createdProduct);


}