class PostsController < ApplicationController
  def new
    @post = Post.new(section_id: params[:section_id])
  end

  def create
    # TODO: There may be a more idiomatic way to do this.
    params[:post].merge!(
      section_id: params[:section_id],
      user_id: current_user.id
    )

    @post = Post.new(post_params)

    if @post.save
      # What does url_for(@post.section_id) yield?
      redirect_to section_url(@post.section_id)
    else
      flash.now[:errors] = @post.errors.full_messages
      render :back
    end
  end

  def show
    @post = Post.find(params[:id])

    if @post
      render :show
    else
      flash.now[:errors] = @post.errors.full_messages
      render :back
    end
  end


  private
  def post_params
    params.require(:post).permit(
      :topic,
      :body,
      :section_id,
      :user_id
    )


  end

end
