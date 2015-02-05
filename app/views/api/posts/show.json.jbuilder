json.partial! @post

if !@post.event_id.nil?
  json.event do
    json.partial! @post.event
  end
end

json.user do
  json.partial! @post.user
end

json.comments @post.comments do |comment|
  json.partial! comment
  json.user comment.user, :name, :id
end
