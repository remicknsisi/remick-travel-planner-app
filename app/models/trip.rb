class Trip < ApplicationRecord
    has_many :activities
    belongs_to :user
    belongs_to :travel_agent
end