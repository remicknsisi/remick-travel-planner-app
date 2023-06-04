class CreateActivities < ActiveRecord::Migration[7.0]
  def change
    create_table :activities do |t|
      t.string :name
      t.integer :age_minimum
      t.float :cost
      t.integer :trip_id
      t.timestamps
    end
  end
end
