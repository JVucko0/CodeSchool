import React from "react";
import classes from "./Customizing.module.css";
import SelectInput from "../UI/SelectInput";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { teme } from "../../store/courseProperties";
import dayjs from "dayjs";

function Customizing(props) {
  const [name, setName] = useState(props.predavac.ime);
  const [description, setDescription] = useState(props.predavac.biografija);
  const [tema, setTeme] = useState(props.predavac.tema);

  const saveChangesHandler = () => {
    if (
      name === "" ||
      tema === "" 
    ) {
      alert("Morate popuniti sva polja!");
      return;
    }


    props.saveChanges({
      id: props.predavac.id,
      ime: name,
      biografija: description,
      tema: tema
    });
  };

  return (
    <div className={classes.popupoverlay}>
        <div className={classes.popupcontent}>
        <div className={classes.predavac}>
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
