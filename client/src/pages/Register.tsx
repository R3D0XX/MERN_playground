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
  return (
    <div>
      <h2>Register</h2>
      <div>
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
