import express from "express";
import prisma from "../db";

export async function addCategory(request: express.Request, response: express.Response, next: express.NextFunction) {
    const createdCategory = await prisma.category.create({
        data: {
            ...request.body
        }
    });

    response.status(201).json(createdCategory);
}

export async function updateCategory(request: express.Request, response: express.Response, next: express.NextFunction) {
    const updatedCategory = await prisma.category.update({
        where: {
            id: request.params.id
        },
        data: {
            ...request.body
        }
    });

    response.status(200).json(updatedCategory);
}

export async function getAllCategories(request: express.Request, response: express.Response, next: express.NextFunction) {
    const allCategories = await prisma.category.findMany();
    response.status(200).json(allCategories)
}

export async function getCategoryById(request: express.Request, response: express.Response, next: express.NextFunction) {
    const category = await prisma.category.findUnique({where: {id: request.params.id}});
    response.status(200).json(category);
}

export async function deleteCategory(request: express.Request, response: express.Response, next: express.NextFunction) {
    const category = await prisma.category.delete({
        where: {id: request.params.id}
    })
}