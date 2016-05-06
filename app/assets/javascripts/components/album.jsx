var Test = require ('./test.jsx');
var NewAlbum = require ('./new_album.jsx');
var routerModule = require('react-router');
var AuthenticateMixin = require ('./auth.js');
var browserHistory = routerModule.browserHistory
var Link = routerModule.Link

var Album = React.createClass({
  mixins: [AuthenticateMixin],
  getInitialState: function() {
    return {data: []};
  },

  componentDidMount: function() {
    console.log("Test")
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
        <AlbumDetails album={album} key={i}/>
      )
    })
    return(
      <div>
        <div className='col-md-12'><Link to="/new_album" className='btn btn-primary'>New</Link></div>
        {albums}
      </div>
    )
  }
});

var AlbumDetails = React.createClass({
  render: function(){
    return(
      <div>
        <div className='col-md-4 albums-contaniner'>
          <div className='col-md-12'>
            {this.props.album.title}
          </div>
          <div className='col-md-12'>
            <img src={'http://localhost:3000' + '/assets/car.jpg'} width="200px" height="200px"/>
          </div>
          <div className='col-md-12'>
            {this.props.album.description}
          </div>
          <div>
          </div>
        </div>
      </div>
    )
  }
})


//module.exports = AlbumDetails;
module.exports = Album;
