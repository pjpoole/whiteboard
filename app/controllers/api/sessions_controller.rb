class Api::SessionsController < Devise::SessionsController
  respond_to :json
  # before_filter :configure_sign_in_params, only: [:create]

  # GET /resource/sign_in
  # def new; end

  # POST /resource/sign_in
  def create
    if (params[:user][:email] == "guest@example.com")
      prep_guest
    end
    super
  end

  def show
    if current_user
      render :show
    else
      render json: {}
    end
  end

  # DELETE /resource/sign_out
  def destroy
    super
  end

  protected

  def prep_guest
    guest = User.find_by(email: 'guest@example.com')
    guest.destroy if guest

    guest = User.create(
      email: 'guest@example.com',
      password: 'password'
      name: 'Guest Account',
      first_name: 'Guesty',
      last_name: 'McGuesterson',
    )

    klass = guest.classes_taught.create(
      title: "Intro to some things I know",
      description: "Teaching internet people things that I'm good at"
    )

    student_ids = User.pluck(:id).sort_by { rand }.slice(0,5)

    student_ids.each do |id|
      Enrollment.create( section_id: klass.id, user_id: id )
    end

    klass.events.create(
      event_type: :session,
      date: (1.day.from_now.beginning_of_day + 12.hours),
      name: "First class!",
      body: "I'll introduce myself and tell you some of the things I know"
    )
  end

  # You can put the params you want to permit in the empty array.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.for(:sign_in) << :attribute
  # end
end
