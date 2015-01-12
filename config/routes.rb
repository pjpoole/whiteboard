Rails.application.routes.draw do
  # # Rails root
  # root to: 'sessions#new'

  # Backbone root
  root to: 'static_pages#root'


  # Same for Rails and Backbone
  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]


  # # Backbone
  #
  # Again, trying to keep the routing conservative.
  namespace :api, defaults: { format: :json } do
    # get :dashboard, to: 'dashboard#index', as: 'dashboard'
    resources :users, only: [:show] do
      resources :sections, only: [:new, :create, :index]
      resources :enrollments, only: [:create, :index]
    end

    resources :sections, only: [:index, :show]
  end


  # # Rails
  #
  # I deliberately keep these sparse/conservative, only creating routes
  # for essential actions inasmuch as possible. There are still some
  # orphaned routes, though, sadly.
  #
  # TODO: Clean up orphaned routes.
  resources :users do
    resources :enrollments, only: [:index, :create]
  end

  resources :sections do
    resources :events, only: [:new, :create, :index]
    resources :posts, only: [:new, :create, :index]
  end

  resources :events do
    resources :posts, only: [:new, :create, :index]
  end

  resources :posts do
    resources :comments, only: [:new, :create]
  end

  resources :comments, only: [:edit, :update, :destroy]

  resources :enrollments, only: [:destroy]
end
