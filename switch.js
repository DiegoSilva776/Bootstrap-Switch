/**
 * Switch plugin.
 * 
 * A simple controller to represent 'On' and 'Off' states of an entity
 * 
 * Created by: Diego M. Silva, 2016.
 * License: MIT.
 */

// DEPENDENCIES
/*  
    global $
*/


/**
 * A Switch controller class, for handling the state of a 'On/Off' button
 */
var Switch = function(el, offMsg, onMsg){
    
    // ATTRIBUTES
    // 'On' and 'Off' messages
    var MSG_OFF = "Finalizada";
    var MSG_ON  = "Aberta";
    
    // Classes used by the plugin elements
    var CLASS_ON     = "switched-on";
    var CLASS_OFF    = "switched-off";
    var CLASS_SWITCH = "btn-switch";
    var CLASS_BTN    = "btn";
    
    // Selectors
    var SLCTR_SWITCH       = el;
    var SLCTR_ON           = "." + CLASS_ON;
    var SLCTR_OFF          = "." + CLASS_OFF;
    var SLCTR_SWITCH_CHILD = "." + CLASS_BTN;
    
    // Elements inserted dynamically
    var TAG_INFO_ICO  = "i";
    var INFO_ICO_ON   = "<"+TAG_INFO_ICO+" class='"+CLASS_ON+"'>"+ MSG_OFF +"</"+TAG_INFO_ICO+">";
    var INFO_ICO_OFF  = "<"+TAG_INFO_ICO+" class='"+CLASS_OFF+"'>"+ MSG_ON +"</"+TAG_INFO_ICO+">";
    
    // Indicates the logical state of the controller
    var _el = undefined;
    var state = false;
    
    
    // METHODS
    var wireEvents = function(){
        $(SLCTR_SWITCH).click(function(){
            switchToggle(this);
        });
    };
    
    var switchToggle = function(el){
        $(el).parent().find(TAG_INFO_ICO).remove();
        
        if($(el).find(SLCTR_SWITCH_CHILD).first().hasClass(CLASS_ON)){
            // UI operations
            $(el).find(SLCTR_SWITCH_CHILD).first().removeClass(CLASS_ON)
            $(el).find(SLCTR_SWITCH_CHILD).last().addClass(CLASS_OFF);
            $(el).parent().append(INFO_ICO_ON);
            
            // Logic operations
            state = true;
        }else{
            // UI operations
            $(el).find(SLCTR_SWITCH_CHILD).first().addClass(CLASS_ON)
            $(el).find(SLCTR_SWITCH_CHILD).last().removeClass(CLASS_OFF);
            $(el).parent().append(INFO_ICO_OFF);
            
            // Logic operations
            state = false;
        };
    }
    
    this.isItOn = function(){
        return state;
    };
    
    
    
    // INITIALIZER
    this.init = function(offMsg, onMsg){
    
        // Initialize button state message
        MSG_OFF = offMsg;
        MSG_ON  = onMsg;
    
        // Initialize controller
        $(document).find(SLCTR_SWITCH).each(function(){
            switchToggle(this);
        });
    
        // Wire prototype events    
        wireEvents();    
    };
    
    this.init(offMsg, onMsg);
}
