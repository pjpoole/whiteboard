class AddUserName < ActiveRecord::Migration
  def change
    change_table :users do |t|
      t.rename :username, :email
      t.string :name,             null: false
    end
  end
end
