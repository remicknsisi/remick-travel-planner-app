class UsersSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :email, :image, :reviews

  has_many :reviews 
  has_many :travel_agents
  has_many :bookings
  has_many :trips
end
