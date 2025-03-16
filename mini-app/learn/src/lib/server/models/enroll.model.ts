import mongoose, {Schema, Document, Model} from "mongoose";

export interface IEnroll{
  course: string,
  users: string[] 
}

const EnrollSchema = new Schema<IEnroll>(
  {
    course: { type: String, required: true, unique: true },
    users: { type: [String], required: true, unique: true },
  },
  { timestamps: true }
);

const Enroll = mongoose.models.registered_users || mongoose.model<IEnroll>(
  "Enrolled",
  EnrollSchema
);

export default Enroll;
