import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import classes from "./Predavaci.module.css";
import Predavac from "./Predavac";

function Predavaci(props) {
  const [predavaci, setPredavaci] = useState([]);

  const getPredavaci = useCallback(async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/predavaci"
      );
      const predavaci = response.data;
      const predavaciArray = [];

      for (const key in predavaci) {
        predavaciArray.push({
          id: key,
          ...predavaci[key],
        });
      }
      setPredavaci(predavaciArray);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getPredavaci();
  }, [getPredavaci]);


  const updatePredavaciHandler = async (predavac) => {
    try {
      const response = await axios.patch(
        `http://localhost:3001/predavaci/${predavac.id}`,
        predavac
      );
      setPredavaci((currentState) => {
        const newArray = currentState.map((item) => {
          if (item.id === predavac.id) {
            return predavac;
          }
          return item;
        });
        return newArray;
      });
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className={classes["predavaci"]}>
      {predavaci.length === 0 ? (
        <h1>Učitavanje...</h1>
      ) : (
        <>
          {predavaci.map((predavac) =>
            (props.themeFilter === "all" || props.themeFilter === predavac.tema) ? (
              <Predavac
                key={predavac.id}
                predavac={predavac}
                updatePredavac={updatePredavaciHandler}
              />
            ) : null
          )}
        </>
      )}
    </div>
  );
}

export default Predavaci;