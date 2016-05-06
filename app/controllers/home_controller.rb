class HomeController < ApplicationController
  before_action :authenticate_user!, except: :index

  def index
  end

  def albums
    @albums = Album.all
    render json: {albums: @albums}
  end

end
