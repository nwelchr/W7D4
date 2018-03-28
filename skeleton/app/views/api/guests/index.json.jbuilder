json.array! @guests do |guest|
  if guest.age.between?(40, 50)
    json.partial! 'api/guests/guest', guest: guest
  end
end

# json.array! @guests do |guest|
#   json.partial! 'api/guests/guest', guest: guest
# end

#   json.array! @guests do |guest|
#     json.set! guest.id do
#       json.name guest.name
#       json.age guest.age
#       json.favorite_color guest.favorite_color
#     end
#   end
