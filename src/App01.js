import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header';

class App extends Component {



  render() {

    // const headers = ["Bradford City", "React is fab", "James Bond is ace", "Stone Roses"];


    return (
      <div className="container mainstyle" >
       //{
          //   headers.map(function(header, index){
          //     return <Header headerText = { header } key = { index } />;
          // })

          // <h1>testing</h1>
          
        //}
        <div className="heading">
        <Header />
        </div>
</div>
    );
  }
}

export default App;
