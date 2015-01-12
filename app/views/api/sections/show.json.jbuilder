json.extract! @section, :id, :title, :description, :instructor_id

json.instructor do
  json.id @section.instructor.id
  json.name @section.instructor.name
  json.email @section.instructor.email
end

json.events @section.events do |event|
  
  json.name event.name
  json.date event.date
  json.event_type event.event_type
  json.body event.body
end
