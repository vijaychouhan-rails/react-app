var Signin = React.createClass({
  
  getInitialState: function() {
    return{email: '', password: ''}
  },

  _handleInputChange: function(ev) {
    var nextState = _.cloneDeep(this.state);
    nextState[ev.target.name] = ev.target.value;
    this.setState(nextState);
  },

  _handleSignInClick: function(e) {
    e.preventDefault();
    $.ajax({
      method: "POST",
      url: "/users/sign_in",
      data: {
        user: {
          email: this.state.email,
          password: this.state.password
        },
        authenticity_token: $('meta[name="csrf-token"]').attr('content')
      }
    })
    .complete(function(data){
      if(data.responseJSON.login){
        location.reload();
      }else{
        alert(data.responseJSON.message)
      }
      
    }.bind(this));
    
  },

  render: function(){
    return(
      <form>
        <input type='email' name='email' placeholder='email address' value={this.state.email} onChange={this._handleInputChange}/>
        <input type='password' name='password' placeholder='password' value={this.state.password} onChange={this._handleInputChange} />
        <input type='submit' defaultValue='login' onClick={this._handleSignInClick} />
      </form>
    )
  }


})