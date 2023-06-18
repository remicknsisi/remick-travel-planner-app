class User < ApplicationRecord
    has_secure_password
    validates :name, presence: true
    validates :age, presence: true
    validates :email, presence: true
    validates :password, presence: true, on: :create
    validates :password_confirmation, presence: true, on: :create
    validates :username, presence: true, uniqueness: true, on: :create

    has_many :reviews 
    has_many :travel_agents, through: :reviews
    has_many :bookings
    has_many :trips, through: :bookings
end