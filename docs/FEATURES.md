# Whiteboard App.

## Users
* User has: name, email, password_digest
* User has many: enrollments, teams, grades
* User creation
* Password reset
   * via email

## Sessions
* User log-in
* Session token

## Courses
* Course has: department, name, number, description
* Course creation

## Course instance
* Course instance has: time, term, instructor, roster, syllabus
* attendance
* gradebook
* student notes


## Roles
* Student
* Instructor
* Teaching assistant
* Admin
* Single user can have many roles depending on the course instance

## Forum
* Threading
* General discussion forums
* Institutional discussions
* Seen tracking (inbox)

## Messaging
* Message has: from, to, subject, body, (tags)

## Teams
* Project team
* Vocabulary: role, working group, team

## Syllabus
* Syllabus has: course, materials, dates
* policies
* rubric
* grading scheme (sliders)

## Materials
* References
* Bibliography


## Calendar
* Draggable entries
* Assignments (start and end) < event
* Lectures

## Events
* Homework
* Quizzes
* Tests
* holidays

## Meta
* Template
* Terms
* Holidays
* Course duplication

## Admin
* Student view - disciplinary notes, etc.
