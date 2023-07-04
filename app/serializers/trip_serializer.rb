class TripSerializer < ActiveModel::Serializer
  attributes :id, :hotel_id, :booked, :image, :location_id, :travel_agent_id, :activities

  has_many :activities
  has_one :hotel
  has_one :location
  belongs_to :travel_agent
  has_many :bookings
  has_many :users
end
