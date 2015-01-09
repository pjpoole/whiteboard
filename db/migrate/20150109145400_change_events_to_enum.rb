class ChangeEventsToEnum < ActiveRecord::Migration
  def change
    change_column :events, :event_type,
      'integer USING CAST(event_type AS integer)'
  end
end
