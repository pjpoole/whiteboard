class Section < ActiveRecord::Base
  validates :title, presence: true

  belongs_to(
    :instructor,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :instructor_id
  )


end
