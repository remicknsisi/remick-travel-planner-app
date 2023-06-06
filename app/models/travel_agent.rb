class TravelAgent < ApplicationRecord
    has_many :trips
    has_many :reviews
    has_many :users, through: :reviews
end