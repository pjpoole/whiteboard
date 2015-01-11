module Api
  class DashboardController < ApiController
    def index
      @user = User
        .includes(:classes, :classes_taught)
        .find(current_user.id)
      render :index
    end
  end

end
