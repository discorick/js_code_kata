eventBus = function(){
  this.subscribers = {};
}

eventBus.prototype.addSubscriber = function(subname, subscriber) {
  this.subscribers[name] = [];
  this.subscribers[name].push(subscriber);
}

eventBus.prototype.notify = function(name) {
  sublist = this.subscribers[name];
  for(var s=0; s < sublist.length; s++){
    sub = sub[s];
    sub();
  }
}

App.Bus = new eventBus();
