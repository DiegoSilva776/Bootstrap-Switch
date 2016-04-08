# BootstrapSwitch

A simple 'On/Off' button created with JQuery and Bootstrap.

## Usage

HTML

  1 - Insert the 'switch.js' file into your page.
  
    	<link rel="stylesheet" type="text/css" href="../path/switch.css"/>
    
    	<script src="../path/switch.js"></script>
  
  2 - Create a Switch
  
  
  	<div id="formDayTaskStatus" class="switch pull-left">
									    
		<div>
		    
			<button type="button" class="btn btn-default switched-off">Abrir</button>
											
			<button type="button" class="btn btn-default switched-off">Finalizar</button>
								
		</div>
									
  	</div>

  
JS

  1 - Create a Switch object and attach it to the DOM object
  
    	var inputStatus = new Switch("#formDayTaskStatus", "Switched on message", "Switched off message");
  
  2 - Control the state of the your switch
  
    	// set value
  
    	inputStatus.setState(true);
    
    	// get value
    
    	var res = formDayBtnSwitchStatus.isItOn();
    	
    
    
    
