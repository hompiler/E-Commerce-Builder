import prisma from "@database/prisma";
import bcrypt from "bcrypt";
import express, { Request, Response } from "express";
import { isValidPassword } from "./customer";
export async function signUp(req: Request, res: Response) {
  const { profile, ...rest } = req.body;
  const newUser = await prisma.customer.create({
    data: {
      ...rest,
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
  res.status(201).send("Signed up successfully.");
}
export async function signIn(req: Request, res: Response) {
  const { email, password } = req.body;
  const userProfile = await prisma.profile.findUnique({
    where: {
      email: email,
    },
  });
  if (!userProfile) {
    res.status(404).send("User not found");
  }
  isValidPassword(password, userProfile.password);
  res.status(201).send("Signed in successfully.");
}
