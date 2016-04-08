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
    
    
    // Indicates the logical state of the controller
    var _el = undefined;
    var _offMsg = "Off";
    var _onMsg  = "On";
    var state = false;
    
    // Classes used by the plugin elements
    var CLASS_ON     = "switched-on";
    var CLASS_OFF    = "switched-off";
    var CLASS_BTN    = "btn";
    
    // Selectors
    var SLCTR_SWITCH       = el;
    var SLCTR_ON           = "." + CLASS_ON;
    var SLCTR_OFF          = "." + CLASS_OFF;
    var SLCTR_SWITCH_CHILD = "." + CLASS_BTN;
    
    // Elements inserted dynamically
    var TAG_INFO_ICO  = "i";
    var INFO_ICO_ON   = "<"+TAG_INFO_ICO+" class='"+CLASS_ON+"'>"+ _offMsg +"</"+TAG_INFO_ICO+">";
    var INFO_ICO_OFF  = "<"+TAG_INFO_ICO+" class='"+CLASS_OFF+"'>"+ _onMsg +"</"+TAG_INFO_ICO+">";
    
    
    // METHODS
    var wireEvents = function(){
        $(_el).click(function(){
            switchToggle(this);
        });
    };
    
    var switchToggle = function(el){
        $(el).find(TAG_INFO_ICO).remove();
        
        if($(el).find(SLCTR_SWITCH_CHILD).first().hasClass(CLASS_ON)){
            // UI operations
            $(el).find(SLCTR_SWITCH_CHILD).first().removeClass(CLASS_ON)
            $(el).find(SLCTR_SWITCH_CHILD).last().removeClass(CLASS_ON);
            $(el).find(SLCTR_SWITCH_CHILD).first().addClass(CLASS_OFF)
            $(el).find(SLCTR_SWITCH_CHILD).last().addClass(CLASS_OFF);
            
            // add info to label
            $(el).append(INFO_ICO_ON);
            
            // Logic operations
            state = true;
        }else{
            // UI operations
            $(el).find(SLCTR_SWITCH_CHILD).first().removeClass(CLASS_OFF)
            $(el).find(SLCTR_SWITCH_CHILD).last().removeClass(CLASS_OFF);
            $(el).find(SLCTR_SWITCH_CHILD).first().addClass(CLASS_ON)
            $(el).find(SLCTR_SWITCH_CHILD).last().addClass(CLASS_ON);
            
            // add info to label
            $(el).append(INFO_ICO_OFF);
            
            // Logic operations
            state = false;
        };
    }
    
    this.isItOn = function(){
        return state;
    };
    
    this.setState = function(on){
        this.state = on;
        switchToggle(_el);
    }
    
    
    // INITIALIZER
    this.init = function(el, offMsg, onMsg){
    
        // initialize data model
        _el = el;
        _offMsg = offMsg;
        _onMsg  = onMsg;
    
        INFO_ICO_ON  = "<"+TAG_INFO_ICO+" class='"+CLASS_ON+"'>"+ _offMsg +"</"+TAG_INFO_ICO+">";
        INFO_ICO_OFF = "<"+TAG_INFO_ICO+" class='"+CLASS_OFF+"'>"+ _onMsg +"</"+TAG_INFO_ICO+">";
    
        // Initialize controller
        switchToggle(_el);
        
        // Wire prototype events    
        wireEvents();    
    };
    
    this.init(el, offMsg, onMsg);
}
