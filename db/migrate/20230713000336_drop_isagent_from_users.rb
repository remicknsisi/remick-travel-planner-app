class DropIsagentFromUsers < ActiveRecord::Migration[7.0]
  def change
    remove_column :users, :is_agent
  end
end
