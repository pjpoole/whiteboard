class CommentsController < ApplicationController

  # shallow routes
  def new
    @comment = Comment.new
  end

  def create
    @comment = current_user.comments.new(comment_params)

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
    # TODO:
  end

  def destroy
    # TODO:
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
