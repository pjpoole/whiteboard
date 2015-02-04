json.partial! 'api/posts/post', post: @post

if !@post.event_id.nil?
  json.event do
    json.partial! 'api/events/event', event: @post.event
  end
end

json.comments @post.comments, partial: 'api/comments/comment', as: :comment
