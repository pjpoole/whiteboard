json.partial! 'api/events/event', event: @event

json.section do
  json.partial! 'api/sections/section', section: @event.section
end

json.posts @event.posts, partial: 'api/posts/post', as: :post
