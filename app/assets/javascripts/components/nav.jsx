var routerModule = require('react-router');
var Router = routerModule.Router;
var Route = routerModule.Route;
var browserHistory = routerModule.browserHistory

var About = require ('./about.jsx');
var Index = require ('./index.jsx');
var MountUp = require ('./mount_up.jsx');

var Nav = React.createClass({

  render: function() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={MountUp}>
          <Route path="repos" component={Index}/>
          <Route path="about" component={About}/>
        </Route>
      </Router>
        
    );
  }
});

module.exports = Nav;
