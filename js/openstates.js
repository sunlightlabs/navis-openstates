(function($) {
    
    // models
    var Legislator = Backbone.Model.extend({
        
    });
    
    var Bill = Backbone.Model.extend({
        
    });
    
    // collections
    var LegislatorList = Backbone.Collection.extend({
        model: Legislator
    });
    
    var BillList = Backbone.Collection.extend({
        model: Bill
    });
    
    // views
    var LegislatorView = Backbone.View.extend({
        
    });
    
    var BillView = Backbone.View.extend({
        
    });
    
})(window.jQuery);