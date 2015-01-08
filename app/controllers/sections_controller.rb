class SectionsController < ApplicationController
  def new
    @section = Section.new
  end

  def create
    @section = Section.new(
      section_params.merge(instructor_id: current_user.id)
    )

    if @section.save
      redirect_to @section
    else
      flash.now[:errors] = @section.errors.full_messages
      render :new
    end
  end

  def show
    @section = Section.find(params[:id])
  end

  def index
    @sections = Section.includes(:instructor).all
  end

  def edit
    @section = Section.find(params[:id])
  end

  def update
    @section = Section.find(params[:id])

    if @section.update(section_params)
      redirect_to @section
    else
      flash.now[:errors] = @section.errors.full_messages
      render :edit
    end
  end

  def destroy
    # TODO: protect destroy, edit, update routes to check if current
    # user is instructor
    @section = Section.find(params[:id])

    @section.destroy
    redirect_to current_user
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
