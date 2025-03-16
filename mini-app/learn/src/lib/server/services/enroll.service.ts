import Enroll from "$lib/server/models/enroll.model";
import type { IEnroll } from "$lib/server/models/enroll.model";


export const findCourse = async (course_name: string) => {
  try {
    const course = await Enroll.findOneAndUpdate(
      { course: course_name}, 
      { $setOnInsert: { users: [] } },
      { upsert: true, new: true }
    );

    console.log("Course found or created:", course);
    return course;
  } catch (error) {
    console.error("Error finding or creating course:", error);
  }
};

export const addUserToCourse = async (user_id: string, course_name: string) => {
  try {
    const updatedCourse = await Enroll.findOneAndUpdate(
      { course: course_name, users: { $ne: user_id} }, 
      { $push: { users: user_id} }, 
      { new: true } 
    );

    if (!updatedCourse) {
      console.log("Course not found or user already enrolled");
      return;
    }

    console.log("User added successfully:", updatedCourse);
  } catch (error) {
    console.error("Error adding user:", error);
  }
};
