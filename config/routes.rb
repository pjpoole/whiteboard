Rails.application.routes.draw do
  root to: 'sessions#new'

  resource :session, only: [:new, :create, :destroy]

  resources :users do
    resources :enrollments, only: [:index, :create]
  end

  resources :sections, shallow: true do
    resources :events
  end

  resources :enrollments, only: [:destroy]
end
