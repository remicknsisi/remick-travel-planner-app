Rails.application.routes.draw do
  # get '/test/:country', to: 'trips#test'

  resources :trips, only: [:index, :show]
  resources :travel_agents, only: [:index, :show]
  resources :users, only: [:show, :create, :update, :destroy]
  resources :reviews, only: [:destroy]

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  post "/travel_agents/:id/reviews", to: "reviews#create"

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end