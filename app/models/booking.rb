class Booking < ApplicationRecord
    belongs_to :user
    belongs_to :trip

    # validates :user_id, presence: true
    # validates :trip_id, presence: true
    # might be some unencesary validations on othe rmodels as well

    validate :booking_exists

    def booking_exists
        bookings = Booking.all
        result = bookings.find{|b| b.user_id == self.user_id && b.trip_id == self.trip_id}
        if result
            errors.add(:user, "has already booked this trip")
        end
    end

end

# paid // date of booking for user submittable attributes on bookings
# date by typing it in or attmempting a calendar pop up (try it out) - google calendar
    # may be able to get it via HTML styling library
# export course content download - learn co curriculum user on github will be avail 