class Trip < ApplicationRecord
    has_many :activities
    belongs_to :hotel
    belongs_to :location
    belongs_to :travel_agent
    has_many :bookings
    has_many :users, through: :bookings
end