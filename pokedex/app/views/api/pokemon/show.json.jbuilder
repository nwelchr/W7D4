json.pokemon do
  json.extract! @poke, :id, :name, :attack, :defense, :moves, :poke_type, :image_url
  # // push
  # item_arr = []
  # @poke.items.each do |item|
  #   item_arr << item.id
  # end
  # json.item_ids item_arr

  # // map
  # json.item_ids @poke.items.map { |item| item.id }

  # // pluck
  json.item_ids @poke.items.pluck(:id)
end
json.set! :items do
  @poke.items.each do |item|
    json.set! item.id do
      json.extract! item, :id, :name, :pokemon_id, :price, :happiness, :image_url
    end
  end
end
