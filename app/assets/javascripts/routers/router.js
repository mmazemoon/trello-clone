TrelloClone.Routers.Router = Backbone.Router.extend({
  routes: {
    "": "boardIndex"
  },

  boardIndex: function() {
    this.boards.fetch();
    var view = new TrelloClone.Views.BoardsIndex({ collection: this.boards });
    this.$rootEl.html(view.render().$el);
  },

  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.boards = new TrelloClone.Collections.Boards();
  }



});
