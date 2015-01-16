module Api
  class SessionsController < ApiController

    skip_before_action :require_signed_in!, only: :create

    def create
      user = User.find_by_credentials(
        params[:user][:email],
        params[:user][:password]
      )

      if user
        sign_in(user)
        render :show
      else
        head :unprocessable_entity
      end
    end

    def show
      if current_user
        render :show
      else
        render json: {}
      end
    end

    def destroy
      sign_out
      redirect_to new_session_url
    end


    private
    def create_user_object(params)

    end
  end
end
