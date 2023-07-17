class LocationSerializer < ActiveModel::Serializer
  attributes :id, :city, :country, :image

  has_many :trips
end