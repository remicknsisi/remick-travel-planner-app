require 'faker'

puts "🌱 Seeding data..."

User.create(name: "Sisi Remick", age: 25, email: "remicknsisi@gmail.com", image: "", password: "password", password_confirmation: "password", username: "sremick")

25.times do
    TravelAgent.create(
        name: Faker::Name.unique.name, 
        # email: Faker::Internet.email, 
        available: [true, false].sample,
        image: Faker::Avatar.image
        )
end

100.times do
    Review.create(
        # user_id: rand(1..User.count),
        user_id: 1,
        travel_agent_id: rand(1..25),
        rating: rand(1..5),
        comment: Faker::Lorem.sentences(number: 1),
    )
end

puts "✅ Done seeding!"