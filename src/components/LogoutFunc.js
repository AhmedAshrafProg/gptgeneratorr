import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId ="610213059033-tjkar15vm7ondjpkhajev17735qave2l.apps.googleusercontent.com";

function Logout() {

const onSuccess = () =>{

    console.log('log out successfully');
}

   return <div id="signOutButton">
<GoogleLogout
clientId={clientId}
buttonText={'logout'}
onLogoutSuccess={onSuccess}
/>

   </div>
    

}
export default Logout;