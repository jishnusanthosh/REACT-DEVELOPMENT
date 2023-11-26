// In your React component or entry point file
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect, useState } from 'react';
// import Products from './Components/Products/Products';
// import { Container } from "react-bootstrap";
//import Effects from './Components/Effects/Effects';

function App() {
  const [posts,setPosts]=useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => setPosts(posts.splice(0,10)))
  },[])
 
  
 
  return (
    <div className='App'>
    <h1>Fetch api data</h1>
    {
      posts.map((post)=>
        <h1>{post.title}</h1>
      )
    }
    </div>
  );
}

export default App;
