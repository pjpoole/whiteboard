class Enrollment < ActiveRecord::Base
  belongs_to :user
  belongs_to :section

  after_create :add_tasks_to_student

  private
  def add_tasks_to_student
    section = Section.includes(:events).find(self.section_id)

    transaction do
      section.events.each do |event|
        Task.create(user_id: self.user_id, event_id: event.id)
      end
    end
  end
end
