class DropContactFromHotels < ActiveRecord::Migration[7.0]
  def change
    remove_column :hotels, :contact
  end
end
