import React,{useContext} from 'react'
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
// import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';

const Users=() =>{              ////(IMPORTANT) Jis class mein Users use hoga(eg:in App.js), vahan {users,loading} defined hoga in a state.
    
    const githubContext=useContext(GithubContext);

     const {loading,users}=githubContext;

    // state={
    //     users:[
    //         {
    //             id:'1',
    //             login:'mojombo',
    //             avatar_url:'https://avatars0.githubusercontent.com/u/1?v=4',
    //             html_url:'https://github.com/mojombo'
    //     },
    //     {
    //         id:'2',
    //         login:'defunkt',
    //         avatar_url:'https://avatars0.githubusercontent.com/u/2?v=4',
    //         html_url:'https://github.com/defunkt'
    //     },
    //     {
    //         id:'3',
    //         login:'pjhyett',
    //         avatar_url:'https://avatars0.githubusercontent.com/u/3?v=4',
    //         html_url:'https://github.com/pjhyett'
            
    //     }
    //     ]
    // }
                                          ///Use double braces {{}} when defining inline styles; not needed in Line 30
        if(loading){
            return <Spinner/>
        }
        else{
            return (
                <div style={userStyle}>                
                    {users.map(user=>(
                         <UserItem key={user.id} user={user} />   ///user={user} becomes a prop for UserItem class.
                       )                                          //The above becomes an example of a State passed in a Prop. (Pehle tha in vid 12; later we changed the code in vid 14)   
                    )}
                </div>
            );
        }
        
    
}

// Users.propTypes={
//     users:PropTypes.array.isRequired,
//     loading:PropTypes.bool.isRequired,
// }

const userStyle={
    display:'grid',
    gridTemplateColumns:'repeat(3,1fr)',
    gridGap:'1rem'
}


export default Users 
