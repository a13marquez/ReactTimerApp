var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = () => {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Time App</li>
            <li>
              <IndexLink to="/" activeClassName="active">Timer</IndexLink>
            </li>
            <li>
              <Link to="/countdown" activeClassName="active">Countdown</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">Created by <a href="https://github.com/a13marquez" target="_blank ">Álvaro Márquez</a></li> 
          </ul>
        </div>
      </div>
    );
  }


module.exports = Navigation;
