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

  def destroy
  end

end
