import React from "react";
import { withRouter } from "react-router-dom";
import { GoogleLogin } from "react-google-login";

const SocialLogin = ({ socialGoogleLogin }) => {
  return (
    <>
      <GoogleLogin
        clientId="333133070398-amgnp101osuduqvjn2vacf3p20j2kmgn.apps.googleusercontent.com"
        onSuccess={res => {
          socialGoogleLogin(res.tokenId);
        }}
        onFailure={err => {
          console.log(err);
        }}
      />
    </>
  );
};

export default withRouter(SocialLogin);
