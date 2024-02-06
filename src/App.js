// import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
// import {
//   Button,
//   Flex,
//   Heading,
//   Text,
//   TextField,
//   Image,
//   View,
//   withAuthenticator,
// } from "@aws-amplify/ui-react";
// import { listNotes } from "./graphql/queries";
// import {
//   createNote as createNoteMutation,
//   deleteNote as deleteNoteMutation,
// } from "./graphql/mutations";
// import { generateClient } from 'aws-amplify/api';
// import { uploadData, getUrl, remove } from 'aws-amplify/storage';
import {
  NavBarHeader 
 } from './ui-components';
 
function App() {
  return (
    <div>
      <NavBarHeader></NavBarHeader>
    </div>
  );
}

export default App;