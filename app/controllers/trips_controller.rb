class TripsController < ApplicationController
    def index
        trips = Trip.all
        render json: trips, status: :ok
    end

    def show
        trip = Trip.find_by(id: params[:id])
        if trip
            render json: trip, status: :ok
        else
            render json: {error: "Trip not found"}, status: :not_found
        end
    end

    private
    def trip_params
        params.permit(:hotel_id, :location_id, :booked, :image)
    end
end