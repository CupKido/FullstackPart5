import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Post from './Post';



function Posts() {
  
  
  const [posts, setPosts] = useState([]);
  const {selected} = useParams();

  useEffect(() => {
    async function loadPosts(){
      // TODO: get user from local storage or useContext?
      const userId = 1 
      fetch('https://jsonplaceholder.typicode.com/posts?userId=' + userId)
        .then(respond => respond.json())
        .then(posts => setPosts(posts))
        .catch((error=>console.log(error)));
    }

    loadPosts();
  }, [])

  return (
    <>
      {posts.map((post, index) =>
        // <Link to={":selected="+post.id} key={index}>
          <div>
            <Post id={index} post={post}/>
            <hr style={{height: 5, backgroundColor: 'black'}}/>
          </div>
        // </Link>
        )}
    </>
  )
}

export default Posts;