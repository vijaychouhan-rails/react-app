var routerModule = require('react-router');
var Link = routerModule.Link

var MountUp = React.createClass({
  
  render: function () {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/">Repos</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }

});

module.exports = MountUp;
