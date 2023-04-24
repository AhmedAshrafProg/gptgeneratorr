import React from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId ="610213059033-tjkar15vm7ondjpkhajev17735qave2l.apps.googleusercontent.com";

function Login(){
    const onSuccess = (res) =>{
        console.log("Login Success Current User: ",res.profileObj)
    }
    const onFailure = (res) =>{
        console.log("Login failed res: ",res)
    }
return <div id="signInButton">
<GoogleLogin
clientId={clientId}
buttonText='Login'
onSuccess={onSuccess}
onFailure={onFailure}
cookiePolicy={'single_host_origin'}
isSignedIn={true}
/>
</div>

}

export default Login;