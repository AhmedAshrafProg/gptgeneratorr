import FormGenerator from './components/FormGenerator';
// import LoginFunc from './components/LoginFunc';
// import LogoutFunc from './components/LogoutFunc';
// import { gapi } from 'gapi-script';
import React from 'react';
// import './App.css'
//import LoginForm from './components/LoginForm';
import './assets/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import VerfiyEmail from './components/VerfiyEmail';
//import RegisterForm from './components/RegisterForm';
//import { Auth } from './components/Auth';

// const CLIENT_ID = "610213059033-tjkar15vm7ondjpkhajev17735qave2l.apps.googleusercontent.com";
// const API_KEY = "AIzaSyAI16btgUctPgylAjHWEdJ0i_YldfjTzjk";
// const SCOPES = "https://www.googleapis.com/auth/drive";


function App() {
// useEffect(()  =>{
// function start(){
// gapi.client.init({
// apiKey : API_KEY,
// clientId : CLIENT_ID ,
// scope : SCOPES
// })
// }
// gapi.load("client:auth2",start)
// })

// function zerofill(i){
//   return ( i < 10 ? '0' : '') + i ;
// }

// function getDateString(){
// const date = new Date();
// const year = date.getFullYear();
// const month =zerofill(date.getMonth()+1);
// const day = zerofill(date.getDate());
// return year + '-' + month + '-' + day;
// }

// function getTimeString(){
// const date = new Date();
// return date.toLocaleTimeString();

// }

// function createFile(tag) {
// var accessToken = gapi.auth.getToken().access_token;
// var fileName = tag + " Notes " + getDateString() + " " + getTimeString();
// fetch('https://docs.googleapis.com/v1/documents?title=' + fileName ,{
//   method :"POST",
//   headers : new Headers({'Authorization': 'Bearer '+ accessToken})
// }).then((res)=> {
//   return res.json();
// }).then(function(val){
//   console.log(val);
//   window.open("https://docs.google.com/document/d/"+val.documentId +"/edit", "_blank");
// })
// }

// function addTextToEndOfDocument(documentId, text) {
//   var accessToken = gapi.auth.getToken().access_token;

//   // Build the requests to add text to the end of the document
//   var requests = [
//     {
//       insertText: {
//         text: text,
//         endOfSegmentLocation: {}
//       }
//     }
//   ];

//   // Send the batch update request to add text to the end of the document
//   fetch('https://docs.googleapis.com/v1/documents/' + documentId + ':batchUpdate', {
//     method: 'POST',
//     headers: new Headers({
//       'Authorization': 'Bearer ' + accessToken,
//       'Content-Type': 'application/json'
//     }),
//     body: JSON.stringify({ requests: requests })
//   }).then(function(res) {
//     console.log('Text added to the end of the document!');
//   }).catch(function(error) {
//     console.error('Error adding text to the end of the document:', error);
//   });
// }



  return (
    <div>
      <BrowserRouter>
  <Routes>
        <Route exact path="/" element={<RegisterForm/>} />
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/generator" element={<FormGenerator/>} />
        <Route exact path="/register" element={<RegisterForm/>} />
        <Route path="/verify" element={<VerfiyEmail/>} />
      </Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
