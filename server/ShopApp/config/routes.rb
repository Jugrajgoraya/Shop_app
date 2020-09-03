Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  default_url_options host: 'localhost:3000'

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      
      resources :products, only: [:index, :show, :create, :update, :destroy]
      resources :orders, only: [:index, :show, :create, :update, :destroy]
      resources :users, only: [:index, :show, :create, :update, :destroy]
      
      get "/session/current", to: "sessions#current"
      
      delete "session/destroy", to: "sessions#destroy"
      
      get "/session/index", to: "sessions#index"
      
      post "/session/createCart", to: "sessions#createCart"
      
      patch "/session/updateCart", to: "sessions#updateCart"
      resource :session

    end
  end
end
