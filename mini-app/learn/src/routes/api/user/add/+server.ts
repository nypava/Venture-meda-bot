import { json } from "@sveltejs/kit";
import { connectDB } from "$lib/server/db";
import { addUser } from "$lib/server/services/user.service";

export async function POST({ request }: { request: Request }) {
  await connectDB();

  try {
    const userData = await request.json();
    let info = JSON.parse(userData.info);
    let user_id = JSON.parse(userData.user_id);

    const newUser = await addUser({
      user_id: user_id,
      info: info
    })

    return json({ success: true, user: newUser }, { status: 201 });
  } catch (error: any) {
    return json({ success: false, message: error.message }, { status: 500 });
  }
}
