class CreateLocations < ActiveRecord::Migration[7.0]
  def change
    create_table :locations do |t|
      t.string :city
      t.string :country
      t.string :image
      t.integer :trip_id
      t.timestamps
    end
  end
end
