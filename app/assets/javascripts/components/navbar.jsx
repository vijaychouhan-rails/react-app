var routerModule = require('react-router');
var Router = routerModule.Router;
var Link = Router.Link;

var Navbar = React.createClass({
  render: function() {
    return (
      <div id="menu">
        <div id="menu-list">
          <div className="pure-menu pure-menu-open">
            <span className="pure-menu-heading">Blabber</span>
            <ul>
              <li><Link to="homepage">Home</Link></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Navbar;
