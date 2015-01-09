class PostsController < ApplicationController
  def new
    @post = Post.new(
      section_id: params[:section_id],
      event_id: params[:event_id]
    )
  end

  def create
    # TODO: There may be a more idiomatic way to do this.
    section_id = params[:section_id] ||
      Event.find(params[:event_id]).section_id

    params[:post].merge!(
      section_id: section_id,
      user_id: current_user.id,
      event_id: params[:event_id]
    )
    @post = Post.new(post_params)

    if @post.save
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
      :user_id,
      :event_id
    )


  end

end
