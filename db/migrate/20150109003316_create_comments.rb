class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.references :post,   index: true
      t.references :user,   index: true
      t.integer :parent_id, index: true
      t.text :body

      t.timestamps
    end
  end
end
