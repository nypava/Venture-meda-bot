import { json } from "@sveltejs/kit";
import { connectDB } from "$lib/server/db";
import { addUserToCourse} from "$lib/server/services/enroll.service";

export async function POST({ request }: { request: Request }) {
  await connectDB();

  try {
    const userData = await request.json();
    let course_name = userData.info;
    let user_id = userData.user_id;

    await addUserToCourse(user_id, course_name);

    return json({ success: true}, { status: 201 });
  } catch (error: any) {
    return json({ success: false, message: error.message }, { status: 500 });
  }
}
