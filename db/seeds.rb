require 'faker'

puts "🌱 Seeding data..."

User.create(name: "Sisi Remick", age: 25, email: "remicknsisi@gmail.com", image: "https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/317816558_6152500471447482_8780828282732764055_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=qpZWuA7rEbcAX9vVScx&_nc_ht=scontent-lga3-2.xx&oh=00_AfBomdujQM45aIRL3EAQreev8kaLMkZXT7imCwMDKgC5ZA&oe=64AA045D", password: "password", password_confirmation: "password", username: "sremick", is_agent: false)
User.create(name: "Agent Sisi Remick", age: 25, email: "remicknsisi@gmail.com", image: "https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/317816558_6152500471447482_8780828282732764055_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=qpZWuA7rEbcAX9vVScx&_nc_ht=scontent-lga3-2.xx&oh=00_AfBomdujQM45aIRL3EAQreev8kaLMkZXT7imCwMDKgC5ZA&oe=64AA045D", password: "password", password_confirmation: "password", username: "agentsremick", is_agent: true)

10.times do
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

Hotel.create(
    name: "Four Seasons Hotel & Resorts",
    website: "https://www.fourseasons.com/?utm_source=ggl&utm_medium=cpc&utm_campaign=other-na-corp-cv-brd_fourseasons-na&utm_content=na-na&utm_term=na&gclid=CjwKCAjwkeqkBhAnEiwA5U-uM0AWvILmZO64YANVOSWB8W0u8aUwrCJV_GnHLDYDOpCMy0KgthPuoxoCwGMQAvD_BwE&gclsrc=aw.ds",
    image: "https://1000logos.net/wp-content/uploads/2020/10/Four-Seasons-Emblem.jpg",
    trip_id: rand(1..15)
)
Hotel.create(
    name: "Mariott Bonvoy",
    website: "https://www.marriott.com/default.mi?gad=1&aff=MARWW&affname=1011l205974&co=WW&nt=PH",
    image: "https://www.flyinghighonpoints.com/wp-content/uploads/2019/04/Marriott-Bonvoy-Logo-SQ-Black.png",
    trip_id: rand(1..15)
)
Hotel.create(
    name: "Comfort Inn",
    website: "https://www.choicehotels.com/comfort-inn",
    image: "data:image/png;base64,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",
    trip_id: rand(1..15)
)
Hotel.create(
    name: "IHG Hotels & Resorts",
    website: "https://www.ihg.com/hotels/us/en/reservation",
    image: "https://digital.ihg.com/is/image/ihg/ihg-open-graph-1200X627",
    trip_id: rand(1..15)
)
Hotel.create(
    name: "Benchmark Resorts & Hotels",
    website: "https://www.benchmarkresortsandhotels.com",
    image: "https://www.benchmarkpyramid.com/i/SITE_161207_16553690_FQ1Z5/content/CMS_12072016_171240260_OKCX2/6E0E5DED-DD5B-E619-0F96CA07714C5855.JPG",
    trip_id: rand(1..15)
)

Trip.create(
    booked: false,
    travel_agent_id: rand(1..10),
    hotel_id: rand(1..5),
    image: Faker::Avatar.image,
    location_id: 1
)
Trip.create(
    booked: false,
    travel_agent_id: rand(1..10),
    hotel_id: rand(1..5),
    image: Faker::Avatar.image,
    location_id: 2
)
Trip.create(
    booked: false,
    travel_agent_id: rand(1..10),
    hotel_id: rand(1..5),
    image: Faker::Avatar.image,
    location_id: 3
)
Trip.create(
    booked: false,
    travel_agent_id: rand(1..10),
    hotel_id: rand(1..5),
    image: Faker::Avatar.image,
    location_id: 4
)
Trip.create(
    booked: false,
    travel_agent_id: rand(1..10),
    hotel_id: rand(1..5),
    image: Faker::Avatar.image,
    location_id: 5
)
Trip.create(
    booked: false,
    travel_agent_id: rand(1..10),
    hotel_id: rand(1..5),
    image: Faker::Avatar.image,
    location_id: 6
)
Trip.create(
    booked: false,
    travel_agent_id: rand(1..10),
    hotel_id: rand(1..5),
    image: Faker::Avatar.image,
    location_id: 7
)
Trip.create(
    booked: false,
    travel_agent_id: rand(1..10),
    hotel_id: rand(1..5),
    image: Faker::Avatar.image,
    location_id: 8
)
Trip.create(
    booked: false,
    travel_agent_id: rand(1..10),
    hotel_id: rand(1..5),
    image: Faker::Avatar.image,
    location_id: 9
)
Trip.create(
    booked: false,
    travel_agent_id: rand(1..10),
    hotel_id: rand(1..5),
    image: Faker::Avatar.image,
    location_id: 10
)
Trip.create(
    booked: false,
    travel_agent_id: rand(1..10),
    hotel_id: rand(1..5),
    image: Faker::Avatar.image,
    location_id: 11
)
Trip.create(
    booked: false,
    travel_agent_id: rand(1..10),
    hotel_id: rand(1..5),
    image: Faker::Avatar.image,
    location_id: 12
)
Trip.create(
    booked: false,
    travel_agent_id: rand(1..10),
    hotel_id: rand(1..5),
    image: Faker::Avatar.image,
    location_id: 13
)
Trip.create(
    booked: false,
    travel_agent_id: rand(1..10),
    hotel_id: rand(1..5),
    image: Faker::Avatar.image,
    location_id: 14
)
Trip.create(
    booked: false,
    travel_agent_id: rand(1..10),
    hotel_id: rand(1..5),
    image: Faker::Avatar.image,
    location_id: 15
)

