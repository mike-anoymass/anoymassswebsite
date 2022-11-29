import React from 'react'
import { Navbar, Brand, CTA, Article } from "./components"
import {  Blog, Feature, Footer, Header, Posibility, WhatSoftLabs  } from "./containers"

import './App.css'

function App() {
  return (
    <div className='App'>
        <div className="gradient__bg">
          <Navbar></Navbar>
          <Header></Header>
        </div>
        <Brand></Brand>
        <WhatSoftLabs></WhatSoftLabs>
        <Feature></Feature>
        <Posibility></Posibility>
        <CTA></CTA>
        <Blog></Blog>
        <Footer></Footer>
    </div>
  )
}

export default App