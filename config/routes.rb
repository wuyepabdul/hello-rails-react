Rails.application.routes.draw do
  namespace :v1 do
    get 'greetings', to: 'greetings#index'
  end

  get '*page', to: 'static#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end
  root "static#index"

end
