import React, { Component } from 'react';
import Home from '../home/home';
import About from '../about/about';
import CustomsPrice from '../customsPrice/customsPrice';
import Services from '../services/services';
import Packages from '../packages/packages';

function Helper() {
  return (
    <>
      <Home/>
      <About/>
      <Services/>
      <CustomsPrice/>
      <Packages/>
    </>
  );
}

export default Helper;
