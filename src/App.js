import React from 'react';
import './App.css';
import Advertisement from './Components/Advertisement';
import Header from './Components/Header';
import Main from './Components/Main';
import Navigation from './Components/Navigation';
import SubContents from './Components/SubContents';
 
                
function App(props) {
  return (
    <div className="app">
        <Header />
        <Navigation />
        <Main>
          <div>
            <SubContents />
            <SubContents />
            <SubContents />
            <Advertisement />
          </div>
       </Main>
    </div>
  );
}
                
export default App;
