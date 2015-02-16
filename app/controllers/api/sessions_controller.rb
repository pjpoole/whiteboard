class Api::SessionsController < Devise::SessionsController
  respond_to :json
  # before_filter :configure_sign_in_params, only: [:create]

  # GET /resource/sign_in
  # def new; end

  # POST /resource/sign_in
  def create
    super
  end

  def show
    if current_user
      render :show
    else
      render json: {}
    end
  end

  # DELETE /resource/sign_out
  def destroy
    super
  end

  # protected

  # You can put the params you want to permit in the empty array.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.for(:sign_in) << :attribute
  # end
end
