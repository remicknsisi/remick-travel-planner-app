class BookingsController < ApplicationController
    def index
        bookings = Booking.all
        render json: bookings, status: :ok
    end

    def create
        booking = @user.bookings.new(booking_params)
        if booking.valid? 
            booking.save
            render json: booking, status: :created
        else
            render json: { errors: booking.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        booking = Booking.find_by(id: params[:id])
        if @user && @user.id == booking.user_id
            booking.destroy
            render json: booking, status: :ok
        else
            render json: { error: "You can only delete your own bookings." }, status: :unauthorized
        end
    end

    private

    def booking_params
        params.permit(:trip_id, :start_date, :end_date)
    end
end
