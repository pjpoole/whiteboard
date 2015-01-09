class AddBodyToEvents < ActiveRecord::Migration
  def change
    change_table :events do |t|
      t.text :body
    end
  end
end
