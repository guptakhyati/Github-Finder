import React,{useState,useContext} from 'react'
// import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search =() => {
    
    const githubContext=useContext(GithubContext);
    const alertContext=useContext(AlertContext);

    // state={
    //     text:'' 
    // };

   const [text, setText]=useState('');
    
   const onChange=(e)=>{                  // If you have a function within a function, write const before the inner function too.
        setText(e.target.value)    //[e.target.name] should be used in place of text since it will work in all situations then ie for email, name, loginId etc.; it would work in all cases then since we are referring to it now by e.target.name so it will take the name accordingly for/in each case.    }
    }

    const onSubmit=(e)=>{
        e.preventDefault();
        //console.log(this.state.text);
        if(text===''){
           alertContext.setAlert('Please enter something','light');
        }
        else{
            githubContext.searchUsers(text);
            // this.setState({text:''});
            setText('');
        }
        
    }
       
    return (
            <div>
                <form onSubmit={onSubmit} className='form'>
                    <input type='text' name='text' placeholder='Search Users...' value={text} onChange={onChange}></input>
                    <input 
                      type='submit'
                      value='Search'
                      className='btn btn-dark btn-block'
                    >
                    </input>
                </form>
                {githubContext.users.length>0 &&
                   
                   <button className='btn btn-light btn-block' onClick={githubContext.clearUsers}>Clear</button> 

                }
                    
                
            </div>
        )
}

//Search.propTypes={
    // searchUsers:PropTypes.func.isRequired,
    // clearUsers:PropTypes.func.isRequired,
    // showClear:PropTypes.bool.isRequired,
    // setAlert:PropTypes.func.isRequired
//}

export default Search
