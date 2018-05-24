import React, { Component } from 'react';
import PostHeader from './PostHeader';

export default class Post extends Component {
  render() {
    return (
      <div className="post">
        <PostHeader
          name={this.props.data.name}
          image={this.props.data.image}
          hour={this.props.data.name}
        />
        <hr className="content-line" />
        <p className="content-post">{this.props.data.post}</p>
      </div>
    );
  }
}
