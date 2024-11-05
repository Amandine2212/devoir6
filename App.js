import React, {useState,useEffect} from "react";

export default function App() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const res = await fetch("https://api.github.com/users/github-john-doe"); 
    const json = await res.json();
    setUsers (json);
}

  useEffect(() => {
    getUsers();
     
  },[])
    return(
      <div className="App">
        <header>
          <h1>Profil John DOE</h1>
        </header>
        <ul>
          {users.map(user => (
            <li>{user.name}</li>
          ))}
        </ul>
        <ul>
          {users.map(user => (
            <li>{user.avart_url}</li>
          ))}
        </ul>
        <ul>
          {users.map(user => (
            <li>{user.bio}</li>
          ))}
        </ul>
        <ul>
          {users.map(user => (
            <li>{user.followers}</li>
          ))}
        </ul>
        <ul>
          {users.map(user => (
            <li>{user.following}</li>
          ))}
        </ul>
        <ul>
          {users.map(user => (
            <li>{user.create_at}</li>
          ))}
        </ul>
        <ul>
          {users.map(user => (
            <li>{user.updated_at}</li>
          ))}
        </ul>
        <ul>
          {users.map(user => (
            <li>{user.repos_url}</li>
          ))}
        </ul>
      </div>
    )
  }