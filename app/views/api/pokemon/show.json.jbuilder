json.pokemon do
    json.set! @pokemon.id do 
        json.extract! @pokemon, :id, :name, :attack, :poke_type, :defense
        json.image_url asset_path("pokemon_snaps/#{@pokemon.image_url}")
    end
end

json.moves do 
  @pokemon.moves.each do |move|
    json.set! move.id do
        json.extract! move, :id, :name 
    end
  end
end

json.items do
    @pokemon.items.each do |item|
        json.set! item.id do 
            json.extract! item, :id, :pokemon_id, :name, :price, :happiness
            json.image_url asset_path("#{item.image_url}")
        end
    end
end