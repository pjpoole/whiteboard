class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    if @user.password == params[:user][:password_verify]
      if @user.save!
        render json: @user
      else
        render json: @user.errors.full_messages
      end

    else
      flash.now[:errors] = ["Passwords do not match"]
      render :new
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
