var RouteHandler = ReactRouter.RouteHandler,
  Link = ReactRouter.Link;

var App = React.createClass({

  getInitialState: function () {
    return {
      current_user: this.props.current_user
    };
  },

  render: function() {
    return (
      <div>
        <div className="navbar navbar-default navbar-static-top">
          <div className="container">
            <Link className="navbar-brand" to='/'>PhotoStudy</Link>
            <div className="navbar-collapse collapse navbar-responsive-collapse">
              <ul className="nav navbar-nav">
                <li><Link to='/'>PhotoStudy</Link></li>
                <li><Link to='/about-us'>About Us</Link></li>
                <li><Link to='/albums'>Albums</Link></li>
                <li><Link to='/login'>Login</Link></li>
                {this.state.current_user ? ( <li><Link to='/login'>Logout</Link></li> ) : ( <li><Link to='/auth/login'>Logint</Link></li> )}
              </ul>
            </div>
          </div>
        </div>

        <div className="container main-body">
          <div className="row">
            <div className="col-lg-9">
              <RouteHandler {...this.props}/>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
});

