import React, {memo} from 'react';
import {GoogleOAuthProvider, useGoogleLogin} from "@react-oauth/google";
import AppleLogin from "react-apple-login";
import * as querystring from "querystring";
import {generateQueryString} from "react-apple-login/dist/helper";
import qs from 'qs'

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

        <hr/>
        <PortalDiscordConnect/>

        <hr/>
        <PortalXConnect/>
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

const PortalDiscordConnect = () =>{
  const ConnectDiscord = async () => {

    let baseUrl = "https://discord.com/oauth2/authorize"

    const q = qs.parse({
      "client_id" : "1215480971260989470",
      "response_type" : "code",
      "redirect_uri" : "https://alpha-api.iskra.world/auth/v1/users/connect/discord/callback",
      "scope" : "identify email guilds guilds.members.read",
      "state" : "appId;https://alpha.iskra.world;origin;returnUrl;returnTo"
    })


    console.log(`${baseUrl}?${qs.stringify(q)}`)
    window.location.href = `${baseUrl}?${qs.stringify(q)}`

  };



  return (
    <button onClick={ConnectDiscord}  >
      Connect Discord
    </button>
  );
};


const PortalXConnect = () =>{
  const connectX = async () => {

    let baseUrl = "https://twitter.com/i/oauth2/authorize"

    const q = qs.parse({
      "client_id" : "RHl5cjZhZVZtNTQzbmFMZVRkSFo6MTpjaQ",
      "response_type" : "code",
      "redirect_uri" : "https://alpha-api.iskra.world/auth/v1/users/connect/x/callback",
      "code_challenge" : "challenge",
      "code_challenge_method" : "plain",
      "scope" : "offline.access tweet.read users.read like.read follows.read",
      "state" : "appId;https://alpha.iskra.world;origin;returnUrl;returnTo"
    })


    console.log(`${baseUrl}?${qs.stringify(q)}`)
    window.location.href = `${baseUrl}?${qs.stringify(q)}`

  };



  return (
    <button onClick={connectX}  >
      Connect X
    </button>
  );
};


export default App;