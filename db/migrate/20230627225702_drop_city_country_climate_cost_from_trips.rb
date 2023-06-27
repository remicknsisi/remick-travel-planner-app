class DropCityCountryClimateCostFromTrips < ActiveRecord::Migration[7.0]
  def change
    remove_column :trips, :city
    remove_column :trips, :country
    remove_column :trips, :climate
    remove_column :trips, :total_cost
  end
end
