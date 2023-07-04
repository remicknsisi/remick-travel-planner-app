class HotelsController < ApplicationController
    def show
        hotel = Hotel.find_by(id: params[:id])
        if hotel
            render json: hotel, status: :ok
        else
            render json: {error: "Hotel could not be found"}, status: :not_found
        end
    end
end
