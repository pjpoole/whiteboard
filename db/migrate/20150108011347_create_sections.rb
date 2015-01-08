class CreateSections < ActiveRecord::Migration
  def change
    create_table :sections do |t|
      t.string :title, null: false
      t.string :description
      t.string :instructor_id, index: true

      t.timestamps
    end
  end
end
