class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  skip_before_action :verify_authenticity_token, if: :json_request?

  # before_action :require_signed_in!
  before_action :authenticate_user!, unless: :devise_controller?

  # helper_method :current_user, :signed_in?

  private
  def json_request?
    request.format.json?
  end

  # def current_user
  #   @current_user ||= User.find_by(session_token: session[:session_token])
  # end
  #
  # def signed_in?
  #   !!current_user
  # end

  # def sign_in(user)
  #   @current_user = user
  #   session[:session_token] = user.reset_token!
  # end
  #
  # def sign_out
  #   current_user.try(:reset_token!)
  #   session[:sesson_token] = nil
  # end

  # def require_signed_in!
  #   redirect_to new_session_url unless signed_in?
  # end

  def ensure_correct_user(params)
    unless current_user.id == params[:id].to_i
      flash[:errors] = ["You don't have permission to view this page"]
      redirect_to current_user
    end
  end
end
