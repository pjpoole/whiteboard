class Event < ActiveRecord::Base
  validates :name, :event_type, :date, presence: true

  belongs_to :section
end
