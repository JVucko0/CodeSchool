import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import classes from "./Courses.module.css";
import Course from "./Course";

function Courses(props) {
  const [courses, setCourses] = useState([]);

  const getCourses = useCallback(async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/radionice"
      );
      const courses = response.data;
      const coursesArray = [];

      for (const key in courses) {
        coursesArray.push({
          id: key,
          ...courses[key],
        });
      }
      setCourses(coursesArray);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getCourses();
  }, [getCourses]);

  const prijavaHandler = async (id) => {
    try {
      const response = await axios.patch(
        `http://localhost:3001/radionice/${id}`,
        { prijava: true }
      );
      setCourses((currentState) =>
        currentState.map((course) =>
          course.id === id ? { ...course, prijava: true} : course
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  const updateCourseHandler = async (course) => {
    try {
      const response = await axios.patch(
        `http://localhost:3001/radionice/${course.id}`,
        course
      );
      setCourses((currentState) => {
        const newArray = currentState.map((item) => {
          if (item.id === course.id) {
            return course;
          }
          return item;
        });
        return newArray;
      });
    } catch (error) {
      console.log(error);
    }
  };

  let filteredByStatus = null;

  if (props.prijavaFilter === "false") {
    filteredByStatus = false;
  } else if (props.prijavaFilter === "true") {
    filteredByStatus = true;
  }

  return (
    <div className={classes["courses"]}>
      {courses.length === 0 ? (
        <h1>Učitavanje...</h1>
      ) : (
        <>
          {courses.map((course) =>
            (filteredByStatus === null ||
              filteredByStatus === course.prijava) &&
            (props.difficultyFilter === "all" || props.difficultyFilter === course.tezina) &&
            (props.themeFilter === "all" || props.themeFilter === course.tema) ? (
              <Course
                key={course.id}
                course={course}
                prijava={prijavaHandler}
                updateCourse={updateCourseHandler}
              />
            ) : null
          )}
        </>
      )}
    </div>
  );
}

export default Courses;