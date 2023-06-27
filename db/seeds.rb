require 'faker'

puts "🌱 Seeding data..."

User.create(name: "Sisi Remick", age: 25, email: "remicknsisi@gmail.com", image: "", password: "password", password_confirmation: "password", username: "sremick")

25.times do
    TravelAgent.create(
        name: Faker::Name.unique.name, 
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

# locations
Location.create(
    city: "New York City",
    country: "United States",
    image: "https://images.unsplash.com/photo-1617688319108-cb3bdc88f587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1635&q=80",
    trip_id: 
)
Location.create(
    city: "Tokyo",
    country: "Japan",
    image: "https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2368&q=80",
    trip_id: 
)
Location.create(
    city: "Athens",
    country: "Greece",
    image: "https://images.unsplash.com/photo-1583656696771-2afded31a36c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    trip_id: 
)
Location.create(
    city: "Orlando",
    country: "Florida",
    image: "https://images.unsplash.com/photo-1605723517503-3cadb5818a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    trip_id: 
)
Location.create(
    city: "San Juan",
    country: "Puerto Rico",
    image: "https://images.unsplash.com/photo-1589402249680-5ff95f2ac3bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2344&q=80",
    trip_id: 
)
Location.create(
    city: "Florence",
    country: "Italy",
    image: "https://images.unsplash.com/photo-1541370976299-4d24ebbc9077?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2233&q=80",
    trip_id: 
)
Location.create(
    city: "Copenhagen",
    country: "Denmark",
    image: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    trip_id: 
)
Location.create(
    city: "Berlin",
    country: "Germany",
    image: "https://images.unsplash.com/photo-1546726747-421c6d69c929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80",
    trip_id: 
)
Location.create(
    city: "Sydney",
    country: "Australia",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    trip_id: 
)
Location.create(
    city: "Montreal",
    country: "Canada",
    image: "https://images.unsplash.com/photo-1470181942237-78ce33fec141?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    trip_id: 
)
Location.create(
    city: "Madrid",
    country: "Spain",
    image: "https://images.unsplash.com/photo-1558370781-d6196949e317?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2358&q=80",
    trip_id: 
)
Location.create(
    city: "Paris",
    country: "France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2346&q=80",
    trip_id: 
)
Location.create(
    city: "Seoul",
    country: "South Korea",
    image: "https://images.unsplash.com/photo-1506816561089-5cc37b3aa9b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2175&q=80",
    trip_id: 
)
Location.create(
    city: "Amsterdam",
    country: "Netherlands",
    image: "https://images.unsplash.com/photo-1584003564911-a7a321c84e1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1584&q=80",
    trip_id: 
)
Location.create(
    city: "Cancun",
    country: "Mexico",
    image: "https://images.unsplash.com/photo-1613506140303-a3742bcbee78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2342&q=80",
    trip_id: 
)

# hotels
Hotel.create(
    name: "",
    website: "",
    contact: "",
    image: "",
    trip_id: 
)

#activities
Activity.create(
    name: "",
    age_minimum: "",
    trip_id: 
)

puts "✅ Done seeding!"