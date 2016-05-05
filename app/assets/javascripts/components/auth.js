var routerModule = require('react-router');
var browserHistory = routerModule.browserHistory

var authentication;
authentication = function() {
  result = ''
  $.ajax({
      method: "GET",
      url: "/auth/is_signed_in",
      async: false
    })
    .done(function(data){
      result = data.signed_in
    })
  return result  
}

module.exports = {
  authenticate: function(){
    re = authentication()
    if(!re){
      browserHistory.push('/about');
    }
    return re
  }
}