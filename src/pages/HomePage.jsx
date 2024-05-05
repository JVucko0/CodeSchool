import React from "react";
import ContactForm from "../components/homePage/ContactForm";
import classes from "./HomePage.module.css";
import ContactData from "../components/homePage/ContactData";

function HomePage() {
  return (
    <div className={classes.home}>
      <div className={classes.text}>
        <h2>O nama</h2>
        <p>
          Code School je ugledna tvrtka specijalizirana za pružanje tečajeva iz web programiranja.
           Svojom raznolikom ponudom tečajeva, Code School omogućuje pojedincima da steknu širok spektar 
           vještina u području web razvoja. Njihovi tečajevi obuhvaćaju sve, od osnova HTML-a, CSS-a i 
           JavaScripta do naprednih koncepta kao što su React, Express i Node.js. Profesionalni predavači s 
           dugogodišnjim iskustvom u industriji vode tečajeve i pružaju praktično znanje potrebno za uspjeh u 
           web programiranju. Code School se ističe po interaktivnom pristupu učenju, gdje polaznici dobivaju 
           priliku raditi na stvarnim projektima kako bi primijenili svoje novo stečeno znanje. 
        </p>
        <p>   
           Code School također nudi i resurse poput videozapisa, vježbi i kvizova kako bi podržali učenje kroz različite stilove učenja. 
           Kroz svoje tečajeve, Code School potiče kontinuirano učenje i profesionalni razvoj svojih polaznika. 
           Sjajna prednost Code School tečajeva je što su prilagođeni svim razinama iskustva, od početnika do naprednih programera. 
           Tvrtka se također redovito ažurira s najnovijim trendovima i tehnologijama u web razvoju kako bi osigurala relevantnost 
           svojih tečajeva. Uz visokokvalitetne resurse i podršku, Code School je odličan izbor za sve koji žele naučiti ili unaprijediti 
           svoje vještine u web programiranju.
        </p>
      </div>
      <div className={classes.contact}>
        <ContactData />
        <ContactForm />
      </div>
    </div>
  );
}

export default HomePage;