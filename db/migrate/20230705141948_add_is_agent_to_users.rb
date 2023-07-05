class AddIsAgentToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :is_agent, :boolean
  end
end
