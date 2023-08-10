import mongoose, { Types } from "mongoose";

enum NotificationType {
  general = "general",
  channels = "channels",
  studyChats = "studyChats",
  subscription = "subscription",
}

interface Notification {
  user: Types.ObjectId;
  type: NotificationType;
  content: string;
  //   read: boolean; this is meant to indicate if a notification has been read or not
}

const notificationSchema = new mongoose.Schema<Notification>(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    type: {
      type: String,
      enum: Object.values(NotificationType),
      required: true,
    },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

export const NotificationModel = mongoose.model<Notification>(
  "Notification",
  notificationSchema
);
