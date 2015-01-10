# TODOs

Bucket
* ""

## Testing
Main
* unit tests for user creation and authentication
* unit tests for sessions
* Faker
* Factory-girl

Test branch
* populate test database

## Development
MVC
* Models *could* validate on presence of their associations
  * Add "validates :association_name, presence: true"
  * Add "inverse_of: :source" to association
* user index view
* class roster view
* class show view (modal enrolled, instructing)

Major Features
* body markdown formatting
* commentable concern

Features
* email confirmation
* student dashboard
* calendar
* gradebook
* notifications
* drop class
* Filter assignments by type, date, etc.
* event uploads

Tweaks
* Sign in button from Sign up page
* More formal name processing: first name, last name
* nullify deleted user names, don't delete posts
* admin can re-categorize post to other topic
* status codes for invalid routes
* Order posts by date
* order posts by custom attributes

Bugs
* Opening chrome inspector makes sidebar too short

Unknown
* sessions controller send to (??)
* section debugging, because it's going to have to be done...


Styles/Visual
* refactor css into scss files based on scopes
* styling: develop color scheme
* styling: check contrast of color scheme
* styling: course links, student page
* user icons
* Icon
* Favicon
