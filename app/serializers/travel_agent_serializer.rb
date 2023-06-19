class TravelAgentSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :available, :image, :rating

  has_many :trips
  has_many :reviews
end
