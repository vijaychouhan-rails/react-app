class HomeController < ApplicationController
  def index
  end

  def albums
    @albums = Album.all
    render json: {albums: @albums}
  end

end
