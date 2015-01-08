class EnrollmentsController < ApplicationController
  # TODO: Only instructor and student can destroy an enrollment
  # TODO: Only specific users can create an enrollment

  def create
    enrollment = Enrollment.new(
      user_id: current_user.id,
      section_id: params[:section_id]
    )

    if enrollment.save
      redirect_to section_url(enrollment.section.id)
    else
      flash.now[:errors] = enrollment.errors.full_messages
    end
  end

  # TODO: Think about whether this is secure?
  def index
    @user = User.includes(:classes).find(params[:user_id])

    if @user
      render :index
    else
      flash.now[:errors] = @user.errors.full_messages
      render :back # This is probably not the right answer
    end
  end

  def destroy
  end

end
