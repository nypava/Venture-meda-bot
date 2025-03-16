import { json } from "@sveltejs/kit";
import { connectDB } from "$lib/server/db";
import { findByUserId } from "$lib/server/services/user.service";

interface Params {
  id: string;
}

export async function GET({ params }: {params: Params}) {
  await connectDB();

  try {
    const userId = params.id;
    const user = await findByUserId(userId);

    if (!user) {
      return json({ success: false, message: "User not found" }, { status: 404 });
    }

    return json({ success: true, user }, { status: 200 });
  } catch (error: any) {
    return json({ success: false, message: error.message }, { status: 500 });
  }
}
