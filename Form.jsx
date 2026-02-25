import { useState } from "react";

export default function Form() {
  let [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: "",
  });

  // let handleNameChange = (event) => {
  //   setFullName(event.target.value);
  // };
  // let handleUsername = (event) => {
  //   setUsername(event.target.value);
  // };

  let handleInputChange = (event) => {
    setFormData((currData) => {
      return{...currData, [event.target.name]: event.target.value};
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(FormData);
    setFormData({
      fullName: "",
      username: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullName">Full Name</label>
      <input
        placeholder="Enter FullName"
        type="text"
        value={formData.fullName}
        id="fullName"
        name="fullName"
        onChange={handleInputChange}
      />
      <br></br>
      <br></br>
      <label htmlFor="username">Username</label>
      <input
        placeholder="Enter Username"
        type="text"
        value={formData.username}
        id="username"
        name="username"
        onChange={handleInputChange}
      />
      <br></br>
      <br></br>
      <label htmlFor="password">Password</label>
      <input
        placeholder="Enter Password"
        type="password"
        value={formData.password}
        id="password"
        name="password"
        onChange={handleInputChange}
      />
      <button>Submit</button>
    </form>
  );
}
