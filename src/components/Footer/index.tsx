import React from "react";
import "./styles.scss";

export default function Footer() {

  const startYear = 2022;
  const date = new Date();

  return <footer className="center">&copy; {startYear} - {date.getFullYear()} All Rights Reserved</footer>;
}
