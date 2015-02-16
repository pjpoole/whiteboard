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
  end
end
