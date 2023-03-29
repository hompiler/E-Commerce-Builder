import { NextFunction, Request, Response } from "express";
import prisma from "@database/prisma";
import { ApiFeatures } from "@middlewares/validationMiddlewareCreator/apiFeatures";

export async function addTrader(
    req: Request,
    res: Response,
    next: NextFunction
) {

    const { profile, ...rest } = req.body;

    const createdTrader = await prisma.trader.create({
        data: {
            ...rest,
            profile: {
                create: profile,
            },
        },
        include: {
            profile: true,
        }
    });
    res.status(201).send(createdTrader);
}

export async function getAllTraders(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const feautres = new ApiFeatures(req);
    const allTraders = await prisma.trader.findMany({
        include: {
            profile: true
        }
});
    res.status(200).send(allTraders);
}

export async function getTraderById(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const trader = await prisma.trader.findUnique({
        where: {
            id: req.params.id,
        }, include: {
            profile: true,
        }
    });
    res.status(200).send(trader);
}

export async function updateTrader(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const trader = await prisma.trader.findUnique({
        where: {
            id: req.params.id,
        },

    });
    const updatedTraderProfile = await prisma.profile.update({
        where: {
            id: trader.profileId,
        },
        data: req.body.profile,
    });

    const updatedTrader = await prisma.trader.update({
        where: {
            id: req.params.id,
        },
        data: {
            policy: req.body.policy,
            description: req.body.description,
        },
        include: {
            profile: true,
        }
    });

    res.status(201).send(updatedTrader);
}

export async function deleteTrader(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const trader = await prisma.trader.findUnique({
        where: {
            id: req.params.id,
        },
    });
    const deleteUser = await prisma.trader.delete({
        where: {
            id: req.params.id,
        },
    });
    const deletedTraderProfile = await prisma.profile.delete({
        where: {
            id: trader.profileId,
        },
    });

    res.status(204).send({
        message: "deleted successfully",
    });
}
