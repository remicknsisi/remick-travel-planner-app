class Review < ApplicationRecord
    belongs_to :user
    belongs_to :travel_agent

    validates :comment, presence: true
    validates :rating, presence: true
end