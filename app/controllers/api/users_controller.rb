module Api
  class UsersController < ApiController

    skip_before_action :require_signed_in!, only: [:new, :create]
    before_action :ensure_correct_user, only: [:edit, :update]
    # TODO: redirect logged in users heading toward /new

    def new
      @user = User.new
    end

    def create
      @user = User.new(user_params)

      if @user.save
        sign_in(@user)
        render 'api/sessions/show'
      else
        head :unprocessable_entity
      end

    end

    def show
      @user = User.find(params[:id])

      if @user
        render :show
      else
        head :unprocessable_entity
      end
    end

    def edit
      @user = User.find(params[:id])

      render :edit
    end

    def update
      @user = User.find(params[:id])

      if params[:user][:password] == "" &&
        params[:user][:password_verify] == ""
          params[:user].delete :password
          params[:user].delete :password_verify
      end

      if @user.update(user_params)
        redirect_to @user
      else
        flash[:errors] = @user.errors.full_messages
        render :edit
      end
    end

    private
    def user_params
      params.require(:user).permit(:email, :name, :password, :password_verify)
    end
  end
end
