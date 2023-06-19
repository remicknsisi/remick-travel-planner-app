class TravelAgent < ApplicationRecord
    has_many :trips
    has_many :reviews
    has_many :users, through: :reviews

    def rating
        ratings = self.reviews.map {|review| review.rating}
        rating = ratings.sum / ratings.size
    end
end