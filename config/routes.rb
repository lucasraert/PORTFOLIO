Rails.application.routes.draw do

  get 'services', to: 'pages#services'
  get 'work', to: 'pages#work'
  get 'calypso', to: 'pages#calypso'
  get 'contact', to: 'pages#contact'

  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
