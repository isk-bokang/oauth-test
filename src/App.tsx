import {memo} from 'react';
import {GoogleOAuthProvider, useGoogleLogin} from "@react-oauth/google";

function App() {

    const googleOauthClientId = '238863129365-lpug07846cl3hvvskovbfi17hfflkgd8.apps.googleusercontent.com'

    return (
        <GoogleOAuthProvider clientId={googleOauthClientId}>
            <div>
                <GoogleLoginBtn/>
            </div>
        </GoogleOAuthProvider>
    );
}

const GoogleLoginBtn = memo(() => {

    const loginButtonOnClick = useGoogleLogin({
        flow: "auth-code",
        ux_mode: 'redirect',
        state : "appID;origin;returnUrl;return_to",
        redirect_uri: "https://alpha-api.iskra.world/auth/v1/users/google/callback",

    });

    return (
        <button onClick={() => loginButtonOnClick()}>
            <img src="https://www.svgrepo.com/show/355037/google.svg" alt={'GOOGLE'}/>
            <span>Continue with Google</span>
        </button>
    );
});

export default App;