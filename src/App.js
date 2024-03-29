import React, { useEffect, useState } from 'react';
import './App.css';
import { db } from './firebase';
import Post from './Post';

function App() {

  const [posts, setPosts] = useState([

  ]);

  useEffect(() => {
    db.collection('posts')
      .onSnapshot(snapshot => {
        setPosts(snapshot.docs.map(doc => (
          {
            id: doc.id,
            post: doc.data()
          }
        ))
        );
      })
  }, [])
  return (
    <div className="App">

      {/*Header */}
      <div className="app__header">
        <img className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />

      </div>
      <h1>Instagram Clone</h1>
      {
        posts.map(({id, post}) => {
          return <Post key={id}
            username={post.username}
            caption={post.caption}
            imageUrl={post.imageUrl} />
        })
      }
    </div>
  );
}

export default App;

