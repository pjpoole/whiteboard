class Event < ActiveRecord::Base
  enum event_type: [
    :event,
    :session,
    :assignment,
    :reading,
    :assessment
  ]

  validates :name, :event_type, :date, presence: true

  belongs_to :section
  has_many :posts, dependent: :destroy

  has_many :tasks, dependent: :destroy
end
