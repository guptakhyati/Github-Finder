import React, { Fragment,useState } from 'react';   //useState no longer needed from vid 33 onwards. // Fragment not needed anymore from vid 34 onwards.
import Navbar from './components/layout/Navbar';
//import UserItem from './components/users/UserItem';
// import Users from './components/users/Users';
// import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import PropTypes from 'prop-types';
import './App.css';
// import axios from 'axios';
import About from './components/pages/About';
import {BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import User from './components/users/User';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

const App=()=> {                    //We are not specifying the values for the props title and icon of Navbar class, so therefore unki default values(specified in Navbar.js file jahan pe these values of props are actually being used) will be used.
                                                //Agar yahan specify karte props ki values(In line 9), toh we would have written like this-------- <Navbar title="Github Finder" icon="fab fa-github"/>
  
  // const [users, setUsers]=useState([]);
  // const [loading, setLoading]=useState(false);
  // const [alert, setAlert]=useState(null);
  // const [user, setUser]=useState({});
  // const [repos, setRepos]=useState([]);

  // state={
  //   users:[],
  //   loading:false,
  //   alert:null,
  //   user:{},
  //   repos:[],
    
  // }
  
  // async componentDidMount(){
    
  //  //console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET);    //To check whether the variable {process.env.REACT_APP_GITHUB_CLIENT_SECRET} is working or not.

  //   this.setState({loading:true});                //this.state.loading=true cannot be done. setState needs to be used for this purpose.(In class based components).

  //   const res =await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
   
  //   this.setState({users:res.data,loading:false});
  
  //     // console.log(res.data);
     
    

    
  // }
 
  
    //Search Github Users
    
    
    //Clear users from state
    

    //Set Alert 
    
    //Get Single Github User
    
    //Get users repos
    

 
  
                                              //State(defined in App.js) passed as a prop(to Users.js) in line no.64(<Users loading=..........)
  
    // const {users,user,repos,loading,alert}=this.state; 

    return (
    <GithubState>
     <AlertState> 
    <Router>
    <div className="App">
      <Navbar/>
      <div className="container">
       <Alert/> 
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About}/> 
        <Route exact path='/user/:login' component={User}/>
        <Route component={NotFound}/>

      </Switch>
    
      </div>  
      
    </div> 
    </Router>
    </AlertState>
    </GithubState> 
  );

}

App.propTypes={
  searchUsers:PropTypes.func.isRequired
}

export default App;
 