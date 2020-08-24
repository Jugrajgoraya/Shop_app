Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  default_url_options host: 'localhost:3000'

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :products, only: [:index, :show, :create, :update, :destroy]
      resources :orders, only: [:index, :show, :create, :update, :destroy]
      resources :users, only: [:index, :show, :create, :update, :destroy]

      get "/session", to: "sessions#index"

      post "/session", to: "sessions#createCart"

      # resource :session, only: [:create, :destroy]

    end
  end
end
