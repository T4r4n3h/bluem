import { Component} from 'react';
import {Route,Routes} from 'react-router-dom';

import AccountPage from './pages/AccountPage';
import HomePage from './pages/HomePage';
import Pocket from './pages/PocketPage';
import CreateMissionPage from './pages/CreateMissionPage';





export default class App extends Component {
  state = { }
  render() {
    return (
      <div className="App border mx-auto">
          <Routes>
            <Route path='/account' element={<AccountPage/>}/>
            <Route path='/wallet' element={<HomePage/>}/>
            <Route path='/pocket' element={<Pocket/>}/>
            <Route path='/create' element={<CreateMissionPage/>}/>
            
          </Routes>
      </div>
    );
  }
}
