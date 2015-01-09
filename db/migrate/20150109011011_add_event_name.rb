class AddEventName < ActiveRecord::Migration
  def change
    change_table :events do |t|
      t.string :name, null: false
    end
  end
end
