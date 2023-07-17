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

    # def create
    #     trip = @user.trips.create(trip_params)
    #     if trip.valid?
    #         render json: trip, status: :created
    #     else
    #         render json: { errors: trip.errors.full_messages }, status: :unprocessable_entity
    #     end
    # end

    private

    def trip_params
        params.permit(:hotel_id, :location_id, :booked, :image)
    end
    # def request_api(url)
    #     response = Excon.get(
    #     url,
    #     headers: {
    #         'X-RapidAPI-Host' => 'restcountries-v1.p.rapidapi.com',
    #         'X-RapidAPI-Key' => '701aef0fcfmsh803796da2d04f50p152a92jsn166e5c8e4e94'
    #     }
    #     )
    #     byebug
    #     return nil if response.status != 200
    #     JSON.parse(response.body)
        
    # end

    # def find_country(name)
    #     web = request_api(
    #     "https://restcountries-v1.p.rapidapi.com/name/#{name}"
    #     )
    # end

    
end