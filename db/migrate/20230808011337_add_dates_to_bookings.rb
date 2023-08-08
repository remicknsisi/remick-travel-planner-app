class AddDatesToBookings < ActiveRecord::Migration[7.0]
  def change
    add_column :bookings, :start_date, :timestamp
    add_column :bookings, :end_date, :timestamp
  end
end
