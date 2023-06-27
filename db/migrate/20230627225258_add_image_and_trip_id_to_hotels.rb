class AddImageAndTripIdToHotels < ActiveRecord::Migration[7.0]
  def change
    add_column :hotels, :image, :string
    add_column :hotels, :trip_id, :integer
  end
end
