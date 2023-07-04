class BookingsController < ApplicationController
    def create
        booking = Booking.create!(booking_params)
        if booking.valid?
            render json: booking, status: :created
        else
            render json: { errors: booking.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def booking_params
        params.permit(:user_id, :trip_id)
    end
end
