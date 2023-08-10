import express, { Request, Response } from "express";
import {
  getNotifications,
  createNotification,
} from "../controllers/notifications";
export const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Notifications");
});

router.get("/user/:userId", getNotifications);
router.post("/create-notification", createNotification);
