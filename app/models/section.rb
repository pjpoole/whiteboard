class Section < ActiveRecord::Base
  belongs_to (
    :instructor,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :instructor_id
  )

  
end
