class CreateTravelAgents < ActiveRecord::Migration[7.0]
  def change
    create_table :travel_agents do |t|
      t.string :name
      t.string :email
      t.boolean :available
      t.timestamps
    end
  end
end
