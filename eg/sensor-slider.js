var five = require("../lib/johnny-five.js"),
    board, slider;

board = new five.Board();

board.on("ready", function() {

  // Create a new `slider` hardware instance.
  slider = new five.Sensor({
    pin: "A0",
    freq: 250
  });

  // Inject the `slider` hardware into
  // the Repl instance's context;
  // allows direct command line access
  board.repl.inject({
    slider: slider
  });

  //
  // "change", "slide", "touch", "bend"
  //
  // Fires when value of sensor changes
  //
  slider.scale([ 0, 100 ]).on("slide", function( err, value ) {

    console.log( "slide", value, this.value, this.scaled );

  });
});

// Tutorials
//
// http://www.dfrobot.com/wiki/index.php?title=Analog_Slide_Position_Sensor_(SKU:_DFR0053)
