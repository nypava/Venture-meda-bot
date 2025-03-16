import { json } from "@sveltejs/kit";
import { connectDB } from "$lib/server/db";
import { findByUserId, updateUserById } from "$lib/server/services/user.service";

interface Params {
  id: string;
}

export async function POST({ request }: {request: Request}) {
  await connectDB();

  try {
    const userData = await request.json();
    let info = JSON.parse(userData.info);
    let user_id = JSON.parse(userData.user_id);

    const updatedUser = await updateUserById(parseInt(userData.user_id), info);

    if (!updatedUser) {
      return json({ success: false, message: "User not found" }, { status: 404 });
    }

    return json({ success: true, user: updatedUser }, { status: 200 });
  } catch (error: any) {
    return json({ success: false, message: error.message }, { status: 500 });
  }
}
