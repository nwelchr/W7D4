# json.partial! 'api/guests/guest', guest: @guest
# json.gifts @guest.gifts do |gift|
#   json.title gift.title
#   json.description gift.description
# end

json.partial! 'api/guests/guest', guest: @guest
json.set! :gifts do
  json.array! @guest.gifts, :title, :description
end
