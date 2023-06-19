class TravelAgent < ApplicationRecord
    has_many :trips
    has_many :reviews
    has_many :users, through: :reviews

    def rating
        ratings = self.reviews.map {|review| review.rating}
        if ratings.length > 0
            rating = ratings.sum / ratings.size
        end
    end

    def email
        email = self.name.gsub(/\s+/, "") + '@remickvacationer.com'
    end
end