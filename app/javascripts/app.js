function require(filename) {
  var script=document.createElement('script');
  script.setAttribute('type', 'text/javascript');
  script.setAttribute('src', filename);
  document.getElementsByTagName("head")[0].appendChild(script);
}

App = function(){};

require('app/javascripts/event_bus.js');
require('app/javascripts/micro_machines.js');
