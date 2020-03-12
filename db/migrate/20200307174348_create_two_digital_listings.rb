class CreateTwoDigitalListings < ActiveRecord::Migration[6.0]
  def change
    create_table :two_digital_listings do |t|
      t.string :title
      t.string :description
      t.float :price
      t.float :height
      t.float :width
      t.integer :dpi
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
