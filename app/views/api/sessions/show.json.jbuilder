json.extract! current_user, :id, :name, :email

# TODO: is this pre-fetching the user's classes?
json.sections current_user.classes,
  partial: 'api/sections/section', as: :section

json.sectionsInstructed current_user.classes_taught,
  partial: 'api/sections/section', as: :section
