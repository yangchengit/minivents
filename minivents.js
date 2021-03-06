/**
 *  Events
 */
function Events(target){
  var events = {}, i, list, args, A = Array;
  target = target || this
    /**
     *  On: listen to events
     */
    target.on = function(type, func, ctx){
      events[type] || (events[type] = [])
      events[type].push({f:func, c:ctx})
    }
    /**
     *  Off: stop listening to event / specific callback
     */
    target.off = function(type, func){
      list = events[type] || []
      i = list.length = func ? list.length : 0
      while(~--i<0) func == list[i].f && list.splice(i,1)
    }
    /** 
     * Emit: send event, callbacks will be triggered
     */
    target.emit = function(){
      args = A.apply([], arguments)
      list = events[args.shift()] || []
      i = list.length
      for(j=0;j<i;j++) list[j].f.apply(list[j].c, args) 
    };
}
module.exports = Events
