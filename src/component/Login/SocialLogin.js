import React from "react";
import { withRouter } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import styled from "styled-components";

const SocialLogin = ({ socialGoogleLogin }) => {
  return (
    <GoogleButton>
      <GoogleLogin
        clientId="333133070398-amgnp101osuduqvjn2vacf3p20j2kmgn.apps.googleusercontent.com"
        buttonText="Google Login"
        onSuccess={res => {
          socialGoogleLogin(res.tokenId);
        }}
        onFailure={err => {
          console.log(err);
        }}
        render={renderProps => (
          <button
            style={{ padding: 0 }}
            onClick={event => {
              event.preventDefault();
              socialGoogleLogin();
            }}
          >
            <i className="fab fa-google"></i>
            {"    "}GoogleLogin
          </button>
        )}
      />
    </GoogleButton>
  );
};

export default withRouter(SocialLogin);

const GoogleButton = styled.div`
  font-size: 0.9rem;
  font-family: "S-CoreDream-3Light";
  font-weight: normal;
  font-style: normal;
  line-height: 180%;
  display: flex;
  margin-left: 0.6rem;
`;
