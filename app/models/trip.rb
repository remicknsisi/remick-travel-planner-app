class Trip < ApplicationRecord
    has_many :activities
    belongs_to :hotel
    has_one :location
    belongs_to :travel_agent
    has_many :bookings
    has_many :users, through: :bookings

    # validates :location, presence: true
    # validates :hotel, presence: true
    # messes with the seeding... need to seed and then un-comment this out i htink
end