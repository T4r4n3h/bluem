import { Component} from 'react';
import {Route,Routes} from 'react-router-dom';





export default class App extends Component {
  state = { }
  render() {
    return (
      <div className="App border mx-auto">
          <Routes>
            <Route path='/account' element={<AccountPage/>}/>
            <Route path='/wallet' element={<HomePage/>}/>
            <Route path='/pocket' element={<Pocket/>}/>
            <Route path='/task' element={<Task/>}/>
            <Route path='/create' element={<CreateMissionPage/>}/>
            
          </Routes>
      </div>
    );
  }
}
