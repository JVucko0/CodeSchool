import React from "react";
import classes from "./FilterOptions.module.css";
import RadioInput from "../UI/RadioInput";
import { teme } from "../../store/courseProperties";

const allThemes = [{ label: "Svi", value: "all" }, ...teme];

function FilterOptions(props) {
  return (
    <div className={classes.filter}>
      <RadioInput
        label="Tema"
        value={props.themeFilter}
        options={allThemes}
        handleChange={props.setThemeFilter}
        direction="column"
      />
    </div>
  );
}

export default FilterOptions;