Rails.application.routes.draw do
  namespace :v1 do
    get 'greetings/index'
  end
  # get 'greetings/v1/greetings'
  # get 'greetings/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "static#index"
end
