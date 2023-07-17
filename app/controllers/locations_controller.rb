class LocationsController < ApplicationController
    # def show
    #     location = Location.find_by(id: params[:id])
    #     if location
    #         render json: location, status: :ok
    #     else
    #         render json: {error: "Location could not be found"}, status: :not_found
    #     end
    # end

    def index
        locations = Location.all
        render json: locations, status: :ok
    end
end
