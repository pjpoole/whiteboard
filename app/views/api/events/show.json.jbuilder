json.partial! @event

json.posts @event.posts, partial: 'api/posts/post', as: :post
