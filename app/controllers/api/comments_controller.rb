module Api
  class CommentsController < ApiController
    def create
      @comment = current_user.comments.new(comment_params)

      if @comment.save
        render :show
      else
        render json: @comment.errors.full_messages,
          status: :unprocessable_entity
      end
    end

    private
    def comment_params
      params.require(:comment).permit(
        :body,
        :post_id,
        :user_id,
        :parent_id
      )
    end
  end
end
