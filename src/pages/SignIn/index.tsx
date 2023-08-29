import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

export default function SignIn() {
  return <main className="sign-in-page">
    
    <section>
      <h2>Log in</h2>
      <form>
        <p>
          <input type="email" placeholder="email" />
        </p>
        <p>
          <input type="password" placeholder="password" />
        </p>
        <button>Log in</button>
      </form>
      <Link to={'/password-recovery'}>Forgot password</Link>
    </section>

  </main>;
}
