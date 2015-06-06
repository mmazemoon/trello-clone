TrelloClone.Models.Board = Backbone.Model.extend({

  urlRoot: "/api/boards",

  parse: function(response){
    if (response.lists) {
      this.lists().set(response.lists);
      delete response.lists;   // delete vanilla javascript operator, e.g. +, -
    }
    return response;  // always return response.
  },

  lists: function (){
    if (!this._lists){
      this._lists = new TrelloClone.Collections.Lists();
    }
    return this._lists; // always return this._lists
  }

});
