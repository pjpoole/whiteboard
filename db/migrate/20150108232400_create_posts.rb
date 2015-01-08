class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :topic,       null: false
      t.string :body
      t.references :user,    index: true
      t.references :section, index: true

      t.timestamps
    end
  end
end
