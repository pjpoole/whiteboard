module Api
  class EnrollmentsController < ApiController
    def index
      @sections = current_user.classes

      render json: @sections
    end

    def create
      enrollment = Enrollment.includes(:section).create(
        user_id: params[:user_id],
        section_id: params[:section_id]
      )

      if enrollment
        render json: enrollment.section
      else
        head :unprocessable_entity
      end
    end

    def destroy
      enrollment = Enrollment.find_by(
        section_id: params[:section_id],
        user_id: params[:user_id]
      )

      enrollment.destroy

      render json: {}
    end
  end
end
