import mongoose, {Schema, Document, Model} from "mongoose";
import type {
  Gender,
  Age,
  Regions,
  EmploymentType,
  Area,
  Faction,
} from "./type"

export interface IUser {
  user_id: number,
  info: {
    first_name: string,
    father_name: string,
    grand_father_name: string,
    gender: Gender,
    email_address: string | null,
    age_group: Age,
    area: Area,
    faction: Faction,
    employment_type: EmploymentType,
    region: Regions
  }
}

const UserSchema = new Schema<IUser>(
  {
    user_id: { type: Number, required: true, unique: true },
    info: {
      first_name: { type: String, required: true },
      father_name: { type: String, required: true },
      grand_father_name: { type: String, required: true },
      gender: { type: String, required: true },
      email_address: { type: String, required: false, default: null },
      age_group: { type: String, required: true },
      region: { type: String, required: true },
      employment_type: { type: String, required: true },
      area: { type: String, required: true },
      faction: { type: String, required: true },
    },
  },
  { timestamps: true }
);

const User = mongoose.models.registered_users || mongoose.model<IUser>(
  "registered_users",
  UserSchema
);

export default User;
