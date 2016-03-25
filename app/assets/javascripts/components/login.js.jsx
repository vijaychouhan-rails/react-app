var Login = React.createClass({

  getInitialState: function() {
    return {current_user: false};
  },

  componentDidMount: function() {
   $.ajax({
      method: "GET",
      url: "auth/is_signed_in"
    })
    .complete(function(data){
      if(data.responseJSON.signed_in){
        this.props.history.push('/albums');
        //this.setState({current_user: data.responseJSON.signed_in})
      }else{
        this.setState({current_user: data.responseJSON.signed_in})
      }
    }.bind(this));
  },

  _handleSignInClick: function(e){
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

  _handleInputChange: function(ev) {
    var nextState = _.cloneDeep(this.state);
    nextState[ev.target.name] = ev.target.value;
    this.setState(nextState);
  },

  render: function(){
    return(
      <div>
      {
        this.state.current_user ? 'msg' : 
          <form>
          <input type='email' name='email' placeholder='email address' value={this.props.email} onChange={this._handleInputChange}/>
          <input type='password' name='password' placeholder='password' value={this.props.password} onChange={this._handleInputChange} />
          <input type='submit' defaultValue='login' onClick={this._handleSignInClick} />
        </form>


      }
      </div>
    )
  }

})

var LoginForm = React.createClass({
  render: function(){
    return(
      <div>
        
      </div> 
    )
  }
})