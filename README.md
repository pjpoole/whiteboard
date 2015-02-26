## Whiteboard

This project is an implementation of a simple Learning Management System. It takes inspiration from Blackboard primarily, although there are a number of similar LMSes out in the wild, none of which draw particular love and adoration from its users.

You can see a running version on heroku at [whiteboard-app.com](http://www.whiteboard-app.com/).

It was originally my intent to try to make a comprehensive system, and over time, my priorities have changed to "learning as much as I can about interesting technologies".

As such, a list of what's currently in use in this project:
* [Ruby on Rails](http://jquery.com) for the backend
* [Postgres](http://www.postgresql.org/) as the database engine
* [Backbone.js](http://backbonejs.org) on the frontend
* [Marionette.js](http://marionettejs.com) on top of that
* [Backbone.Radio](https://github.com/marionettejs/backbone.radio) for events aggregation
* [Devise](https://github.com/plataformatec/devise) for authentication
* [Bootstrap](http://getbootstrap.com) for simple styling
* [SASS](http://sass-lang.com) via the Rails asset pipeline (sprockets)
* A couple smaller files to address particular shortcomings, including:
  * [Backbone.Modal](http://awkward.github.io/backbone.modal/)
  * [Backbone.Routefilter](https://github.com/boazsender/backbone.routefilter) for before routing callbacks
  * [jQuery.dataTables](http://www.datatables.net)
* [jQuery](http://jquery.com), of course

### An aside
dataTables is *way* too heavy-weight for what I need to do, but it turns out a similar, lighter-weight package called (perhaps unsurprisingly) data**t**ables was paving over my Marionette.ItemView events listeners, so it's here for now.

Backbone.Modal has some inconvenient opinions, and as such is due to be ripped out and replaced by something a bit more flexible, probably jQuery's modal().

I know I need to implement testing; perhaps this will be the next step of this project, since it's become such a testbed for every other portion of the full stack.

In the commit history for this project, you can actually see examples of almost every piece here: I wrote a custom event aggregator, then tore it out; some dataTable-like generator/filter/paginators; home-rolled user auth; router callbacks; etc. In each case I've discovered a lot about the relevant technologies, then decided to go with something more robust instead. As such there are very few vestiges of any of these things left in this app.

-----

Finally, this project takes inspiration from the AppAcademy progress tracker. However, while AppAcademy runs on a bespoke combination of github `gist`s/sundry markdown, external links, Google groups, Tumblr, and other pieces, this site aims to eventually combine all these into a single app.

Think: learning, gradebook, collaboration, etc all in one place.
