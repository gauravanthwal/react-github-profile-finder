import React, { useState, useContext } from "react";
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext'

const Search = () => {
  const [text, setText] = useState('')
  const githubContext = useContext(GithubContext)
  const alertContext = useContext(AlertContext)

  const { searchUsers, clearUsers, users } = githubContext;
  const { setAlert } = alertContext;
  
  const onSubmit = (e) => {
    e.preventDefault();
    if(text === ''){
      setAlert('Please Enter Something!', 'light')
    }else{
      searchUsers(text);
      setText('');
    }
    
  };

  const handleChange = (e) => setText( e.target.value );

    return (
      <div>
        <form className="form" onSubmit={onSubmit}>
          <input
            type="text"
            name="text"
            placeholder="Search Users"
            value={text}
            onChange={handleChange}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
        {users.length > 0 && <input
            type="button"
            className="btn btn-light btn-block"
            onClick={clearUsers}
            value="Clear"
          />}
        
        
      </div>
    );
  }



export default Search;
