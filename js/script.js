(function (){
	'use strict';

var TIMER = function() {
	this.currentTime = 0;
	this.startTime = 0;
	this.deltaTime = 0;
	this.isActive = false;
	this.interval = 0;
	this.value = 0;
	this.timerTotalValue = 0;
	this.startBtn;
	this.stopBtn;
	this.convertedTime = {
		ms : 0,
		seconds : 0,
		minutes : 0,
		hours : 0
	},
	this.elements = {};

	this.createLayout = function() {
			var container = createNode('div', null, null, null);
			container.style.border = '1px solid #ccc';
			this.startBtn = createNode('button', null, null, 'START'),
		  this.stopBtn = createNode('button', null, null, 'STOP');
		 	this.elements.timeField = createNode('p', null, null, '0');
			this.elements.timeField.style.fontSize = '3rem';
		 	this.startBtn.addEventListener('click', function(){
				this.startTimer();
			}.bind(this));
			this.stopBtn.addEventListener('click', function(){
				this.resetTimer();
			}.bind(this));
			container.append(this.startBtn, this.stopBtn, this.elements.timeField);
			console.log(container);
			return container;
		};

		this.startTimer = function() {
			if(!this.isActive){
				 this.startBtn.innerHTML = 'PAUSE';
				 this.setTime();
				 this.updateTime();
				 this.runTime();
				 this.isActive = true;
			 } else {
				 this.stopTimer();
				 this.isActive = false;
				 //this.currentTime += this.deltaTime;
				 this.startBtn.innerHTML = 'CONTINUE';
				 clearInterval (this.interval);
		 }
		};

		this.stopTimer = function () {
			clearInterval (this.interval);
			this.startBtn.innerHTML = 'START';
			//this.value += this.deltaTime;
			this.isActive = false;
			this.timerTotalValue += this.deltaTime;
	};

		this.runTime = function () {
			var self = this;
			self.interval = setInterval (function(){
				self.updateTime();
    	}, 1);
		};

		this.setTime = function() {
			this.startTime = Date.now();
		};

		this.updateHTML = function(){
			var value = this.timerTotalValue + this.deltaTime;
			this.convertTime(value);
			this.convertedTime.ms= this.convertedTime.ms + ' ms';
			value = Math.floor( value / 1000 );
			this.convertedTime.seconds  = this.pad((value % 60), 2);
			value = Math.floor( value / 60 );
			this.convertedTime.minutes  = this.pad((value % 60), 2);
			value /= Math.floor( value / 60 );
			this.convertedTime.hours = this.pad((value % 24), 2);
			this.convertedTime.hours = Math.floor(this.deltaTime/36000 % 24);
			this.elements.timeField.innerHTML = this.convertedTime.hours + ' : ' + this.convertedTime.minutes + ' : ' +
																					this.convertedTime.seconds + ' : ' + this.convertedTime.ms;
		};

		this.convertTime = function(timeMs) {
			var self = this;
			this.convertedTime.ms = self.pad(Math.floor(this.deltaTime % 1000), 3);
			timeMs = Math.floor( timeMs / 1000 );
			this.convertedTime.seconds = self.pad((timeMs % 60), 2);
			timeMs = Math.floor( timeMs / 60 );
			this.convertedTime.minutes = self.pad((timeMs % 60), 2);
			timeMs /= Math.floor( timeMs / 60 );
			this.convertedTime.hours = self.pad((timeMs % 24), 2);
		};

		this.updateTime = function() {
			this.currentTime = Date.now();
			//console.log ('currentTime', this.currentTime);
			//console.log('startTime', this.startTime);
			this.deltaTime = this.currentTime - this.startTime;
			this.updateHTML();
		};

		this.pad = function (num, size) {
				if ( isNaN(num) ) {
					num = 0;
				}
			    var s = "000" + num;
			    return s.substr(s.length-size);
			};

		this.init = function() {
    	document.querySelector('#root').append(this.createLayout());
     };

		 this.resetTimer = function() {
			 this.stopTimer();
			 this.timerTotalValue = this.deltaTime = 0;
			 //this.elements.timeField.innerHTML = '00' + ' : ' + '00' + ' : ' + '00' + ' : ' +'000';

		 };


};
		var instance1 = new TIMER();
		console.log(instance1);
		instance1.init();
})();
