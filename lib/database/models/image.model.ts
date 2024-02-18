import { Schema, models, model, Document } from "mongoose";

export interface IImage extends Document {
  title: string;
  transformationType: string;
  publicId: string;
  secureUrl: URL;
  width?: number;
  height?: number;
  config?: object;
  transformationUrl?: URL;
  aspectRatio?: string;
  prompt?: string;
  author: {
    _id: string;
    firstName: string;
    lastName: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

const ImageSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    transformationType: { type: String, require: true },
    publicId: { type: String, require: true },
    secureUrl: { type: URL, require: true },
    width: {
      type: Number,
    },
    height: { type: Number },
    config: { type: Object },
    transformationUrl: { type: URL },
    aspectRatio: { type: String },
    prompt: { type: String },
    author: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const Image = models?.Image || model("Image", ImageSchema);
export default Image;
