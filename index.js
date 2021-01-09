/*
Credits:
SnowStorm JS plugin created by Scott Schiller. http://www.schillmania.com/projects/snowstorm/
*/

// The below settings are optional (and are the default in many cases). The plugin works great out of the box so ignore this unless you're looking to customize!
snowStorm.excludeMobile = true;
snowStorm.followMouse = false;
snowStorm.snowColor = '#99ccff';   // blue-ish snow!?
// snowStorm.snowColor = '#ffffff';   // white snow
snowStorm.flakesMaxActive = 480;    // show more snow on screen at once

snowStorm.snowStick = true;
snowStorm.useMeltEffect = true; // When recycling fallen snow (or rarely, when falling), have it "melt" and fade out if browser supports it
snowStorm.useTwinkleEffect = false; //Allow snow to randomly "flicker" in and out of view while falling
snowStorm.vMaxX = 1;
snowStorm.vMaxY = 6; // Defines maximum X and Y velocities for the storm; a random value in this range is selected for each snowflake.
snowStorm.animationInterval = 30; //Theoretical "milliseconds per frame" measurement. 20 = fast + smooth, but high CPU use. 50 = more conservative, but slower