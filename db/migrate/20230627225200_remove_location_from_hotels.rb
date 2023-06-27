class RemoveLocationFromHotels < ActiveRecord::Migration[7.0]
  def change
    remove_column :hotels, :location
  end
end
