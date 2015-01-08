Rails.application.routes.draw do
  root to: 'sessions#new'

  resources :users
  resource :session, only: [:new, :create, :destroy]

  resources :sections
  resources :enrollments, only: [:create, :destroy]
end
