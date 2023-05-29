import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = e => {
    setUsername(e.target.value);
  };

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Perform signup logic here with the entered data
    // e.g., make an API call to register the user

    // Reset form fields after successful signup
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <SignupBox>
      <Link to="/">
        <h2>
          <img
            style={{ transform: "scale(0.4)", height: "200px" }}
            src="https://previews.us-east-1.widencdn.net/preview/48045879/assets/asset-view/120e11d9-89e2-4f3a-8989-8e60478c762d/thumbnail/eyJ3IjoyMDQ4LCJoIjoyMDQ4LCJzY29wZSI6ImFwcCJ9?Expires=1685354400&Signature=UAuBffmpAWZeEcHRbxWpAdFaKIVoyj4CN3BcozmhQv3llHJ7F1vDwvHBnnlrUE5latauqQFk058hHDpnY3DZ45vDSRjEaFISDcUD1pjDQvP5zSyDz47ZHYipTg0J7zQPLmKODk~stzlYCPy9rqY91I3BYcufBBGnIYYt6uJ2VZ6~SJDkk4XocqIOnx78iRLbi6gpn2DiU3V4wbDtUura9H18bYAqn2e79szSEXlFZfBjTlcU8n42XgEQnhb25~I62xyoz-GRGLB3dZVhakUDfeAgGxkfQ7Q2rdxzDAKGI5gbIgJt1h8~2fmiCujCZ96KqYIXgiArivXXgC7ZwkO2KQ__&Key-Pair-Id=APKAJM7FVRD2EPOYUXBQ"
            alt="swaglack"
          />
          <br />
        </h2>
      </Link>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">이메일주소</label>
          <br />
          <InputBox type="email" id="email" value={email} onChange={handleEmailChange} required />
        </div>
        <div>
          <label htmlFor="username">닉네임</label>
          <br />
          <InputBox type="text" id="username" value={username} onChange={handleUsernameChange} required />
        </div>

        <div>
          <label htmlFor="password">비밀번호</label>
          <br />
          <InputBox type="password" id="password" value={password} onChange={handlePasswordChange} required />
        </div>
        <div>
          <label htmlFor="password">비밀번호확인</label>
          <br />
          <InputBox type="password" id="password" value={password} onChange={handlePasswordChange} required />
        </div>

        <ButtonBox type="submit">회원가입</ButtonBox>
      </form>
      <div>
        <Link to={"/Login"} style={{ color: "grey" }}>
          이미 회원이신가요?
        </Link>
      </div>
    </SignupBox>
  );
}

export default Signup;

const SignupBox = styled.div`
  height: 680px;
  border: 1px solid none;
  margin-top: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const InputBox = styled.input`
  color: black;
  font-weight: 500;
  font-size: 23px;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 427px;
  height: 30px;
  border-radius: 5px;
  border: 0.5px solid grey;
`;

const ButtonBox = styled.div`
  font-weight: 600;
  font-size: 23px;
  padding: 10px;
  color: white;
  background-color: purple;
  font-weight: 500;
  width: 427px;
  height: 30px;
  border-radius: 5px;
  text-align: center;
  margin-bottom: 10px;
  :hover {
    cursor: pointer;
    background-color: darkviolet;
  }
`;