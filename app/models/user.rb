class User < ApplicationRecord
    has_secure_password
    
    has_many :reviews 
    has_many :travel_agents, through: :reviews
    has_many :bookings
    has_many :trips, through: :bookings
end