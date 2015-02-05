class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.references :user, index: true, null: false
      t.integer :status
      t.references :event, index: true, null: false

      t.timestamps
    end
  end
end
