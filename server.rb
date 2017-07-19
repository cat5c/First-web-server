require 'sinatra'

get '/' do
  "Hello world"
end

get "/sinatra" do
  "Hello Sinatra"
end

get "/si" do
  "Hola Sinatra"
end
