class AddHotelForeignKeyToTrips < ActiveRecord::Migration[7.0]
  def change
    add_column :trips, :hotel_id, :integer
  end
end
