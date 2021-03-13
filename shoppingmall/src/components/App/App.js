import React from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './App.scss';
import Header from '../Header/header'
import SubHeader from '../Header/sub-header'
import Body from '../Body/body'
import MainBanner from '../Body/mainbanner'
import MenuBanner from '../Body/menubanner'
import data from '../../MOCK_DATA.json'


export default class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      items : data
    }
  }

  render() {
    return(
      <BrowserRouter>
        <head>
          <title>BRAND</title>
        </head>
        <body>
          <div>
            <Header/>
            <SubHeader/>
            <MainBanner/>
            <MenuBanner/>
          </div>
        </body>
      </BrowserRouter>
    )
  }
}
