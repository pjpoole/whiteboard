module Api
  class ApiController < ApplicationController
    def ensure_correct_user
      unless current_user.id == params[:id].to_i
        head :unauthorized
      end
    end

  end
end
