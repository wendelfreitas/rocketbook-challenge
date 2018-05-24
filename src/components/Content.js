import React, { Component } from 'react';
import Post from './Post';

export default class Content extends Component {
  render() {
    return (
      <div className="content">
        {this.props.data.map(post => <Post key={post.id} data={post} />)}
      </div>
    );
  }
}
