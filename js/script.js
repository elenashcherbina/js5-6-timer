(function (){
  'use strict';

  var timer = function (){
       this.currentTime = 0;
       this.hours;
       this.min;
       this.sec;
       this.mSec;
       this.startTime = 0;
       this.deltaTime = 0;
       this.totalTimeValue = 0;
       this.isActive = false;
       this.interval;
       this.timeField;
       this.elements = {};

       this.createLayout = function() {
         var container = createNode('div', null, null, null);
         container.style.border = '1px solid #ccc';

              var startBtn = createNode('button', null, null, 'START'),
            stopBtn = createNode('button', null, null, 'STOP');
          this.elements.timeField = createNode('p', null, null, '0');
           this.elements.timeField.style.fontSize = '3rem';

          startBtn.addEventListener('click', this.runTimer.bind(this));
         stopBtn.addEventListener('click', this.stopTimer.bind(this));
           container.append(startBtn, stopBtn, this.elements.timeField);

         return container;
         };

       this.updateTime = function() {
         this.currentTime = new Date(Date.now());
 		     this.deltaTime = this.currentTime - this.startTime;
         console.log(this.deltaTime)
       };

       this.runTimer = function() {
         //startBtn = document.getElementById('start');
         startBtn.addEventListener('click', function() {
         if(!isActive){
            startBtn.innerHTML = 'Pause';
            startTime = new Date(Date.now());
            isActive = true;
            startTimer();
          } else {
            isActive = false;
            startBtn.innerHTML = 'Continue';
            clearInterval (interval);
            this.startTime();
            return startTime;
        }
      });
      };

      this.stopTimer = function () {
        stopBtn.addEventListener('click', function(){
        clearInterval (interval);
        startBtn = document.getElementById('start');
        startBtn.innerHTML = 'Start';
        timeField.innerHTML = '00:00:00:00';
        isActive = false;
      });
    };

    this.startTimer = function (){
      interval = setInterval (function(){
           updateTime();
    	}, 1);
    };

  /*  this.updateTimer = function() {
		    this.currentTime = new Date();
		    this.deltaTime = this.currentTime - this.startTime;
		    this.updateValues();
      };*/
/*
      this.convertTime = function (thideltaTime) {

             /*this.hours = Math.floor(this.deltaTime/360000%24);
			       this.min = Math.floor(this.deltaTime/6000%60);
			       this.sec = Math.floor(this.deltaTime/100%60);
			       this.mSec = this.deltaTime % 100;
        		 if (this.hours < 10) {
        				this.hours = "0" + this.hours;
        			}
             if (this.min < 10) {
                        this.min = "0" + this.min;
                    }
             if (this.sec < 10) {
                    	this.sec = "0" + this.sec;
                    }
             if (this.sec >= 60) {
                      this.sec = this.sec % 60;
                	}
             if (this.mSec < 10) {
                     this.mSec = "0" + this.mSec;
                   }*/
           //};

           this.updateHTML = function(){
             this.elements.timeField.innerHTML = this.deltaTime.getSeconds() + ' : ' + this.deltaTime.getMilliseconds();
           };

           this.init = function() {
  document.append(this.createLayout());
     };
};


var instance1 = new timer();
console.log(instance1);
  instance1.init();
})();
