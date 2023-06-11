class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :comment, :rating, :travel_agent_id, :user_id, :user

  belongs_to :user
  belongs_to :travel_agent
end
