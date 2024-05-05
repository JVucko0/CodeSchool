import React from "react";
import classes from "./Predavac.module.css";
import { UserStatusContext } from "../../store/UserStatusProvider";
import { useContext, useState } from "react";
import Customizing from "./Customizing";

function Predavac(props) {
  const userStatus = useContext(UserStatusContext);
  const [customizing, setCustomizing] = useState(false);

  const openCloseCustomize = () => {
    setCustomizing((prevState) => !prevState);
  };

  const saveChangesHandler = (item) => {
    openCloseCustomize();
    props.updatePredavac(item);
  };

  return (
    <>
      {customizing && (
        <Customizing
          saveChanges={saveChangesHandler}
          close={openCloseCustomize}
          predavac={props.predavac}
        />
      )}  
      <div className={classes.predavac}>
        <div className={classes.info}>
          <div className={classes["name-description"]}>
            <h2>{props.predavac.ime}</h2>
            <i>{props.predavac.biografija}</i>
          </div>
          <div className={classes.properties}>
            <p>
              <b>Tema: </b>
              {props.predavac.tema}
            </p>
          </div>
        </div>
        <div className={classes.buttons}>
          {userStatus.userStatus === "admin" && (
            <button
              type="yellow"
              onClick={openCloseCustomize}
              label={"Uredi"}
            >Uredi</button>
          )}
        </div>
      </div>
    </>
  );
}

export default Predavac;
