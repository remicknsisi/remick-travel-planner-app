class BookingSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :trip_id, :start_date, :end_date

  belongs_to :user
  belongs_to :trip
end
