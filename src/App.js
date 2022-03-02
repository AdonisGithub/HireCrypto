import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {HomePage} from './page';
import {ContactUs1} from"../src/page/ContactUs1";

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/contactus" element={<ContactUs1 />} />
        </Routes>
      </Router>
  );
}
export default App;
