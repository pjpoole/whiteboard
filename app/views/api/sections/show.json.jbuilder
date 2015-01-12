json.title @section.title
json.description @section.description
json.instructor_id @section.instructor_id

json.instructor do
  json.name @section.instructor.name
  json.email @section.instructor.email
end

json.events @section.events do |event|
  json.name event.name
  json.date event.date
  json.event_type event.event_type
  json.body event.body
end
