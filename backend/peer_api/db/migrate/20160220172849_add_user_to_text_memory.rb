class AddUserToTextMemory < ActiveRecord::Migration
  def change
    add_reference :text_memories, :user, index: true, foreign_key: true
  end
end
