class TravelAgentSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :available

  has_many :trips
  has_many :reviews
end