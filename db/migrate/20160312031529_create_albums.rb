class CreateAlbums < ActiveRecord::Migration
  def change
    create_table :albums do |t|
      t.string :title
      t.text :description
      t.boolean :active, default: true
      t.timestamps null: false
    end
  end
end
