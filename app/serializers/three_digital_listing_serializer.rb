class ThreeDigitalListingSerializer < ActiveModel::Serializer
  attributes :id, :title, :price, :description, :polygons, :is_uvd, :is_textured, :is_rigged, :is_animated, :user_id, :pictures, :listingType

  def pictures
    object.pictures.first.service_url if object.pictures.attached?
  end
end
