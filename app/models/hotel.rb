class Hotel < ApplicationRecord
    # belongs_to :trip
    has_many :trips
end