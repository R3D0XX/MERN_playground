import React, { useEffect } from "react";

export const fetchMemes = () => {
  fetch("localhost:5001/api/memes")
    .then((response) => response.json())
    .then((result) => console.log("result", result))
    .then((error) => console.log("error", error));
};
useEffect(() => {
  fetchMemes();
}, []);
