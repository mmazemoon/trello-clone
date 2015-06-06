TrelloClone.Routers.Router = Backbone.Router.extend({
  routes: {
    "": "boardIndex",
    "boards/:id": "boardShow"
  },

  boardIndex: function() {
    this.boards.fetch();
    var view = new TrelloClone.Views.BoardsIndex({ collection: this.boards });
    this.$rootEl.html(view.render().$el);
  },

  boardShow: function(id) {
    var board = this.boards.getOrFetch(id);
    var view = new TrelloClone.Views.BoardShow({ model: board });
    this.$rootEl.html(view.render().$el);
  },

  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.boards = new TrelloClone.Collections.Boards();
  }



});
