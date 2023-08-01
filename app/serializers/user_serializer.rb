class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :email, :image

  has_many :reviews 
  has_many :travel_agents
  has_many :bookings
  has_many :trips
end
