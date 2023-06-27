class DropCostFromActivities < ActiveRecord::Migration[7.0]
  def change
    remove_column :activities, :cost
  end
end
