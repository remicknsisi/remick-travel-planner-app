class Booking < ApplicationRecord
    belongs_to :user
    belongs_to :trip

    validates :user_id, presence: true
    validates :trip_id, presence: true
    validate :booking_exists

    def booking_exists
        # if @user.bookings.where(["trip_id = ?", `#{self[:trip_id]}`]).exists?
        #     errors.add(:booking_is_unique, "you can't book the same trip twice")
        # end
        bookings = Booking.all
        result = bookings.find{|b| b.user_id == self.user_id && b.trip_id == self.trip_id}
        if result
            errors.add(:user, "has already booked this trip")
        end
        # if Booking.where(["trip_id = ? and user_id = ?", `#{self.trip_id}`, `#{self.user_id}`]).exists?
        #     errors.add(:user, "You've already booked this trip!")
        # end
    end

end