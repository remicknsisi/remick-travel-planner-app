class LocationsController < ApplicationController
    def show
        location = Location.find_by(id: params[:id])
        if location
            render json: location, status: :ok
        else
            render json: {error: "Location could not be found"}, status: :not_found
        end
    end
end
