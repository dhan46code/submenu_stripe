import React from 'react';
import ReactDom from 'react-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import SubMenu from './components/SubMenu';
import { AppProvider } from './components/context';

import './global.css';

const App = () => {
  return (
    <>
      <AppProvider>
        <Navbar />
        <Hero />
        <Sidebar />
        <SubMenu />
      </AppProvider>
    </>
  );
};

ReactDom.render(<App />, document.getElementById('root'));
