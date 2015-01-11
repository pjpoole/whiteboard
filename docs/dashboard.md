A user instructs and has enrollments.

A user might want to view their classes, so you need to send current_user.classes --> /api/user/:user_id/enrollments

A user might want to view their instructorships, so you need to send current_user.classes_taught --> /api/user/:user_id/sections
A user can view another user's instructorships

A user might want to view all the enrollments in a class, so you need to send section.students /api/sections/:section_id/roster

A user might want to view all classes in order to sign up for one, so you need to send Section.all --> /api/sections
