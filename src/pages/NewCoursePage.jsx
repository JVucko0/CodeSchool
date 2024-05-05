import React from "react";
import InputForm from "../components/newCoursesPage/InputForm";
import axios from "axios";

function NewCoursePage() {
  const newCourseHandler = async (course) => {
    
    const courseForSubmit = {
      ...course,
      prijava: false
    };

    try {
      axios.post(
        "http://localhost:3001/radionice",
        courseForSubmit
      );
    } catch (error) {
      console.log(error);
    }
  };

  return <InputForm newCourse={newCourseHandler} />;
}

export default NewCoursePage;