Location.create(
    city: "New York City",
    country: "United States",
    image: "https://images.unsplash.com/photo-1617688319108-cb3bdc88f587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1635&q=80",
    trip_id: 1
)
Location.create(
    city: "Tokyo",
    country: "Japan",
    image: "https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2368&q=80",
    trip_id: 2
)
Location.create(
    city: "Athens",
    country: "Greece",
    image: "https://images.unsplash.com/photo-1583656696771-2afded31a36c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    trip_id: 3
)
Location.create(
    city: "Orlando",
    country: "Florida",
    image: "https://images.unsplash.com/photo-1605723517503-3cadb5818a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    trip_id: 4
)
Location.create(
    city: "San Juan",
    country: "Puerto Rico",
    image: "https://images.unsplash.com/photo-1589402249680-5ff95f2ac3bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2344&q=80",
    trip_id: 5
)
Location.create(
    city: "Florence",
    country: "Italy",
    image: "https://images.unsplash.com/photo-1541370976299-4d24ebbc9077?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2233&q=80",
    trip_id: 6
)
Location.create(
    city: "Copenhagen",
    country: "Denmark",
    image: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    trip_id: 7
)
Location.create(
    city: "Berlin",
    country: "Germany",
    image: "https://images.unsplash.com/photo-1546726747-421c6d69c929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80",
    trip_id: 8
)
Location.create(
    city: "Sydney",
    country: "Australia",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    trip_id: 9
)
Location.create(
    city: "Montreal",
    country: "Canada",
    image: "https://images.unsplash.com/photo-1470181942237-78ce33fec141?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    trip_id: 10
)
Location.create(
    city: "Madrid",
    country: "Spain",
    image: "https://images.unsplash.com/photo-1558370781-d6196949e317?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2358&q=80",
    trip_id: 11
)
Location.create(
    city: "Paris",
    country: "France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2346&q=80",
    trip_id: 12
)
Location.create(
    city: "Seoul",
    country: "South Korea",
    image: "https://images.unsplash.com/photo-1506816561089-5cc37b3aa9b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2175&q=80",
    trip_id: 13
)
Location.create(
    city: "Amsterdam",
    country: "Netherlands",
    image: "https://images.unsplash.com/photo-1584003564911-a7a321c84e1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1584&q=80",
    trip_id: 14
)
Location.create(
    city: "Cancun",
    country: "Mexico",
    image: "https://images.unsplash.com/photo-1613506140303-a3742bcbee78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2342&q=80",
    trip_id: 15
)

Activity.create(
    name: "The Empire State Building",
    age_minimum: "0",
    trip_id: 1
)
Activity.create(
    name: "Disney World",
    age_minimum: "0",
    trip_id: 4
)
Activity.create(
    name: "Universal Studios",
    age_minimum: "0",
    trip_id: 4
)
Activity.create(
    name: "Rockefeller Center",
    age_minimum: "0",
    trip_id: 1
)
Activity.create(
    name: "Ripley's Believe it or Not!",
    age_minimum: "0",
    trip_id: 1
)
Activity.create(
    name: "Sydney Opera House",
    age_minimum: "15",
    trip_id: 9
)
Activity.create(
    name: "Taronga Zoo Sydney",
    age_minimum: "0",
    trip_id: 9
)
Activity.create(
    name: "Notre-Dame Basilica of Montreal",
    age_minimum: "0",
    trip_id: 10
)
Activity.create(
    name: "Montreal Botanical Garden",
    age_minimum: "0",
    trip_id: 10
)
Activity.create(
    name: "Van Gogh Museum",
    age_minimum: "15",
    trip_id: 14
)
Activity.create(
    name: "Anne Frank House",
    age_minimum: "15",
    trip_id: 14
)
Activity.create(
    name: "Heineken Experience",
    age_minimum: "18",
    trip_id: 14
)
Activity.create(
    name: "Parthenon",
    age_minimum: "0",
    trip_id: 3
)
Activity.create(
    name: "Acropolis of Athens",
    age_minimum: "0",
    trip_id: 3
)
Activity.create(
    name: "Athens National Garden",
    age_minimum: "0",
    trip_id: 3
)
Activity.create(
    name: "Castillo San Felipe del Morro",
    age_minimum: "0",
    trip_id: 5
)
Activity.create(
    name: "Playa Ocean Park",
    age_minimum: "0",
    trip_id: 5
)
Activity.create(
    name: "El Yunque",
    age_minimum: "12",
    trip_id: 5
)
Activity.create(
    name: "Museo de Arte de Puerto Rico",
    age_minimum: "0",
    trip_id: 5
)
Activity.create(
    name: "David of Michelangelo",
    age_minimum: "0",
    trip_id: 6
)
Activity.create(
    name: "Cathedral of Santa Maria del Fiore",
    age_minimum: "0",
    trip_id: 6
)
Activity.create(
    name: "Eiffel Tower",
    age_minimum: "0",
    trip_id: 12
)
Activity.create(
    name: "Berlin Wall",
    age_minimum: "0",
    trip_id: 8
)
Activity.create(
    name: "Playa Delfines",
    age_minimum: "0",
    trip_id: 15
)
Activity.create(
    name: "Imperial Palace",
    age_minimum: "0",
    trip_id: 2
)
Activity.create(
    name: "Plaza Mayor",
    age_minimum: "0",
    trip_id: 11
)
Activity.create(
    name: "El Retiro Park",
    age_minimum: "0",
    trip_id: 11
)
Activity.create(
    name: "Bukchon Hanok Village",
    age_minimum: "0",
    trip_id: 13
)
Activity.create(
    name: "Tivoli Gardens",
    age_minimum: "0",
    trip_id: 7
)
Activity.create(
    name: "Rosenborg Castle",
    age_minimum: "0",
    trip_id: 7
)

puts "✅ Done seeding!"