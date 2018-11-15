import React, { Component } from 'react'
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
//Importing class 'MovieList' from movie-list.js
import MovieList from './components/movie-list'
import MovieView from './components/movie-view'
class App extends Component {
  render() {
    return (
    
        <BrowserRouter>
        <div>
          <div style={{backgroundColor:'#18182b'}}>
                <img style={{width:'120px',height:'50px',marginLeft:'15px'}} src='https://kundservice.viaplay.se/wp-content/themes/viaplaycs/assets/dist/images/viaplay_white.svg' />
          </div>
          <Switch>
            <Route path='/:publicpath' component={MovieView} />
            <Route path='/' component={MovieList}/>
          </Switch>
          <div style={{backgroundColor:'#18182b',height:'40px'}} />
        </div>
        </BrowserRouter>
      
    );
  }
}

export default App;
