json.extract! @post, :topic, :body, :user_id, :section_id, :event_id

json.section do
  json.partial! 'api/sections/section', section: @post.section
end

json.event do
  json.partial! 'api/events/event', event: @post.event
end

json.comments @post.comments, partial: 'api/comments/comment', as: :comment
