import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Error from './pages/Error';
import Search from './pages/Search';
import Description from './pages/Description';
import Chatbot from './pages/chatbot';
import Demo from './pages/demo';

import Table from './practice/Table';
import Add from './practice/Add';
import Update from './practice/Update';
import Read from './practice/Read';

import { AppContext } from './pages/apicontext';
import { AppContext2 } from './pages/apicontext';

function App() {
  const data = 'this is data from apicontext'
  const data2 = 'this is data from apicontext_2'
  return (
    <AppContext2.Provider value={data2}>
      <AppContext.Provider value={data}>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Search />} />
              <Route exact path="/comics/:comicId" element={<Description />} />
              <Route exact path="/chatbot" element={<Chatbot />} />
              <Route exact path="/Demo" element={<Demo />} />
              <Route exact path="/Table" element={<Table />} />
              <Route exact path="/Add" element={<Add />} />
              <Route exact path="/Update" element={<Update />} />
              <Route exact path="/Read" element={<Read />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </BrowserRouter>
        </div>
      </AppContext.Provider>
    </AppContext2.Provider>


  );
}



export default App;

