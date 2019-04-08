import React, { Component, lazy, Suspense } from 'react';

const Post = lazy(() => import('./Post'));
const Comments = lazy(() => import('./Comments'));

class App extends Component {
  render() {
    return (
      <Suspense fallback={<div>loading...</div>}>
        <h1>포스트</h1>
        <Post />
        <h2>덧글</h2>
        <Comments />
      </Suspense>
    );
  }
}

export default App;
