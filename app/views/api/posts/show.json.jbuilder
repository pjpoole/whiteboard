json.partial! 'api/posts/post', post: @post

if !@post.event_id.nil?
  json.event do
    json.partial! 'api/events/event', event: @post.event
  end
end

json.user do
  json.partial! @post.user, partial: 'api/users/user', as: :user
end

json.comments @post.comments do |comment|
  json.partial! comment, partial: 'api/comments/comment', as: :comment
  json.user comment.user, :name, :id 
end
