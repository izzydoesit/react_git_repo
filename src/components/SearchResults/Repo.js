import React from 'react';
import './Repo.css';

const Repo = (props) => {

  const license = props.license ? props.license.name : '--';
  const fork = props.forked
  const description = props.description.length > 100 
    ? props.description.substring(0, 120) + '...' 
    : props.description

  return(
    <li className="repo-item">
      <div className="repo-name">
        <a href={props.url} alt="repo-url">
          <h2>{props.name} {fork ? <span className="forked-repo">(Fork)</span> : ''}</h2>
        </a>
        <p>{description}</p>
      </div>
      <div className="repo-stars">
        <h3>STARS</h3>
        <p>{props.stars}</p>
      </div>
      <div className="repo-license">
        <h3>LICENSE</h3>
        <p>{license}</p>
      </div>
    </li>
  )
}

export default Repo;