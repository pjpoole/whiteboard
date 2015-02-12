json.partial! @event

json.posts @event.posts do |post|
  json.partial! post
  json.user post.user, :id, :name
end
