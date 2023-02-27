import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import React, { useState } from 'react'


function App() {
  const pagesz = 10;
  const [progress, setProgress] = useState(0);
  return (
    <>
      {/* 
      <NavBar />
      <News country="in" category="entertainment" pageSize={pagesz} /> */}
      <Router>
        <NavBar />
        <LoadingBar
          color='#f11946'
          height={3}
          progress={progress}

        />


        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} key="general" pageSize={pagesz} country={"in"} category={"general"} />} />
          <Route exact path="/business" element={<News setProgress={setProgress} key="business" pageSize={pagesz} country={"in"} category={"business"} />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={pagesz} country={"in"} category={"entertainment"} />} />
          <Route exact path="/health" element={<News setProgress={setProgress} key="health" pageSize={pagesz} country={"in"} category={"health"} />} />
          <Route exact path="/science" element={<News setProgress={setProgress} key="science" pageSize={pagesz} country={"in"} category={"science"} />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={pagesz} country={"in"} category={"sports"} />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" pageSize={pagesz} country={"in"} category={"technology"} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
