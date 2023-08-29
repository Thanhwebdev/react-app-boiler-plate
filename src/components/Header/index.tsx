import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import imgPlaceholder from '../../assets/placeholder-image.jpeg';

export default function Header() {
  return <header>
    <nav className="main-nav">
      <Link to={''}><img className="company-logo" src={imgPlaceholder} alt="image placeholder" /></Link>
      <ul>
        <li><Link to={'sign-in'}>Sign in</Link></li>
        <li><Link to={'sign-up'}>Sign Up</Link></li>
      </ul>
    </nav>
  </header>;
}
