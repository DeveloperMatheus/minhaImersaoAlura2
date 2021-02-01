/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import PostsService from '../../src/services/posts/index';

const PostCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  color: #000;
  margin: 15px;
  display: inline-block;
  padding: 15px;
  min-height: 400px;
  width: 400px;
  h2 {
    font-size: 18px;
  }
  h3 {
    font-size: 14px;
  }
`;

const QuizDetalhePage = ({ posts }) => {
  console.log(posts);
  return (
    <div className="orange text-center flex flex-row flex-wrap align-start justify-center">
      {
        posts.map((post, index) => (
          <PostCard key={`result__${index}`}>
            <h2>{post.title}</h2>
            <h3>{post.body}</h3>
            <img src={post.owner.avatar_url} alt="teste sei la" className="w-100" />
          </PostCard>
        ))
      }
    </div>
  );
};

export async function getStaticProps() {
  const res = await PostsService.getPosts();
  return {
    props: {
      posts: res,
    },
  };
}

export default QuizDetalhePage;
