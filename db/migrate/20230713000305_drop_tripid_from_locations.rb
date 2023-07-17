class DropTripidFromLocations < ActiveRecord::Migration[7.0]
  def change
    remove_column :locations, :trip_id
  end
end
