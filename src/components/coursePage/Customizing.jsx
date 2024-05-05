import React from "react";
import classes from "./Customizing.module.css";
import SelectInput from "../UI/SelectInput";
import RadioInput from "../UI/RadioInput";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import DateInput from "../UI/DateInput";
import { opcija, teme, tezine } from "../../store/courseProperties";
import dayjs from "dayjs";

function Customizing(props) {
  const [name, setName] = useState(props.course.ime);
  const [description, setDescription] = useState(props.course.opis);
  const [tema, setTeme] = useState(props.course.tema);
  const [difficulty, setDifficulty] = useState(props.course.tezina);
  const [datum, setDatum] = useState(props.course.datum);
  const [prijava, setPrijava] = useState(props.course.prijava);
  const [predavac, setPredavac] = useState(props.course.predavac);

  const saveChangesHandler = () => {
    
    if (
      name === "" ||
      tema === "" ||
      difficulty === "" ||
      datum === "" 
    ) {
      alert("Morate popuniti sva polja!");
      return;
    }

    let prijavaBolean;
    if (typeof prijava === "boolean") {
      prijavaBolean = prijava;
    }
    prijavaBolean = prijava === "true" ? true : false;

    let datumTecaja;

    if (typeof datum == "string") {
      datumTecaja = datum.split("T")[0];
    } else {
      const date = datum.toISOString().split("T")[0];
      const newDate = new Date(date);
      newDate.setDate(newDate.getDate() + 1);
      datumTecaja = newDate.toISOString().split("T")[0];
    }

    props.saveChanges({
      id: props.course.id,
      ime: name,
      opis: description,
      tema: tema,
      prijava: prijavaBolean,
      datum: datumTecaja,
      predavac: props.predavac,
      tezina: difficulty,
      predavac: predavac
    });

  };

  return (
    <div className={classes.popupoverlay}>
        <div className={classes.popupcontent}>
        <div className={classes.course}>
            <div className={classes.center}>
                <div className={classes.info}>
                    <div className={classes["name-description"]}>
                        <TextField
                        id="standard-basic"
                        label="Ime"
                        variant="standard"
                        value={name}
                        fullWidth
                        onChange={(e) => setName(e.target.value)}
                        />
                        <TextField
                        id="standard-basic"
                        label="Opis"
                        variant="standard"
                        value={description}
                        fullWidth
                        onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className={classes.properties}>
                        <SelectInput
                        value={tema}
                        label={"Tema"}
                        handleChange={setTeme}
                        options={teme}
                        />
                        <RadioInput
                        options={tezine}
                        value={difficulty}
                        label={"Težina"}
                        handleChange={setDifficulty}
                        />
                        <DateInput
                        value={datum}
                        handleChange={setDatum}
                        label={"Datum održavanja"}
                        />
                        <RadioInput
                        options={opcija}
                        value={prijava}
                        label={"Status"}
                        handleChange={setPrijava}
                        style={true}
                        />
                    </div>
                    </div>
                <div className={classes.buttons}>
                    <button
                        onClick={saveChangesHandler}
                    >Spremi</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Customizing;