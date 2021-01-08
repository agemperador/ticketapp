import React from 'react';
import {Route,Switch} from 'react-router-dom'

import HomePage from './pages/homepage/homepage.page'

import './App.css';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Sucursales from './pages/sucursales/sucursales.page';
import Queues from './pages/queues/queues.page'
import User from './pages/user/user.page'

class  App extends React.Component {
  render(){
    return (
      <div className="App">

        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/sucursales' component={Sucursales}/>
          <Route path='/user' component={User}/>
          <Route path='/queues' component={Queues}/>
        </Switch>
        <Footer/>
      </div>
    )
}
}

export default App;
