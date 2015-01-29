json.extract! @section, :id, :title, :description

json.instructor do
  json.partial! 'api/users/user', user: @section.instructor
end

if current_user.can_see?(@section)
  json.events @section.events, partial: 'api/events/event', as: :event
  json.posts @section.posts, partial: 'api/posts/post', as: :post
end
