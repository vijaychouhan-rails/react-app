var routerModule = require('react-router');
var browserHistory = routerModule.browserHistory

var AuthenticateMixin = {
  componentWillMount: function() {
    $.ajax({
      method: "GET",
      url: "/auth/is_signed_in",
      async: false
    })
    .done(function(data){
      if(!data.signed_in){
        // browserHistory.push('/about');
        this.setState({loggedIn: false})
      }

    }).bind(this)
    return null
  }


};

module.exports = AuthenticateMixin;
// http://stackoverflow.com/questions/31084779/how-to-restrict-access-to-routes-in-react-router