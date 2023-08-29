import React from "react";
import "./styles.scss";

export default function SignUp() {
  return <main className="sign-up-page">
    
    <section>
      <h2>Sign up</h2>
      <form>
        <p>
          <input placeholder="username" />
        </p>
        <p>
          <input type="email" placeholder="email" />
        </p>
        <p>
          <input type="password" placeholder="password" />
        </p>
        <p>
          <input type="password" placeholder="confirm password" />
        </p>
        <button>Register</button>
      </form>
    </section>

  </main>;
}
