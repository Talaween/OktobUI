import React from 'react';
import './App.css';
import { Row, Col } from 'antd'; 
import Hello from './components/Hello';
import HomeGrid from './components/HomeGrid';
import Signup from './components/Signup'

function App() {


  return (
    <div style={{ background: '#ECECEC', padding: '30px' }}>
      
      <HomeGrid />
      
    </div>
  );
}

export default App;
