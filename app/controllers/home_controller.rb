class HomeController < ApplicationController
  def index
    @albums = Album.all
    @location_path = "/#{params[:path]}"
  end

end
