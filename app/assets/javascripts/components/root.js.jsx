var RootPage = React.createClass({

  getInitialState: function(){
    return {albums: JSON.parse(this.props.albums)};
  }, 

  render: function(){

    var albums = this.state.albums.map(function(album, i){
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

})
  
