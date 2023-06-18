# require 'pry'

# require 'net/http'
# require 'json'

# class HotelAPI
#     def initialize
#         #dog friendly hotels in NYC
#         #how to make this url call more secure - my api key is at the end of it? interpolation?
#         @url = "https://api.geoapify.com/v2/places?categories=accommodation.hotel&conditions=dogs&filter=place:51d78dcdee167c52c059a5d22785e3544440f00101f90121af020000000000c0020a92031043697479206f66204e657720596f726b&lang=en&limit=20&apiKey="
#     end

#     def fetch_trip_net_http
#         uri = URI(@url)
#         response = Net::HTTP.get(uri)
#         data = JSON.parse(response)
#         all_hotels = data["features"]
#         # binding.pry
#         all_hotels.each do |hotel|
#             Hotel.new(name: hotel["name"], location: hotel["formatted"], contact: hotel["properties"]["datasource"]["raw"]["email"], website: hotel["properties"]["datasource"]["raw"]["website"])
#         end
#         # binding.pry
#     end
# end

# HotelAPI.new.fetch_trip_net_http