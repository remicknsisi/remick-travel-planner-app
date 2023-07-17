class TripSerializer < ActiveModel::Serializer
  attributes :id, :hotel_id, :booked, :image, :location_id, :travel_agent_id, :activities, :travel_agent

  has_many :activities
  belongs_to :hotel
  belongs_to :location
  belongs_to :travel_agent
  has_many :bookings
  has_many :users
end
