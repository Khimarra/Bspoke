class AddListingTypeToTwoDigitalListings < ActiveRecord::Migration[6.0]
  def change
    add_column :two_digital_listings, :listingType, :string
  end
end
