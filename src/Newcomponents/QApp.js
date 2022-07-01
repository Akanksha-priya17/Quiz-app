import {
  BrowserRouter as Router,
  Route, Link
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import Register from './Register';
import TeacherHome from './TeacherHome';
import StudentHome from './StudentHome';
import AddQuestion from './AddQuestion';
import QuestionBank from './QuestionBank';
import Test from './Test';
import Home from './Home';
import { 
  Navbar,
  Nav
 } from "react-bootstrap";

function QApp() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#">Quiz Zone</Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="#home"><Link to="/">Home </Link></Nav.Link>
            <Nav.Link href="#login"><Link to="/login"> Login </Link></Nav.Link>
            <Nav.Link href="#register"><Link to="/register"> Register </Link></Nav.Link>
          </Nav>
        </Navbar>
        
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/teacherhome">
          <TeacherHome/>
        </Route>
         <Route path="/addquestion/:id"
        render={
          props=>(<AddQuestion {...props}/>)
        }>
        </Route> 
        {/* <Route path="/addquestion">
        <AddQuestion/>
        </Route> */}
         <Route path="/questionbank/:id"
        render={
          props=>(<QuestionBank {...props}/>)
        }>
        </Route>  
        {/* <Route path="/questionbank">
        <QuestionBank/>
        </Route> */}
        <Route path="/studenthome">
          <StudentHome/>
        </Route>
        <Route path="/test">
          <Test/>
        </Route>
      </Router>
    </div>
  );
}

export default QApp;
