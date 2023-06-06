require 'json'

class Api::EditsController < ApplicationController
    def update
        pokeId = params["pokemon"]["id"].to_i

        @pokemon = Pokemon.find(pokeId)
        puts @pokemon.class
        if @pokemon.update(pokemon_params)
            if !Move.pluck(:name).any? {|name| name == move_params[:move_1]}
                move_1 = Move.create!(name: move_params[:move_1])
                PokeMove.create!(move_id: move_1.id, pokemon_id: @pokemon.id)
            else 
                PokeMove.create!(move_id: move_1.id, pokemon_id: @pokemon.id)
            end
            if !Move.pluck(:name).any? {|name| name == move_params[:move_2]}
                move_2 = Move.create!(name: move_params[:move_1])
                PokeMove.create!(move_id: move_1.id, pokemon_id: @pokemon.id)
            else
                PokeMove.create!(move_id: move_1.id, pokemon_id: @pokemon.id)
            end
            render "api/pokemon/show"
        else
            render json: @pokemon.errors_full_messages, status: 404
        end
    end

    private
    def pokemon_params
        params.require(:pokemon).permit(:id, :name, :attack, :defense, :poke_type, :image_url)
    end
end
