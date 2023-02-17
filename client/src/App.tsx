import {BrowserRouter as Router,useRoutes,} from 'react-router-dom'
import Header from './components/Header'
import routes from '~react-pages'
import Footer from './components/Footer'
import HomeIcon from '@rsuite/icons/legacy/Home';
import CogIcon from '@rsuite/icons/legacy/Cog';

import { Navbar, Nav, Toggle } from 'rsuite';

import React from 'react';


const App = () => {
  return (
    <>
    <Header/>
      {useRoutes(routes)}
      <Footer />


    </>
  )
}

export default App
