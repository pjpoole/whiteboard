json.partial! 'api/events/event', event: @event

json.posts @event.posts, partial: 'api/posts/post', as: :post
