import React from "react";
import classes from "./InputForm.module.css";
import SelectInput from "../UI/SelectInput";
import { useState, useEffect, useContext } from "react";
import { UserStatusContext } from "../../store/UserStatusProvider";
import TextField from "@mui/material/TextField";
import DateInput from "../UI/DateInput";
import dayjs from "dayjs";
import { teme, tezine } from "../../store/courseProperties";
import axios from "axios"

const newTeme = [{ label: "Odaberi temu", value: "odaberi-temu" }, ...teme];
const newDiff = [{ label: "Odaberi tezinu", value: "odaberi-tezinu" }, ...tezine];

let initial = 0;

function InputForm(props) {
  const [ime, setIme] = useState("");
  const [opis, setOpis] = useState("");
  const [tema, setTeme] = useState("odaberi-temu");
  const [tezina, setTezine] = useState("odaberi-tezinu");
  const [dan, setDan] = useState(dayjs(new Date())); 
  const [profesori, setProfesori] = useState([]); 
  const [predavac, setPredavac] = useState(""); 
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const userStatusCtx = useContext(UserStatusContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      ime.trim() === "" ||
      tezina === "odaberi-tezinu" ||
      tema === "odaberi-temu" 
    ) {
      setShowError(true);
      return;
    }
    setShowError(false);
    const newCourse = {
      ime,
      opis,
      tema,
      tezina,
      predavac,
      datum: dan.toISOString().split("T")[0]
    };
    props.newCourse(newCourse);

    setIme("");
    setOpis("");
    setTeme("odaberi-teme");
    setTezine("odaberi-tezine");
    setDan(dayjs(new Date()));
    initial++;
  };

  useEffect(() => {
    if (initial === 0) {
      return;
    } else {
      setShowSuccess(true);
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 2000);
      return () => {
        clearTimeout(timer);
        initial = 0;
      };
    }
  }, [initial]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/predavaci");
        setProfesori(response.data); 
      } catch (error) {
        console.error("Greška prilikom dohvaćanja podataka o profesorima:", error);
      }
    };
    fetchData(); 
  }, []);



  return (
    <>
      {userStatusCtx.userStatus != "admin" ? (
        <h1>Samo administrator ima mogućnost dodavanja tečaja</h1>
      ) : (
        <>
          {showSuccess && <h2>Tečaj uspješno dodan</h2>}
          <form className={classes.center} onSubmit={handleSubmit}>
            <div className={classes.info}>
              {showError && <p>Molimo popunite ispravno sva polja</p>}

              <TextField
                id="standard-basic"
                label="Ime"
                variant="standard"
                value={ime}
                fullWidth
                onChange={(e) => setIme(e.target.value)}
              />
              <TextField
                id="standard-basic"
                label="Opis"
                variant="standard"
                value={opis}
                fullWidth
                onChange={(e) => setOpis(e.target.value)}
              />

              <SelectInput
                value={tema}
                label={"Vrsta"}
                handleChange={setTeme}
                options={newTeme}
              />
              <SelectInput
                label={"Odaberite profesora"}
                value={predavac}
                handleChange={setPredavac}
                options={profesori.map(profesor => ({
                  value: profesor.ime,
                  label: profesor.ime
                }))}/>
              <SelectInput
                  value={tezina}
                  label={"Težina"}
                  handleChange={setTezine}
                  options={newDiff}
                />
              <DateInput
                value={dan}
                handleChange={setDan}
                label={"Datum održavanja"}
              />
            </div>
            <button>Dodaj novi tečaj</button>
          </form>
        </>
      )}
    </>
  );
}

export default InputForm;
