import prisma from "@database/prisma";
import { signToken, isValidPassword, protectRoutes } from "./auth";
import express, { Request, Response } from "express";
import bcrypt from "bcrypt";


export async function customerSignUp(req: Request, res: Response) {
  const { profile, storeId, ...rest } = req.body;
  const newCustomer = await prisma.customer.create({
    data: {
      ...rest,
      store: {
        connect: {
          id: storeId,
        },
      },
      profile: {
        create: {
          ...profile,
          password: await bcrypt.hash(req.body.profile.password, 12),
        },
      },
    },
    include: {
      profile: true,
    },
  });
  const token = signToken(newCustomer.id)
  res.status(201).json({
    status: 'sucsses',
    token,
    data: newCustomer
  })
}




export async function customerSignIn(req: Request, res: Response) {
  const { email, password } = req.body;
  const userProfile = await prisma.profile.findUnique({
    where: {
      email: email,
    },
  });
  //check if the user exist
  if (!userProfile) {
    res.status(404).send("User not found");
    return;
  }
  //check if email and password are valid
  const correct = isValidPassword(password, userProfile.password)
  if (correct) {
    res.status(401).send("Invalid user or password");
    return;
  }
  const token = signToken(userProfile.id);
  res.status(201).json({
    status: 'sucsess',
    token
  })
}
