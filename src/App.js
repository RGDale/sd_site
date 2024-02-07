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

// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage'; // Adjust the path based on your file structure
import AboutPage from './AboutPage'; // Adjust the path based on your file structure
import NavBar from './ui-components/NavBar'; // Assuming you have also created a NavBar component

function App() {
  return (
    <Router>
      <NavBar />
      <div className="main-image"></div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* Define more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
