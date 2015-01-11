classes = @user.classes + @user.classes_taught

json.sections classes do |section|
  json.title section.title
  json.description section.description
  json.instructor_id section.instructor_id
end
