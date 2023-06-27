class AddForeignKeysToTrips < ActiveRecord::Migration[7.0]
  def change
    add_column :trips, :location_id, :integer
  end
end
