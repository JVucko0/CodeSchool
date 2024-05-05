import React from "react";
import classes from "./ContactData.module.css";

function ContactData() {
  return (
    <div className={classes["contact-data"]}>
      <h2>Kontakt</h2>
      <p>Kontaktirajte nas ili posjetite za više informacija</p>
      <div>
        <p>
          Adresa: <b>Ulica, 21300 Makarska</b>
        </p>
        <p>
          Telefon: <b>+385 1 234 5678</b>
        </p>
        <p>
          Email: <b>code@school.hr </b>
        </p>
      </div>
    </div>
  );
}

export default ContactData;