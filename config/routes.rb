# frozen_string_literal: true

Rails.application.routes.draw do
  root 'game#index'

  get 'game/index'
end
