import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'; 

const UserItem =({user:{login,html_url,avatar_url}})=>  { ////(IMPORTANT) Jis class mein UserItem use hoga(eg:in Users.js), vahan {user:{login,html_url,avatar_url}} defined hoga in a state.        
    
    
                                                   //Write state using a contructor function; a State is nothing but a JS object
    //constructor(){ 
        //super();
        // this.state={
        //     id:'id',
        //     login:'mojombo',
        //     avatar_url:'https://avatars0.githubusercontent.com/u/1?v=4',
        //     html_url:'https://github.com/mojombo'

        // }
   // }
//    state={                                 //State can also be written like this.(without using the constructor function.)
//     id:'id',
//     login:'mojombo',
//     avatar_url:'https://avatars0.githubusercontent.com/u/1?v=4',
//     html_url:'https://github.com/mojombo'

//    } 
        
//We can destructure in order to avoid writing this.props.login/avatar_url/html_url etc. each time.
        
        //const { login,avatar_url,html_url }=props.user;   //Wrote this in function declaration itself.
        return (
            <div className='card text-center'>
                <img alt="null" src={avatar_url} className='round-img' style={{width:'60px'}}>
                </img>
                <h3>{login}</h3>
                <div>
                    <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>More</Link>
                    
                </div>
                
            </div>
        )
    
}

UserItem.propTypes={
    user:PropTypes.object.isRequired,
}

export default UserItem;
