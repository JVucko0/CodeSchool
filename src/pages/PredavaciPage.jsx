import React from "react";
import FilterOptions from "../components/predavaciPage/FilterOptions";
import Predavaci from "../components/predavaciPage/Predavaci";
import classes from "./PredavaciPage.module.css";
import { useState } from "react";
import NewPredavac from "../components/predavaciPage/NewPredavac";
import { UserStatusContext } from "../store/UserStatusProvider";
import { useContext } from "react";
import axios from "axios"

function PredavaciPage() {
  const userStatus = useContext(UserStatusContext);
  const [themeFilter, setThemeFilter] = useState("all");
  const [stanje, setStanje] = useState(false);

  const openCloseCustomize = () => {
    setStanje((prevState) => !prevState);
  };
  const newPredavacHandler = async (predavac) => {
    openCloseCustomize();
    try {
      axios.post(
        "http://localhost:3001/predavaci",
        predavac
      );
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className={classes["predavaci-page"]}>
      <h2>Predavači</h2>
      <div className={classes["filter-display"]}>
        <div>
          <FilterOptions
            themeFilter={themeFilter}
            setThemeFilter={setThemeFilter}
          />
          {stanje && (
            <NewPredavac
              close={openCloseCustomize}
              newPredavac={newPredavacHandler}
            />
          )}  
          {userStatus.userStatus === "admin" && (
            <button
              onClick={openCloseCustomize}
            >Dodaj Predavača</button>
          )}
        </div>
        <Predavaci
          themeFilter={themeFilter}
          setThemeFilter={setThemeFilter}
        />
      </div>
    </div>
  );
}

export default PredavaciPage;