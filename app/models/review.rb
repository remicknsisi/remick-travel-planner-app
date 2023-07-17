class Review < ApplicationRecord
    belongs_to :user
    belongs_to :travel_agent

    validates :comment, presence: true
    validates :rating, presence: true
    validates :user_id, presence: true
    validates :travel_agent_id, presence: true
end