class UsersSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :email, :image, :reviews, :bookings, :trips

  has_many :reviews 
  has_many :travel_agents
  has_many :bookings
  has_many :trips
end
