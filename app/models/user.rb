class User < ApplicationRecord
    has_secure_password
    validates :name, presence: true
    validates :age, presence: true, numericality: { greater_than_or_equal_to: 18 }
    validates :email, presence: true
    validates :password, presence: true, on: :create
    validates :password_confirmation, presence: true, on: :create
    validates :username, presence: true, uniqueness: true, on: :create

    has_many :reviews, dependent: :destroy
    has_many :travel_agents, through: :reviews
    has_many :bookings, dependent: :destroy
    has_many :trips, through: :bookings
end