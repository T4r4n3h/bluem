import {Component} from 'react'
import { Link } from 'react-router-dom';
import oliviaimg from '../assets/Olivia.png';
import momimg from '../assets/Mom.png';
import Wallet from "../components/Wallet";


export default class AccountPage extends Component {
  state = { user: "" };

  handleClick = (e) => {
    this.setState({ user: e });
  };

  render() {
    return (
      <div className="accountpage flex flex-wrap place-content-center gap-4 w-screen h-screen bg-cornflowerblue text-reallywhite">
        <div className="">
          <img src={oliviaimg} alt="Account Icon" width="100" height="100" />
          <Link to="/wallet">
            <button onClick={() => this.handleClick('Olivia')}>
              <p className="text-center text-lg mt-3">Olivia</p>
            </button>
          </Link>
        </div>

        {/* <div className="">
          <img src={momimg} alt="Account Icon" width="100" height="100" />
          <Link to="/account">
            <button onClick={() => this.handleClick("mom")}>
              <p className="text-center text-lg mt-3">Mom</p>
            </button>
          </Link>
        </div> */}
      </div>
    );
  }
}


// const AccountPage = () => {
//  const [name, setName] = useState('muffin')



//   return (
   
    
//   )
// }

// export default AccountPage