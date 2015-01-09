class Post < ActiveRecord::Base
  validates :topic, presence: true


  belongs_to :user
  belongs_to :section
  belongs_to :event
  has_many :comments, dependent: :destroy


  def comments_by_parent
    comments_by_parent = Hash.new { |h, k| h[k] = [] }

    self.comments.includes(:user).each do |comment|
      comments_by_parent[comment.parent_id] << comment
    end

    comments_by_parent
  end

end
