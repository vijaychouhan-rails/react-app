class SessionsController < Devise::SessionsController

  def create
    resource = User.find_for_database_authentication(email: params[:user][:email])
    if resource.present? and resource.valid_password?(params[:user][:password])
      sign_in :user, resource
      render json: {login: true}
    else
      render json: {login: false, message: "Invalid email or password"}
    end
  end
end