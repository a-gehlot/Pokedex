class Api::PokemonController < ApplicationController
    def index
        @pokemon = Pokemon.all
        render :index
    end

    def show
        @pokemon = Pokemon.find_by(id: params[:id])
        render :show    
    end

    def create
        @pokemon = Pokemon.new(pokemon_params)
        if @pokemon.save!
            move_1 = Move.create!(name: move_params[:move_1])
            move_2 = Move.create!(name: move_params[:move_2])

            PokeMove.create!(move_id: move_1.id, pokemon_id: @pokemon.id)
            PokeMove.create!(move_id: move_2.id, pokemon_id: @pokemon.id)

            render :show
        else
            render json: @pokemon.errors.full_messages, status: 404
        end
    end

    private
    def move_params
        params.require(:pokemon).permit(:move_1, :move_2)
    end

    def pokemon_params
        params.require(:pokemon).permit(:name, :attack, :defense, :poke_type, :image_url)
    end
end
