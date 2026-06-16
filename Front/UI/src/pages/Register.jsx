import { useState } from "react";
import { registerUser } from "../services/authService";

function Register() {

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "ROLE_USER"
  });

  const handleChange = (e) => {

    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await registerUser(user);

      alert("Registration Successful");

      setUser({
        name: "",
        email: "",
        password: "",
        role: "ROLE_USER"
      });

    } catch (error) {

      console.log(error);

      alert("Registration Failed");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Register</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={user.name}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Register
        </button>

      </form>
    </div>
  );
}

export default Register;