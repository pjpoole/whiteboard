class Post < ActiveRecord::Base
  validates :topic, presence: true

  belongs_to :user
  belongs_to :section
  has_many :comments, dependent: :destroy
end
