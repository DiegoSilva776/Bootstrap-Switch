# BootstrapSwitch
A simple 'On/Off' button created with JQuery and Bootstrap.

## Usage
HTML
  1 - Insert the 'switch.js' file into your page.
    <link rel="stylesheet" type="text/css" href="../path/switch.css"/>
    <script src="../path/switch.js"></script>
    
  2 - Create a Switch
    <div class="switch">
			<div id="formDayTaskStatus" class="btn-group btn-switch" role="group" aria-label="Button group with nested dropdown">
				<button type="button" class="btn btn-info switched-off">Reabrir</button>
				<button type="button" class="btn btn-danger">Finalizar</button>
			</div>
	</div>
	
JS
  1 - Create a Switch object and attach it to the DOM object
    var formDayBtnSwitchStatus = new Switch("#formDayTaskStatus", "Finalizar", "Reabrir");
  
  2 - Control the state of the your switch
    var res = formDayBtnSwitchStatus.isItOn();
