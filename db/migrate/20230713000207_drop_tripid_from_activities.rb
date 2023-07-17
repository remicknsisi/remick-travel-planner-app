class DropTripidFromActivities < ActiveRecord::Migration[7.0]
  def change
    remove_column :activities, :trip_id
  end
end
