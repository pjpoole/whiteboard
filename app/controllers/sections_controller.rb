class SectionsController < ApplicationController
  def new
    @section = Section.new
  end

  def create
    @section = Section.new(
      section_params.merge(instructor_id: current_user.id)
    )
  end

  def show
    @section = Section.find(params[:id])
  end

  def index
  end

  def edit
    @section = Section.find(params[:id])
  end

  def update
    @section = Section.find(params[:id])

    if @section.update(section_params)
      redirect_to section_url(@section)

  end

  def destroy
  end

  private
  def section_params
    params.require(:section).permit(
      :title,
      :description
      # :instructor_id
    )
  end
end
