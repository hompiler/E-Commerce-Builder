import prisma from "@database/prisma";
import bcrypt from "bcrypt";
import express, { Request, Response } from "express";
import { isValidPassword, signToken } from "./auth";

export async function signUp(req: Request, res: Response) {
  const { profile, ...rest } = req.body;


  const newUser = await prisma.trader.create({
    data: {
      ...rest,
      profile: {
        create: {
          ...profile,
          password: await bcrypt.hash(req.body.profile.password, 12),
        }
      }
    },
    include: {
      profile: true,
    },
  });
  const token = signToken(newUser.id)
  res.status(201).json({
    status: ' sign up sucsses !',
    token,
    data: {
      newUser
    }
  });
}
export async function signIn(req: Request, res: Response) {
  const { email, password } = req.body;
  const traderProfile = await prisma.profile.findUnique({
    where: {
      email: email,
    },
  });
    //check if the user exist
  if (!traderProfile) {
    res.status(404).send("User not found");
  }
    //check if email and password are valid
  const correct = isValidPassword(password, traderProfile.password);
  if (!correct) {
    res.status(401).send("incorrect email or password")
  }
  // return token
  const token = signToken(traderProfile.id);
  res.status(201).json({
    status: 'sucsses',
    token,
    trader: traderProfile
  });
}
