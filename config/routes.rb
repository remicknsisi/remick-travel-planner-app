Rails.application.routes.draw do
  # get '/test/:country', to: 'trips#test'

  resources :trips, only: [:index, :show]
  resources :travel_agents, only: [:index, :show]


  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end