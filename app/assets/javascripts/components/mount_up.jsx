var routerModule = require('react-router');
var Link = routerModule.Link

var MountUp = React.createClass({
  
  render: function () {
    return(
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <button className="navbar-toggle collapsed" data-target="#navbar-collapse" data-toggle="collapse" type="button">
                <span className="sr-only">
                  Toggle navigation
                </span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link to="/" className="navbar-brand">
                <span className="glyphicon glyphicon-home"></span>&nbsp;Home
              </Link>
            </div>

            <div className="collapse navbar-collapse" id="navbar-collapse">
              <ul className="nav navbar-nav">
                <li>
                  <Link to="/about">Aboutt</Link>
                </li>
                <li>
                  <Link to="/index">Index</Link>
                </li>
              </ul>

            </div>
          </div>
        </nav>
        <div className='container'>
          {this.props.children}
        </div>
      </div>
    )
  }

});

module.exports = MountUp;



