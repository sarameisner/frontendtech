// jeg skriver "use client"; fordi at dette komponent skal reagere på browserens handlinger - skal skrives for, at useState virker
"use client";
// jeg bruger useState for at tilføje en tilstand til pop-up'en
import { useState } from "react";

// her importerer jeg cookie ikonet fra reacts icon bibliotek, som vi installerede i undervisningen
import { FaCookieBite } from "react-icons/fa";

// her laver jeg variablen for tilstanden
const CookieConsent = () => {
  // her bruger jeg useState til at sørge for, at pop-up'en vises som standard
  const [isVisible, setIsVisible] = useState(true);

  // her opdateres der til false hvis jeg trykker på krydset, altså lukker pop-up'en
  const handleClose = () => {
    setIsVisible(false);
  };
  //
  if (!isVisible) {
    return null; // med min if statement sørger jeg for, at hvis isVisible er false, så vises mit komponent ikke længere
  }

  // hvis jeg vil have min styling direkte her i komponentet, så skal jeg skrive i camelCase, hvis det er et opdelt ord - man kan ikke skrive bindestreger i variabler
  const styles = {
    // min hovedboks
    container: {
      position: "fixed",
      bottom: "20px",
      right: "20px",
      width: "350px",
      backgroundColor: "#111",
      color: "#fff",
      padding: "20px",
      borderRadius: "15px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    content: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "10px",
    },
    cookieIcon: {
      fontSize: "30px",
      color: "#fff",
    },
    text: {
      flex: 1,
      fontSize: "16px",
      margin: 0,
    },
    button: {
      backgroundColor: "#fff",
      color: "#111",
      border: "none",
      padding: "10px 20px",
      borderRadius: "10px",
      cursor: "pointer",
      fontSize: "16px",
      alignSelf: "center",
    },
    closeButton: {
      background: "none",
      border: "none",
      color: "#fff",
      fontSize: "18px",
      cursor: "pointer",
      alignSelf: "flex-end",
    },
  };

  return (
    <div style={styles.container}>
      {/* her er knappen til at lukke pop-up'en - jeg har lavet en onClick som kalder funktionen handleClose */}
      <button style={styles.closeButton} onClick={handleClose}>
        ✕
      </button>
      {/* indholdet i cookie pop-up'en */}
      <div style={styles.content}>
        {/* cookie-ikonet henter jeg fra react icons biblioteket */}
        <FaCookieBite style={styles.cookieIcon} />
        <p style={styles.text}>We use cookies to improve your user experience.</p>
      </div>
      {/* knappen der accepterer cookies og her kalder vi også på handleClose, så pop-up'en også lukkes */}
      <button style={styles.button} onClick={handleClose}>
        I like Cookies
      </button>
    </div>
  );
};

export default CookieConsent;
