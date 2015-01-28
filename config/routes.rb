Rails.application.routes.draw do
  # # Rails root
  # root to: 'sessions#new'

  # Backbone root
  root to: 'pages#root'


  # # Backbone
  #
  # Again, trying to keep the routing conservative.
  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :show, :destroy]

    resources :users, only: [:create, :show] do
      resources :enrollments, only: [:create, :index, :destroy]
    end

    resources :sections, only: [:create, :show, :index]
    resources :events, only: [:create, :show, :index]
    resources :posts, only: [:create, :show, :index]
  end


  # # Rails sign in
  # resources :users, only: [:new, :create]
  # resource :session, only: [:new, :create, :destroy]


  # # Rails
  #
  # I deliberately keep these sparse/conservative, only creating routes
  # for essential actions inasmuch as possible. There are still some
  # orphaned routes, though, sadly.
  #
  # TODO: Clean up orphaned routes.
  # resources :users do
  #   resources :enrollments, only: [:index, :create]
  # end
  #
  # resources :sections do
  #   resources :events, only: [:new, :create, :index]
  #   resources :posts, only: [:new, :create, :index]
  # end
  #
  # resources :events do
  #   resources :posts, only: [:new, :create, :index]
  # end
  #
  # resources :posts do
  #   resources :comments, only: [:new, :create]
  # end
  #
  # resources :comments, only: [:edit, :update, :destroy]
  #
  # resources :enrollments, only: [:destroy]
end
