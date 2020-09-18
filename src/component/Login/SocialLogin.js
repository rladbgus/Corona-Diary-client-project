import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import styled from "styled-components";
import getLogin from "../../Context/ContextProvider";

const SocialLogin = ({ socialGoogleLogin }) => {
  return (
    <GoogleButton>
      <GoogleLogin
        clientId="333133070398-amgnp101osuduqvjn2vacf3p20j2kmgn.apps.googleusercontent.com"
        render={renderProps => (
          <button
            style={{ padding: 0 }}
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            <i className="fab fa-google"></i>
            {"   "}GoogleLogin
          </button>
        )}
        onSuccess={res => {
          socialGoogleLogin(res.tokenId);
        }}
        onFailure={err => {
          console.log(err);
        }}
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
  margin-left: 0.53rem;
`;
