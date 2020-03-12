class TwoDigitalListingsController < ApplicationController
    before_action :authorize_request, except: [ :index, :show ]
    def index
        @listings = TwoDigitalListing.all
        render json: @listings
    end

    def show
        @listing = TwoDigitalListing.find(params[:id])
        render json: @listing
    end

    def create
        @user = User.find(1)
        @listing = @user.two_digital_listings.build(listing_params)
        @listing.pictures.attach(params[:pictures])
        if @listing.save
            render json: @listing, status: :created
        else
            render json: @listing.errors, status: :unprocessable_entity
        end
    end

    private

    def listing_params
        params.permit(:title, :price, :description, :height, :width, :dpi, :user_id, :pictures, :listingType)
    end
end
