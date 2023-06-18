class AddImageToTravelAgents < ActiveRecord::Migration[7.0]
  def change
    add_column :travel_agents, :image, :string
  end
end
