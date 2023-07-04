class ActivitiesController < ApplicationController
    def show
        activities = Activity.all
        render json: activities, status: :ok
    end

    def trip_activities
        trip = Trip.find_by(id: params[:trip_id])
        if trip
            activities = trip.activities
            render json: activities, status: :ok
        else
            render json: {error: "Could not find activities for trip with id of #{params[:trip_id]}"}, status: :not_found
        end
    end
end