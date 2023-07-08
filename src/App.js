import './App.css';
import React, { useEffect, useRef, useState } from 'react'

const App = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json();
    }).then((data) => setUsers(data));
  }, []);

  const ref = useRef();

  const handleSearch = () => {
    console.log(ref.current.value);
    
    //フィルタリング機能
    setSearchQuery(
      users.filter((user) => user.name.toLowerCase().includes(ref.current.value))
    );
  };

  return (
    <div className='App'>
      <div className="main">
        <h2>検索アプリ</h2>
        <input type="text" ref={ref} onChange={() => handleSearch()} />
        <div className="content">
          {searchQuery.map((user) => (
          <div className="box" key={user.id}>
            <h3>{user.name}</h3>
            <hr />
            <p>{user.email}</p>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App

