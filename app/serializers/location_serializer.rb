class LocationSerializer < ActiveModel::Serializer
  attributes :id, :city, :country, :image, :trip_id

  belongs_to :trip
end