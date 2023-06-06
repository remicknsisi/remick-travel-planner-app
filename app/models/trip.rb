class Trip < ApplicationRecord
    has_many :activities
    belongs_to :travel_agent
    has_many :bookings
    has_many :users, through: :bookings
end