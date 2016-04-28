var NewAlbum = React.createClass({
  getInitialState: function() {
    return {title: '', description: '', avatar: null, preview_url: null, errors: {}};
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
        preview_url: reader.result
      });
    }

    reader.readAsDataURL(file);
  },

  render: function(){
    return(
      <div>
        <div>
          <h3>Create Album</h3>
          <form className='form-horizontal' ref='album_form' onSubmit={this.handleSubmit} encType="multipart/form-data">
            <div className="form-group">
              <label htmlFor="title" className="control-label col-sm-2">Title:</label>
              <div className="col-sm-10">
                <input type="text" value={this.state.title} name='title' onChange={this.handleChange} placeholder="Enter title" className="form-control" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="description" className="control-label col-sm-2">Description:</label>
              <div className="col-sm-10">
                <textarea value={this.state.description} name='description' onChange={this.handleChange} className="form-control" />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-2"></div>
              <div className="col-sm-10">
                <input type="file" onChange={this.handleFile} name='avatar'/>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-2"></div>
              <div className="col-sm-10">
                <button className='btn btn-primary'>Submit</button>
              </div>
            </div>
            
          </form>
        </div>
        <div className='col-md-2'></div>
        <div className='col-md-3'>
          {(this.state.preview_url != null) ? <img class='preview_al_image' src={this.state.preview_url} /> : null}
        </div>
      </div>
    )
  }
})

module.exports = NewAlbum;
