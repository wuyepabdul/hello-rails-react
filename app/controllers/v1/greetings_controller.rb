class V1::GreetingsController < ApplicationController
  def index
    greetings_list = [
      'Good Morning Awesome Dev',
      'Hello bro. Its nice to see you.',
      'Afternoon Fellows, how do you do?',
      'Hello there, how are you doing today?',
      'Evening man, how was your day?'
    ]

    Greeting.delete_all

    greetings_list.each do |i|
      Greeting.create(message: i.to_s)
    end

    @message = Greeting.find(Greeting.pluck(:id).sample)
    render json: @message, status: :ok
  end
end
