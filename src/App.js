import './App.css';
import Header from './Header';
import About from './About';
import Users from './Users';
import Main from './Main';
import UserId from './UserId';
import Error from './Error';

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Header/>
        {/* SPA */}
        {/* <nav>
          <li><Link to='/'>Main</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/users'>Users</Link></li>
        </nav> */}
        {/* Old vers react-router-dom (5.3.0) */}
        {/* <Switch>
          <Route exact path='/' component={Main}/>
          <Route path='/about' component={About}/>
          <Route exact path='/users' component={Users}/>
          <Route path='/users/:userName' component={UserId}/>
          <Route path='' component={Error}/>
        </Switch> */}

        <Routes>
        
          <Route exact path='/' element={<Main/>}/>
          <Route path='/about' element={<About/>}/>
          <Route exact path='/users' element={<Users/>}/>
          <Route path='/users/:userName' element={<UserId/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
