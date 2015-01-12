json.extract! @section, :id, :title, :description

json.instructor do
  json.partial! 'api/users/user', user: @section.instructor
end

json.events @section.events, partial: 'api/events/event', as: :event
