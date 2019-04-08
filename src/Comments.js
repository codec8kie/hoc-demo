import React, { Component } from 'react';
import withRequest from './withRequest';

class Comments extends Component {
  render() {
    const { data } = this.props;

    if (!data) return null;

    return (
      <div>
        {data.map((item, index) => {
          return (
            <ul key={index}>
              <li>{item.id}</li>
              <li>{item.name}</li>
              <li>{item.email}</li>
              <li>{item.body}</li>
            </ul>
          );
        })}
      </div>
    );
  }
}

export default withRequest(
  'https://jsonplaceholder.typicode.com/comments?postId=1'
)(Comments);
