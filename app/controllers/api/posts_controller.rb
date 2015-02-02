module Api
  class PostsController < ApiController
    def create
      @post = Post.create(post_params)

      if @post.save
        render :show
      else
        render json: @post.errors.full_messages,
          status: :unprocessable_entity
      end
    end

    def show
      @post = Post.includes(:section, :event).find(params[:id])

      if @post
        render :show
      else
        render json: {}, status: :unprocessable_entity
      end
    end

    private
    def post_params
      params.require(:post).permit(
        :topic,
        :body,
        :section_id,
        :user_id,
        :event_id
      )
    end

  end
end
