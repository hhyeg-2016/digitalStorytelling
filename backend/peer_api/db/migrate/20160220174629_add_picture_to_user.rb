class AddPictureToUser < ActiveRecord::Migration
  def change
    add_column :users, :text, :has_many
  end
end
