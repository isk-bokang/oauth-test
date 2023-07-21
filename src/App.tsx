import {memo} from 'react';
import {GoogleOAuthProvider, useGoogleLogin} from "@react-oauth/google";

function App() {

    const googleOauthClientId = '238863129365-lpug07846cl3hvvskovbfi17hfflkgd8.apps.googleusercontent.com'

    return (
        <GoogleOAuthProvider clientId={googleOauthClientId}>
            <div>
              <PortalLogin/>
              <hr/>
              <AppPortalLogin/>
            </div>
        </GoogleOAuthProvider>
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
    state: "appID;LOGIN", // {APP ID};{Login Type};{Connect ID}
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

export default App;