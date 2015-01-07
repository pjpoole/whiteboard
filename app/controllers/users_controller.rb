class UsersController < ApplicationController

  skip_before_action :require_signed_in!, only: [:new, :create]

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    if @user.password == params[:user][:password_verify]
      if @user.save
        redirect_to user_url
      else
        flash.now[:errors] = @user.errors.full_messages
        render :new
      end

    else
      flash.now[:errors] = ["Passwords do not match"]
      render :new
    end
  end

  def show
    @user = User.find(params[:id])

    if @user
      render :show
    else

    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :name, :password)
  end
end
