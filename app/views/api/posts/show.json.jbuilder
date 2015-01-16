json.extract! @post, :topic, :body, :user_id, :section_id, :event_id

json.comments @post.comments, partial: 'api/comments/comment', as: :comment
