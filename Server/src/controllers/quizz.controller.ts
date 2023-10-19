import * as quizzService from "../services/quizz.service";
import { Request, Response } from "express";

export const getAllCatelory = async (req: Request, res: Response) => {
  try {
    let [data] = await quizzService.getAllCatelory();

    if (!Array.isArray(data)) {
      throw new Error("is valid");
    }
    res.json({
      message: "Get all catelory",
      data: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getOne = async (req: Request, res: Response) => {
  try {
    let { id } = req.params;
    let [data] = await quizzService.getOne(+id);

    if (!Array.isArray(data)) {
      throw new Error("is valid");
    }
    res.json({
      message: `Get catelory id=${id}`,
      data: data,
    });
  } catch (error) {
    console.log(error);
  }
};
