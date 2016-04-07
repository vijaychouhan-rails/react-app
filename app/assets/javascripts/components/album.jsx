var Album = React.createClass({
  getInitialState: function() {
    return {data: []};
  },

  componentDidMount: function() {
    $.ajax({
      url: '/albums',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data.albums});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  render: function() {
    var albums = this.state.data.map(function(album, i){
      return(
        <div className='col-md-4 albums-contaniner' key={i}>
          <div className='col-md-12'>
            {album.title}
          </div>
          <div className='col-md-12'>
            <img src={'http://localhost:3000' + '/assets/car.jpg'} width="200px" height="200px"/>
          </div>
          <div className='col-md-12'>
            {album.description}
          </div>
          <div>
          </div>
        </div>
      )
    })
    return(
      <div>
        {albums}
      </div>
    )
  }
});

module.exports = Album;
