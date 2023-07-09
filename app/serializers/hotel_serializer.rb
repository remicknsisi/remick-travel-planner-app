class HotelSerializer < ActiveModel::Serializer
  attributes :id, :name, :website, :image

  has_many :trips
end