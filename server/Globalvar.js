var x = {};
x.version = 'LKYHFOEIHLSKDJGEG';
x.maxnamelength = 15;

x.queue = {};
x.queue.minplayers = 4;
x.queue.maxplayers = 24;
x.queue.maxwait = 30000; //1000*60*5; // 5 minutes in miliseconds

x.game = {};
x.game.areaperplayer = 49;// will be rounded to the closest square root number
x.game.loopdelay = 1000; // one tick per second
x.game.maxmovequeue = 10; // max number of moves you can queue up

module.exports = x;