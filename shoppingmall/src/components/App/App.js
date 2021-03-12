import React from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './App.scss';
import Header from '../Header/header'
import SubHeader from '../Header/sub-header'
import Body from '../Body/body'
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
        <div>
          <Header/>
          <SubHeader/>
          {/* <Body items={this.state.items}/> */}
        </div>
      </BrowserRouter>
    )
  }
}
