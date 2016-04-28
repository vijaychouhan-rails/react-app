var NewAlbum = React.createClass({
  getInitialState: function() {
    return {title: '', description: '', avatar: null, errors: {}};
  },

  handleSubmit: function(e){
    e.preventDefault()
    $.ajax({
      url: '/albums',
      dataType: 'json',
      type: 'POST',
      data: {
        albums: {
          title: this.state.title,
          description: this.state.description,
          avatar: this.state.avatar
        }
      },
      success: function(data) {
        if(data.res){
          alert(data.message)
          this.setState(this.getInitialState())
        }else{
          alert(data.message)
        }

      }.bind(this),
      error: function(xhr, status, err) {
        alert('errors')
      }.bind(this)
    });
  },

  handleChange: function(event) {
    var state = {};
    state[event.target.name] = event.target.value;
    this.setState(state);
  },

  handleFile: function(event) {
    var self = this;
    var reader = new FileReader();
    var file = event.target.files[0];
    reader.onload = function(upload) {
      self.setState({
        avatar: upload.target.result,
      });
    }

    reader.readAsDataURL(file);
  },

  render: function(){
    return(
      <div>
        <div>
          <h3>TODO</h3>
          <form ref='album_form' onSubmit={this.handleSubmit} encType="multipart/form-data">
            <input type="text" value={this.state.title} name='title' onChange={this.handleChange} />
            <textarea value={this.state.description} name='description' onChange={this.handleChange} />
            <input type="file" onChange={this.handleFile} name='avatar' />
            <button>Submit</button>
          </form>
        </div>
      </div>
    )
  }
})

module.exports = NewAlbum;
