# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'
User.create({
    first_name: 'Wade',
    last_name: 'Wilson',
    username: 'Deadpool',
    artist_bio: 'this is a bio',
    email: 'deadpool@gmail.com',
    password: 'password'
})

5.times do
three = ThreeDigitalListing.create(
    listingType: 'three',
    title: Faker::Creature::Animal.name,
    price: Faker::Commerce.price,
    description: Faker::Lorem.sentence,
    polygons: Faker::Number.number(digits: 5),
    is_uvd: Faker::Boolean.boolean,
    is_textured: Faker::Boolean.boolean,
    is_rigged: Faker::Boolean.boolean,
    is_animated: Faker::Boolean.boolean,
    user_id: 1
)
three.pictures.attach(io: File.open('./db/logo.svg'), filename: 'logo.svg')
end

5.times do
    two = TwoDigitalListing.create(
        listingType: 'two',
        title: Faker::Creature::Animal.name,
        price: Faker::Commerce.price,
        description: Faker::Lorem.sentence,
        height: Faker::Commerce.price,
        width: Faker::Commerce.price,
        dpi: Faker::Number.number(digits: 3),
        user_id: 1
    )
    two.pictures.attach(io: File.open('./db/logo.svg'), filename: 'logo.svg')
    end

  puts "#{ThreeDigitalListing.count} 3D digital listings created!"

puts "#{TwoDigitalListing.count} 2D digital listings created!"
