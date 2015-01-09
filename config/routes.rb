Rails.application.routes.draw do
  root to: 'sessions#new'

  resource :session, only: [:new, :create, :destroy]

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

  resources :posts, shallow: true do
    resources :comments
  end

  resources :enrollments, only: [:destroy]
end
