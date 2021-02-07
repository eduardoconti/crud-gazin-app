import React from "react"

export default function HeaderComponent() {
  return (
    <header
      className="App-header"
      style={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <img src="https://gazin.com.br/images/svg/new-logo.svg" alt="logo Gazin"></img>
      <p style={{ fontSize: 25, color: "rgb(27,78,141)", fontWeight: "bold", fontFamily:'sans-serif' }}>
        CRUD Desenvolvedores
      </p>
    </header>
  );
};
