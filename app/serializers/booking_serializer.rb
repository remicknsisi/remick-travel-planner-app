class BookingSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :trip_id

  belongs_to :user
  belongs_to :trip
end
