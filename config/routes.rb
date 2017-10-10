Rails.application.routes.draw do

  get 'hire', to: 'pages#hire'
  get 'work', to: 'pages#work'
  get 'calypso', to: 'pages#calypso'
  get 'contact', to: 'pages#contact'
  get 'home2', to: 'pages#home2'

  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
