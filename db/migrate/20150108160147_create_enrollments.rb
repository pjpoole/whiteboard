class CreateEnrollments < ActiveRecord::Migration
  def change
    create_table :enrollments do |t|
      t.references :user,    index: true
      t.references :section, index: true

      t.timestamps
    end
  end
end
