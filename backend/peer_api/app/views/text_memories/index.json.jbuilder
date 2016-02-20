json.array!(@text_memories) do |text_memory|
  json.extract! text_memory, :id, :text, :user_id
  json.url text_memory_url(text_memory, format: :json)
end
