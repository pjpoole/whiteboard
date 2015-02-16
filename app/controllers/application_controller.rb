class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :null_session
  skip_before_action :verify_authenticity_token, if: :json_request?

  before_action :authenticate_user!, unless: :devise_controller?

  private
  def json_request?
    request.format.json?
  end


  def ensure_correct_user(params)
    unless current_user.id == params[:id].to_i
      flash[:errors] = ["You don't have permission to view this page"]
      redirect_to current_user
    end
  end

  def is_flashing_format?
    [:html, :json].include?(request_format)
  end
end
