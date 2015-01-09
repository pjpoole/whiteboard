class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.datetime :date,       null: false
      t.references :section,  null: false, index: true
      t.string :event_type,   null: false

      t.timestamps
    end
  end
end
