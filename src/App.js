import './App.css';
import NavBar from './Components/Navbar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import React from 'react';
import {originals,action,comedy,horror} from './urls'

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <RowPost url={originals} title='Netflix Originals'/>
     <RowPost url={action} title='Action' isSmall/>
     <RowPost url={comedy} title='Comedy' isSmall/>
     <RowPost url={horror} title='Horror' isSmall/>
    </div>
  );
}

export default App;
