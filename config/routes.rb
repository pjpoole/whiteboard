Rails.application.routes.draw do
  devise_for :users,
    module: 'api',
    path_prefix: 'api',
    path: 'session',
    sign_out_via: :delete
  devise_scope :user do
    get 'api/session' => 'api/sessions#show'
  end

  # Backbone root
  root to: 'pages#root'


  # # Backbone
  #
  # Again, trying to keep the routing conservative.
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show] do
      resources :enrollments, only: [:create, :index, :destroy]
    end

    resources :sections, only: [:create, :show, :index]
    resources :events, only: [:create, :show, :index]
    resources :posts, only: [:create, :show, :index]
    resources :comments, only: [:create, :destroy]
  end

end
