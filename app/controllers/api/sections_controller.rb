module Api
  class SectionsController < ApiController
    def create
      @section = current_user.classes_taught.new(section_params)

      if @section.save
        render :show
      else
        render json: @section.errors.full_messages
      end
    end

    def index
      @sections = params[:user_id] ?
        User.find(params[:user_id]).classes_taught :
        Section.all

      render json: @sections
    end

    def show
      @section = Section.includes(
        :events,
        :instructor,
        :posts
      ).find(params[:id])
      
      render :show
    end

    private
    def section_params
      params.require(:section).permit(
        :title,
        :description
      )
    end

  end
end
