import React, { Component } from 'react';
import withRequest from './withRequest';

class Post extends Component {
  render() {
    const { data } = this.props;

    if (!data) return null;

    return (
      <div>
        <h3>{data.title}</h3>
        <p>{data.body}</p>
      </div>
    );
  }
}

export default withRequest('https://jsonplaceholder.typicode.com/posts/1')(
  Post
);
