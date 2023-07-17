class ReaddTripidToActivities < ActiveRecord::Migration[7.0]
  def change
    add_column :activities, :trip_id, :integer
  end
end
