import React from 'react';

const Tags = ({ tags }) => (
  <ul className="tag-list">
    {tags.map(tag => (
      <li key={tag.id} className="column is-6">
          <a href={ '/' + tag.name }>{tag.name}</a>
      </li>
    ))}
  </ul>
);

export default Tags;
