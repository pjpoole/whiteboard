module Api
  class ApiController < ApplicationController
    def ensure_correct_user
      unless current_user.id == params[:id].to_i
        head :unauthorized
      end
    end

    def after_sign_in_path_for(resource)
      api_session_path(current_user)
    end

    # def require_signed_in!
    #   head :unprocessable_entity unless user_signed_in?
    # end
  end
end
