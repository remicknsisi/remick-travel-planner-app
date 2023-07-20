class ActivitySerializer < ActiveModel::Serializer
  attributes :id, :name, :age_minimum, :trip_id

  belongs_to :trip
end