json.partial! 'api/comments/comment', comment: @comment

json.partial! 'api/users/user', user: @comment.user
