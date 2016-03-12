var TodoList = React.createClass({
  getInitialState: function(){
    return {albums: JSON.parse(this.props.albums)};
  }, 

  render: function(){
    var albums = this.state.albums.map(function(album, i){
      return(
        <div className='col-md-12'>
          <div className='col-md-3' key={i}>
            <div className='col-md-12'>
              {album.title}
            </div>
            <div className='col-md-12'>
              {album.description}
            </div>
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
  
