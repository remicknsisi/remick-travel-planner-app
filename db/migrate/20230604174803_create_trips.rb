class CreateTrips < ActiveRecord::Migration[7.0]
  def change
    create_table :trips do |t|
      t.string :city
      t.string :country
      t.string :climate
      t.boolean :booked
      t.float :total_cost
      t.integer :user_id
      t.integer :travel_agent_id
      t.timestamps
    end
  end
end
