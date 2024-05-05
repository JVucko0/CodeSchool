import React from "react";
import classes from "./FilterOptions.module.css";
import RadioInput from "../UI/RadioInput";
import { teme, opcija, tezine } from "../../store/courseProperties";

const allThemes = [{ label: "Svi", value: "all" }, ...teme];
const allPrijava = [{ label: "Svi", value: "all" }, ...opcija];
const allTezina = [{label: "Svi", value: "all"}, ...tezine];

function FilterOptions(props) {
  return (
    <div className={classes.filter}>
      <RadioInput
        label="Prijava"
        value={props.prijavaFilter}
        options={allPrijava}
        style={false}
        direction="column"
        handleChange={props.setPrijavaFilter}
      />
      <RadioInput
        label="Tema"
        value={props.themeFilter}
        options={allThemes}
        handleChange={props.setThemeFilter}
        direction="column"
      />
      <RadioInput
        label="Tezina"
        value={props.difficultyFilter}
        options={allTezina}
        handleChange={props.setDifficultyFilter}
        direction="column"
      />
    </div>
  );
}

export default FilterOptions;
