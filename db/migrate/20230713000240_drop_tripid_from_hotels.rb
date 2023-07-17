class DropTripidFromHotels < ActiveRecord::Migration[7.0]
  def change
    remove_column :hotels, :trip_id
  end
end
