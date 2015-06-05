# write some jbuilder to return some json about a board in Ruby
# it should include the board
#  - its lists
#    - the cards for each list

json.extract! @board, :id, :title, :user_id, :created_at, :updated_at

json.lists do # key
  json.array! @board.lists do |list| # arrayify
    json.extract! list, *List.column_names
    json.cards do
      json.array! list.cards do |card|
        json.extract! card, *Card.column_names
      end
    end
  end
end
