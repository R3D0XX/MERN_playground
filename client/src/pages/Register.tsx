import React, { ChangeEvent, FormEvent, useState } from "react";

type UserImage = {
  userImage: string;
};

interface User extends UserImage {
  userName: string;
  email: string;
  password: string;
}

const Register = () => {
  const [selectedFile, setselectedFile] = useState<File | string>("");
  const [newUser, setnewUser] = useState<User>({
    userName: "",
    email: "",
    password: "",
    userImage: "",
  });

  const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("e", e.target.files?.[0]);
    setselectedFile(e.target.files?.[0] || "");
  };
  const handleFileSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("profileImage", selectedFile);

    const requestOptions = {
      method: "POST",
      body: formdata,
    };

    try {
      const response = await fetch(
        "http://localhost:5001/api/users/imageUpload",
        requestOptions
      );
      const result = (await response.json()) as UserImage;
      console.log("result", result);

      setnewUser({ ...newUser, userImage: result.userImage });
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleRegisterInput = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("e.target.name ", e.target.name);
    console.log("e.target.value", e.target.value);
    setnewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleSubmitRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const urlencoded = new URLSearchParams();
    urlencoded.append("userName", newUser.userName);
    urlencoded.append("email", newUser.email);
    urlencoded.append("password", newUser.password);
    urlencoded.append(
      "password",
      newUser.userImage
        ? newUser.userImage
        : "https://tse2.mm.bing.net/th?id=OIP.jUNv1G1kKJbVPlZYBOSsDQAAAA&pid=Api"
    );

    const requestOptions = {
      method: "POST",
      body: urlencoded,
    };
    try {
      const response = await fetch(
        "http://localhost:5001/api/users/register",
        requestOptions
      );
      const result = await response.json();
      console.log("result", result);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <div>
        <div>
          <form className="input-form" onSubmit={handleSubmitRegister}>
            <input
              type="text"
              name="userName"
              id="userName"
              onChange={handleRegisterInput}
            />
            <label htmlFor="userName">User Name</label>
            <input
              type="text"
              name="email"
              id="email"
              onChange={handleRegisterInput}
            />
            <label htmlFor="email">E-Mail</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleRegisterInput}
            />
            <label htmlFor="password">Password</label>
            <button type="submit">Register</button>
          </form>
        </div>

        <form onSubmit={handleFileSubmit}>
          <input
            type="file"
            name="profileImageUpload"
            id="profileImageUpload"
            onChange={handleFileInput}
          />
          <button type="submit">upload image</button>
        </form>
      </div>
      <div>
        {newUser.userImage && (
          <div>
            <img src={newUser.userImage} alt="user-avatar-picture" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
