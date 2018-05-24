import React, { Component } from 'react';

export default class PostHeader extends Component {
  render() {
    const { name, hour, image } = this.props;
    return (
      <div className="post-header">
        <img className="user-photo" src={image} alt="user" />
        <div className="user-detail">
          <b className="user-name">{name}</b>
          <p className="post-hour">{hour}</p>
        </div>
      </div>
    );
  }
}
