module Api
  class SectionsController < ApiController
    def index
      @sections = params[:user_id] ?
        User.find(params[:user_id]).classes_taught :
        Section.all
        
      render json: @sections
    end


  end
end
