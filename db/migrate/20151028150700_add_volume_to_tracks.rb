class AddVolumeToTracks < ActiveRecord::Migration
  def change
    add_column :tracks, :volume, :integer
  end
end
