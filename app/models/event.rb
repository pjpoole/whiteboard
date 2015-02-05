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

  after_create :create_tasks_for_students

  private
  def create_tasks_for_students
    section = Section.includes(:students).find(self.section_id)

    transaction do
      section.students.each do |student|
        Task.create(user_id: student.id, event_id: self.id)
      end
    end
  end
end
