class CreateThreeDigitalListings < ActiveRecord::Migration[6.0]
  def change
    create_table :three_digital_listings do |t|
      t.string :title
      t.float :price
      t.string :description
      t.integer :polygons
      t.boolean :is_uvd
      t.boolean :is_textured
      t.boolean :is_rigged
      t.boolean :is_animated
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
