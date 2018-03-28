json.partial! 'api/parties/party', party: @party
json.set! :guests do
  json.array! @party.guests do |guest|
    json.partial! 'api/guests/guest', guest: guest
    json.set! :gifts do
      json.array! guest.gifts, :title, :description
    end
  end
end
