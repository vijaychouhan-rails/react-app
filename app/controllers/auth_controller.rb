class AuthController < ApplicationController
  def is_signed_in?
    if user_signed_in?
      render :json => {"signed_in" => true, "user" => current_user.id}.to_json()
    else
      render :json => {"signed_in" => false}.to_json()
    end
  end

  def signin
  end

end
