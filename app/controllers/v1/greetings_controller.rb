class V1::GreetingsController < ApplicationController
  def index
    Greeting.delete_all

    (1..5).each do |i|
      Greeting.create(message:"Seasons Greetings #{i}")
    end

    @message = Greeting.find(Greeting.pluck(:id).sample)
    render json: @message, status: :ok
  end
end
