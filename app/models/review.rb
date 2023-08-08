class Review < ApplicationRecord
    belongs_to :user
    belongs_to :travel_agent

    validates :comment, presence: true
    validates :rating, presence: true, inclusion: { in: 1..5, message: "must be between 1-5" }
end