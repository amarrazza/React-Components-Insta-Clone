import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;

  return (
    <div className='posts-container-wrapper'>
      {
        posts.map(post => {
          const numberOfLikes = post.likes;
          const comments = post.comments;
          console.log(numberOfLikes);
          return <Post post={post} likePost={likePost} numberOfLikes={numberOfLikes} comments={comments}/>
        })
      }
      {/* Map through the posts array returning a Post component at each iteration */}
      {/* Check the implementation of Post to see what props it requires! */}
    </div>
  );
};

export default Posts;
