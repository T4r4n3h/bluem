import { Component} from 'react';
import {Route,Routes} from 'react-router-dom';
import AccountPage from './pages/AccountPage';
import Wallet from './components/Wallet';
import Pocket from './pages/PocketPage';
import CreateMissionPage from './pages/CreateMissionPage';
import HomePage from './pages/HomePage';
import NewMissionPage from './pages/NewMissionPage';
import MyMissionPage from './pages/MyMissionPage';
import ProfilePage from './pages/ProfilePage';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
export default class App extends Component {
  state = { }
  render() {
    return (
      <div className="App mx-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/pocket" element={<Pocket />} />
          <Route path="/create" element={<CreateMissionPage />} />
          <Route path="/newmission" element={<NewMissionPage />} />
          <Route path="/mission" element={<MyMissionPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </div>
    );
  }
}
