# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

students = User.create!([
  { name: "Anthony", email: "anthony@mail.com", password: "password" },
  { name: "Benjamin", email: "ben@mail.com", password: "password" },
  { name: "Carl", email: "carl@mail.com", password: "password" },
  { name: "Cihangir", email: "cihangir@mail.com", password: "password" },
  { name: "Connie", email: "connie@mail.com", password: "password" },
  { name: "Ed", email: "edward@mail.com", password: "password" },
  { name: "Eva", email: "eva@mail.com", password: "password" },
  { name: "Garrett", email: "garrett@mail.com", password: "password" },
  { name: "Jake", email: "jeffrey@mail.com", password: "password" },
  { name: "Jesus", email: "jesus@mail.com", password: "password" },
  { name: "Justin", email: "justin@mail.com", password: "password" },
  { name: "Louie", email: "louie@mail.com", password: "password" },
  { name: "Mark", email: "mark@mail.com", password: "password" },
  { name: "Max", email: "maxwell@mail.com", password: "password" },
  { name: "Mike", email: "michael@mail.com", password: "password" },
  { name: "Peter", email: "peter@mail.com", password: "password" },
  { name: "Ron", email: "ronald@mail.com", password: "password" },
  { name: "Sai", email: "saikartik@mail.com", password: "password" },
  { name: "Tim", email: "tim@mail.com", password: "password" },
  { name: "Wes", email: "wesley@mail.com", password: "password" },
  { name: "Zach", email: "zach@mail.com", password: "password" }
])



instructor = User.create!(
  name: "Jonathan", email: "jonathan@mail.com", password: "password"
)



klass = instructor.classes_taught.create(
  title: "AppAcademy Nov-14 Cohort",
  description: "Become a software developer!"
)



students.each do |student|
  student.enrollments.create( section_id: klass.id )
end

klass.events.create([
  { name: "First day!", event_type: "session", date: "2014-11-10" },
  { name: "Methods", event_type: "session", date: "2014-11-11" },
  { name: "Mastermind", event_type: "session", date: "2014-11-12" },
  { name: "Recursion", event_type: "session", date: "2014-11-13" },
  { name: "Data Structures", event_type: "session", date: "2014-11-14" },
  { name: "Minesweeper", event_type: "session", date: "2014-11-17" },
  { name: "Chess", event_type: "session", date: "2014-11-18" },
  { name: "Chess, cont", event_type: "session", date: "2014-11-19" },
  { name: "Checkers", event_type: "session", date: "2014-11-20" },
  { name: "Rspec", event_type: "session", date: "2014-11-21" },
  { name: "SQL Zoo", event_type: "session", date: "2014-11-24" },
  { name: "SQLite", event_type: "session", date: "2014-11-25" },
  { name: "Intro to Rails", event_type: "session", date: "2014-11-26" },
  { name: "ActiveRecord", event_type: "session", date: "2014-11-27" },
  { name: "Metaprogramming", event_type: "session", date: "2014-11-28" },
  { name: "Rails Routing", event_type: "session", date: "2014-12-01" },
  { name: "99 Cats", event_type: "session", date: "2014-12-02" },
  { name: "Auth", event_type: "session", date: "2014-12-03" },
  { name: "Rails views", event_type: "session", date: "2014-12-04" },
  { name: "Reddit clone", event_type: "session", date: "2014-12-05" },
  { name: "Ruby algorithms", event_type: "assessment", date: "2014-11-17" },
  { name: "Crazy Eights", event_type: "assessment", date: "2014-11-24" },
  { name: "SQL", event_type: "assessment", date: "2014-12-03" }
  ])
