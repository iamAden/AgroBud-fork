import React from "react";
import { useNavigate } from "react-router-dom";

const Chatbot = () => {
  const navigate = useNavigate();

  return (
    <>
      Chatbot
      <button onClick={() => navigate(-1)}>go back</button>
    </>
  );
};

export default Chatbot;
