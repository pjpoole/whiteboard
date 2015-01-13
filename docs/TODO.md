# TODOs

Bucket  
*anything that doesn't fit elsewhere*

## Testing
Main
* Unit tests
* Faker
* Factory-girl

Test branch
* populate test database

## Development
MVC/Rails
* Models *could* validate on presence of their associations
  * Add "validates :association_name, presence: true"
  * Add "inverse_of: :source" to association
* destroy section route
* tasks model
* abstract events

Backbone core
* login/session creation
* session div
* user router
* user index view (roster)
* class show view (modal enrolled, instructing)
  * compose:
  * events index
  * posts index
* destroy class (confirm, only if no enrollments?)
* events index
* event show
* posts index
* posts show
  * composite: comments index
* notifications index
* tasks show
* messaging
* gradebook show
* compose: dashboard


Major Features
* body markdown formatting
* <opt> commentable concern

Features
* email confirmation
* calendar
* gradebook
* notifications
* messaging
* drop class
* Filter assignments by type, date, etc.
* event uploads
* sorting (events, posts, comments)
* filtering (events, posts, comments)

Tweaks
* status codes for invalid routes
* Sign in button from Sign up page
* More formal name processing: first name, last name
* nullify deleted user names, don't delete posts
* admin can re-categorize post to other topic
* Order posts by date
* order posts by custom attributes
* write to_builder methods in classes
* change JBuilder case to camelize: :lower
* pass tagNames to views as appropriate

Bugs
* Dashboard SectionsIndex adds subview for the Objects hash ?
* Opening chrome inspector makes sidebar too short
* handle 404s from routes

Unknown
* sessions controller send to (??)


Styles/Visual
* refactor css into scss files based on scopes
  * learn more about scss
* generate wireframe mockup of site main stylesheet
* styling: develop color scheme
* styling: check contrast of color scheme
* styling: course links, student page
* user icons
* Icon
* Favicon
