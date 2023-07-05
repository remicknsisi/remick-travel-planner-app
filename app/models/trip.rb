class Trip < ApplicationRecord
    has_many :activities
    has_one :hotel
    has_one :location
    belongs_to :travel_agent
    has_many :bookings
    has_many :users, through: :bookings

    validates :location, presence: true
    validates :hotel, presence: true
end