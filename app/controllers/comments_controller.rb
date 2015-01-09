class CommentsController < ApplicationController

  # shallow routes
  def new
    @comment = Comment.new
  end

  def create
    params[:comment].merge(user_id: current_user.id)

    @comment = Comment.new(comment_params)

    if @comment.save
      redirect_to post_url(@comment.post_id)
    else
      flash.now[:errors] = @comment.errors.full_messages
      render :back
    end
  end


  # other routes
  def update
    @comment = Comment.find(params[:id])

    @comment.update(comment_params)

  end

  def destroy

  end


  private
  def comment_params
    params.require(:comment).permit(
      :parent_id,
      :user_id,
      :post_id,
      :body
    )
  end
end
