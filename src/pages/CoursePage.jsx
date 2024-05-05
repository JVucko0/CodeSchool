import React from "react";
import FilterOptions from "../components/coursePage/FilterOptions";
import Courses from "../components/coursePage/Courses";
import classes from "./CoursePage.module.css";
import { useState } from "react";

function CoursePage() {
  const [prijavaFilter, setPrijavaFilter] = useState("all");
  const [difficultyFilter, setDifficultyFilter] = useState("all");
  const [themeFilter, setThemeFilter] = useState("all");

  return (
    <div className={classes["courses-page"]}>
      <h2>Tečajevi u tijeku</h2>
      <div className={classes["filter-display"]}>
        <div>
          <FilterOptions
            prijavaFilter={prijavaFilter}
            setPrijavaFilter={setPrijavaFilter}
            difficultyFilter={difficultyFilter}
            setDifficultyFilter={setDifficultyFilter}
            themeFilter={themeFilter}
            setThemeFilter={setThemeFilter}
          />
        </div>
        <Courses
          prijavaFilter={prijavaFilter}
          setPrijavaFilter={setPrijavaFilter}
          difficultyFilter={difficultyFilter}
          setDifficultyFilter={setDifficultyFilter}
          themeFilter={themeFilter}
          setThemeFilter={setThemeFilter}
        />
      </div>
    </div>
  );
}

export default CoursePage;