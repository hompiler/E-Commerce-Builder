import prisma from "@database/prisma";
import { getTraderById } from "@routes/users/trader/traderController";
import { NextFunction, Request, Response } from "express";

export async function addProduct(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { storeId, ...rest } = req.body;
  const createdProduct = await prisma.product.create({

    data: { ...rest,
      store : {
        connect : {id : storeId}
      }
    },
  });

  res.status(200).json(createdProduct);
}
export async function getAllProducts(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const allProducts = await prisma.product.findMany();
  res.status(200).json(allProducts);
}

export async function getProductById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const product = await prisma.product.findUnique({
    where: {
      id: req.params.id,
    },
  });

  res.status(200).json(product);
}

export async function updateProduct(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const updateProduct = await prisma.product.update({
    where: {
      id: req.params.id,
    },
    data: {
      ...req.body,
    },
  });

  res.status(201).json(updateProduct);
}

export async function deleteProduct(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const deleteProduct = await prisma.product.delete({
    where: {
      id: req.params.id,
    },
  });

  res.status(204).json({
    message: "Product Deleted Successfully",
  });
}
