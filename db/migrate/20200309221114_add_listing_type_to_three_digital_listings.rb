class AddListingTypeToThreeDigitalListings < ActiveRecord::Migration[6.0]
  def change
    add_column :three_digital_listings, :listingType, :string
  end
end
