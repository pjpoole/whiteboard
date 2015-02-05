class UniqueTasks < ActiveRecord::Migration
  def change
    add_index :tasks, [:user_id, :event_id], unique: true
  end
end
