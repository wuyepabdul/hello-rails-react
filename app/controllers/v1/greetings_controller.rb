class V1::GreetingsController < ApplicationController
  def index
    Message.delete_all

    (1..5).each do |i|
      Message.create(greetings:"Seasons Greetings #{i}")
    end

    @message = Message.find(Message.pluck(:id).sample)
    render json: @message, status: :ok
  end
end
