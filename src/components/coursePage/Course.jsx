import React from "react";
import classes from "./Course.module.css";
import { UserStatusContext } from "../../store/UserStatusProvider";
import { useContext, useState } from "react";
import Customizing from "./Customizing";

function Course(props) {
  const userStatus = useContext(UserStatusContext);
  const [customizing, setCustomizing] = useState(false);

  const prijavljen = props.course.prijava ? "Prijavljen" : "Nisi prijavljen";


  const prijavaHandler = () => {
    props.prijava(props.course.id);
  };

  const openCloseCustomize = () => {
    setCustomizing((prevState) => !prevState);
  };

  const saveChangesHandler = (item) => {
    openCloseCustomize();
    props.updateCourse(item);
  };

  return (
    <>
      {customizing && (
        <Customizing
          saveChanges={saveChangesHandler}
          close={openCloseCustomize}
          course={props.course}
        />
      )} 
      <div className={classes.course}>
        <div className={classes.info}>
          <div className={classes["name-description"]}>
            <h2>{props.course.ime}</h2>
            <i>{props.course.opis}</i>
          </div>
          <div className={classes.properties}>
            <p>
              <b>Tema: </b>
              {props.course.tema}
            </p>
            <p>
              <b>Težina: </b>
              {props.course.tezina}
            </p>
            <p>
              <b>Prijava: </b>
              {prijavljen}
            </p>
            <p>
              <b>Datum održavanja: </b>
              {props.course.datum}
            </p>
            <p>
              <b>Predavač: </b>
              {props.course.predavac}
            </p>
          </div>
        </div>
        <div className={classes.buttons}>
          {!props.course.prijava && (
            <button onClick={prijavaHandler}>Prijavi se</button>
          )}

          {userStatus.userStatus === "admin" && (
            <button
              onClick={openCloseCustomize}
            >Uredi</button>
          )}
        </div>
      </div>
    </>
  );
}

export default Course;
