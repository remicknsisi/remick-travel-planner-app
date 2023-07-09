Rails.application.routes.draw do
  resources :trips, only: [:index, :show, :create]
  resources :travel_agents, only: [:index, :show]
  resources :users, only: [:show, :create, :update, :destroy]
  resources :reviews, only: [:destroy]
  resources :locations, only: [:show, :index]
  resources :hotels, only: [:show, :index]
  resources :activities, only: [:show, :index]
  resources :bookings, only: [:index, :create, :destroy]

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  post "/travel_agents/:id/reviews", to: "reviews#create"

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end