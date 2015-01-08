Rails.application.routes.draw do
  root to: 'sessions#new'

  resource :session, only: [:new, :create, :destroy]

  resources :users do
    resources :enrollments, only: [:index, :create]
  end

  resources :sections
  resources :enrollments, only: [:destroy]
end
