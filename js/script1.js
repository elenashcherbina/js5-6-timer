(function (){
	'use strict';

var TIMER = function() {
	this.currentTime = 0;
	this.startTime = 0;
	this.deltaTime = 0;
	this.isActive = false;
	this.interval = 0;
	this.value = 0;
	this.startBtn;
	this.stopBtn;
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
				this.stopTimer();
			}.bind(this));
			container.append(this.startBtn, this.stopBtn, this.elements.timeField);
			console.log(container);
			return container;
		};

		this.startTimer = function() {
			if(!this.isActive){
				var self = this;
console.log(self.startBtn);
				 this.startBtn.innerHTML = 'PAUSE';
				 this.setTime();
				 this.runTime();
				 this.isActive = true;
			 } else {
				 //this.stop();
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
	};

		this.runTime = function () {
			var self = this;
			console.log('self', self);
			self.currentTime += self.deltaTime;
			self.interval = setInterval (function(){
				self.updateTime();
    	}, 1);
		};

		this.setTime = function() {
			this.startTime = Date.now();
		};

		this.updateHTML = function(){
			this.elements.timeField.innerHTML = this.deltaTime.getHours() + ' : '
				+ this.deltaTime.getMinutes() + ' : '
				+ this.deltaTime.getSeconds() + ' : '
				+ this.deltaTime.getMilliseconds();
			console.log('hours', this.deltaTime.getHours())
		};

	this.updateTime = function() {
			this.currentTime = Date.now();
			console.log ('currentTime', this.currentTime);
			console.log('startTime', this.startTime);
			this.deltaTime = new Date(this.currentTime - this.startTime);
			this.updateHTML();
		};

		this.init = function() {
    	document.querySelector('#root').append(this.createLayout());
     };



};
		var instance1 = new TIMER();
		console.log(instance1);
		instance1.init();
})();
