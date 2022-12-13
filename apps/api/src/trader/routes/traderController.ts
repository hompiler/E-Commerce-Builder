import { NextFunction, Request, Response } from "express";

import prisma from "../../db";
export async function addTrader(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const createdTrader = await prisma.trader.create({
    data: {
      ssn: req.body.ssn,
      policy: req.body.policy,
      description: req.body.description,
      profile: {
        create: {
          firstName: req.body.profile.firstName,
          lastName: req.body.profile.lastName,
          email: req.body.profile.email,
          phoneNumber: req.body.profile.phoneNumber,
          birthDate: new Date(),
          address: req.body.profile.address,
        },
      },
    },
  });
  res.status(201).json(createdTrader);
}

export async function getAllTraders(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const allTraders = await prisma.trader.findMany();
  res.status(200).json(allTraders);
}

export async function getTraderById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const trader = await prisma.trader.findUnique({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json(trader);
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
      ssn: req.body.ssn,
      policy: req.body.policy,
      description: req.body.description,
    },
  });

  res.status(201).json(updatedTrader);
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

  res.status(204).json({
    message: "deleted successfully",
  });
}
