class ThreeDigitalListingsController < ApplicationController
    before_action :authorize_request, except: [ :index, :show ]
    def index
        @listings = ThreeDigitalListing.all
        render json: @listings
    end

    def show
        @listing = ThreeDigitalListing.find(params[:id])
        render json: @listing
    end

    def create
        @user = @current_user
        @listing = @user.three_digital_listings.build(listing_params)
        puts params
        @listing.pictures.attach(params[:pictures])
        if @listing.save
            render json: @listing, status: :created
        else
            render json: @listing.errors, status: :unprocessable_entity
        end
    end

    private

    def listing_params
        params.permit(:title, :price, :description, :polygons, :is_uvd, :is_textured, :is_rigged, :is_animated, :user_id, :pictures, :listingType)
    end
end
