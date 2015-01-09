class Comment < ActiveRecord::Base
  validates :body, presence: true
  validates :body, length: { minimum: 3 }

  belongs_to :user
  belongs_to :post

  belongs_to(
    :parent,
    class_name: 'Comment',
    foreign_key: :parent_id,
    primary_key: :id
  )
  has_many(
    :child_comments,
    class_name: 'Comment',
    foreign_key: :parent_id,
    primary_key: :id
  )


end
