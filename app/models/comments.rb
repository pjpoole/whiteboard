class Comments < ActiveRecord::Base


  belongs_to :user
  belongs_to :post

  belongs_to(
    :parent,
    class_name: 'Comments',
    foreign_key: :parent_id,
    primary_key: :id
  )
  has_many(
    :child_comments,
    class_name: 'Comments',
    foreign_key: :parent_id,
    primary_key: :id
  )
  

end
