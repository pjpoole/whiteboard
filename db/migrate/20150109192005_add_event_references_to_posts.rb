class AddEventReferencesToPosts < ActiveRecord::Migration
  def change
    change_table :posts do |t|
      t.references :event, index: true
    end
  end
end
