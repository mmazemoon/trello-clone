TrelloClone.Views.BoardShow = Backbone.View.extend({

template: JST["boards/show"],

events: {
  "click button#delete_board" : "deleteBoard",
  "submit form#new_list" : "createList"
},

initialize: function (){
  this.listenTo(this.model, "sync", this.render);
  this.listenTo(this.model.lists(), "add", this.addListView);
  this.listenTo(this.model.lists(), "remove", this.removeListView)
},

render: function () {
  var content = this.template({ board: this.model });
  this.$el.html(content);
  return this;
},

addListView: function(){},

removeListView: function(){}


});
