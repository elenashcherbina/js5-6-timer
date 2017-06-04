(function (){
	'use strict';

var timer = function() {
	this.currentTime = 0;
	this.startTime = 0;
	this.deltaTime = 0;
	this.isActive = false;
	this.interval = 0;
	this.elements = {};

	this.createLayout = function() {
			var container = createNode('div', null, null, null);
			container.style.border = '1px solid #ccc';
			var startBtn = createNode('button', null, null, 'START'),
		  	  stopBtn = createNode('button', null, null, 'STOP');
		 	this.elements.timeField = createNode('p', null, null, '0');
			this.elements.timeField.style.fontSize = '3rem';
		 	startBtn.addEventListener('click', function(){
				this.startTimer();
			}.bind(this));
			stopBtn.addEventListener('click', function(){
				this.stopTimer();
			}.bind(this));
			container.append(startBtn, stopBtn, this.elements.timeField);
			console.log(container);
			return container;
		};

		this.startTimer = function() {
			if(!this.isActive){
				 this.createLayout.startBtn = createNode('button', null, null, 'PAUSE');
				 this.setTime();
				 console.log(this.startTime);
				 this.runTime();
				 this.isActive = true;
			 } else {
				 this.isActive = false;
				 this.createLayout.startBtn = createNode('button', null, null, 'CONTINUE');
				 clearInterval (this.interval);
		 }
		};

		this.stopTimer = function () {
			clearInterval (this.interval);
			this.createLayout.startBtn.innerHTML = 'Start';
			this.isActive = false;
	};

		this.runTime = function () {
			this.interval = setInterval (function(){
				this.updateTime();
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
		};

	this.updateTime = function() {
			this.currentTime = Date.now();
			this.deltaTime = new Date(this.currentTime - this.startTime);
			console.log(this.deltaTime);
			this.updateHTML();
		};

		this.init = function() {
    	document.querySelector('#root').append(this.createLayout());
     };



};
		var instance1 = new timer();
		console.log(instance1);
		instance1.init();
})();
