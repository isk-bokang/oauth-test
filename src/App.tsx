import React, {memo} from 'react';
import {GoogleOAuthProvider, useGoogleLogin} from "@react-oauth/google";
import AppleLogin from "react-apple-login";

function App() {

    const googleOauthClientId = '238863129365-lpug07846cl3hvvskovbfi17hfflkgd8.apps.googleusercontent.com'

    return (
      <>
        <GoogleOAuthProvider clientId={googleOauthClientId}>
          <div>
            <PortalLogin/>
            <hr/>
            <AppPortalLogin/>
          </div>
        </GoogleOAuthProvider>

        <hr/>
        <PortalAppleLogin/>
      </>

    );
}

const PortalLogin = memo(() => {
  const loginButtonOnClick = useGoogleLogin({
    flow: "auth-code",
    ux_mode: 'redirect',
    state: "appID;origin;returnUrl;return_to",
    redirect_uri: "https://alpha-api.iskra.world/auth/v1/users/google/callback",

  });
  return (
    <>
      <h2>ALPHA PORTAL LOGIN</h2>

      <button onClick={() => loginButtonOnClick()} style={{width: 200, height: 200}}>
        <img src="https://www.svgrepo.com/show/355037/google.svg" alt={'GOOGLE'}
             style={{width: '100%', height: '100%'}}/>
      </button>
    </>
  );
});

const AppPortalLogin = memo(() => {
  const loginButtonOnClick = useGoogleLogin({
    flow: "auth-code",
    ux_mode: 'redirect',
    state: "8iXUoqQugWcpMJAl8WVp;LOGIN", // {APP ID};{Login Type};{Connect ID}
    //redirect_uri: "http://localhost:8080/v1/app/users/google/callback",
    redirect_uri: "https://alpha-api.iskra.world/auth/v1/app/users/google/callback",

  });
  return (
    <>
      <h2>ALPHA APP PORTAL LOGIN</h2>

      <button onClick={() => loginButtonOnClick()} style={{width: 200, height: 200}}>
        <img src="https://www.svgrepo.com/show/355037/google.svg" alt={'GOOGLE'}
             style={{width: '100%', height: '100%'}}/>
      </button>
    </>
  );
});

const PortalAppleLogin = () => {
  return (
    <AppleLogin clientId="world.iskra.dev.account.portal"
                redirectURI='https://alpha-api.iskra.world/auth/v1/users/apple/callback'
      //"https://poor-results-nail.loca.lt/v1/users/apple/callback"
                state={"appID%3Bhttps%3A%2F%2Falpha.iskra.world%2Fuser%2Fsignin%2Foauth%3B%3B%2F%3B%3B%3B"}
                scope={'email'}
                responseMode={'form_post'}
    />
  )
}
export default App;