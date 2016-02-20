json.array!(@pictures) do |picture|
  json.extract! picture, :id, :url, :desc, :user_id
  json.url picture_url(picture, format: :json)
end
