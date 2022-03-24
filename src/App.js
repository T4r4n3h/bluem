import { Component} from 'react';
import {Route,Routes} from 'react-router-dom';

import AccountPage from './pages/AccountPage';
import Wallet from './pages/Wallet';
import Pocket from './pages/PocketPage';
import CreateMissionPage from './pages/CreateMissionPage';
import HomePage from './pages/HomePage';





export default class App extends Component {
  state = { }
  render() {
    return (
      <div className="App border mx-auto">
          <Routes>

            <Route path='/' element={<HomePage/>}/>
            <Route path='/account' element={<AccountPage/>}/>
            <Route path='/wallet' element={<Wallet/>}/>
            <Route path='/pocket' element={<Pocket/>}/>
            <Route path='/create' element={<CreateMissionPage/>}/>
            
          </Routes>
      </div>
    );
  }
}
