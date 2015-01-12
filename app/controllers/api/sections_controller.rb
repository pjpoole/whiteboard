module Api
  class SectionsController < ApiController
    def index
      @sections = params[:user_id] ?
        User.find(params[:user_id]).classes_taught :
        Section.all

      render json: @sections
    end

    def show
      @section = Section.includes(:events, :instructor).find(params[:id])

      render :show
    end

  end
end
