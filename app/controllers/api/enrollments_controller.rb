module Api
  class EnrollmentsController < ApiController
    def index
      @sections = current_user.classes

      render json: @sections
    end
  end
end
