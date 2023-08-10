import { Request, Response } from "express";
import { NotificationModel } from "../models/Notification";

export const getNotifications = async (req: Request, res: Response) => {
  const user = req.params.userId;

  try {
    const notifications = await NotificationModel.find({ user });
    res.status(200).json({ notifications });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const createNotification = async (req: Request, res: Response) => {
  const { user, type, content } = req.body;

  //   console.log(req.body);
  try {
    const newNotification = await NotificationModel.create({
      user,
      type,
      content,
    });
    res.status(201).json(newNotification);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
