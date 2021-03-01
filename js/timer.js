class CountdownTimer{
  constructor({ selector, targetDate }){
    this.selector = selector;
    this.targetDate = targetDate;
    this.timerRef = document.querySelector(selector);
    this.dayRef = this.timerRef.querySelector('[data-value="days"]');
    this.hourRef = this.timerRef.querySelector('[data-value="hours"]');
    this.minRef = this.timerRef.querySelector('[data-value="mins"]');
    this.secRef = this.timerRef.querySelector('[data-value="secs"]');

    setInterval(() => {
      const time = this.targetDate - Date.now();
      this.dayRef.textContent = getTime(time).days;
      this.hourRef.textContent = getTime(time).hours;
      this.minRef.textContent = getTime(time).mins;
      this.secRef.textContent = getTime(time).secs;
    }, 1000);
    
    function getTime(time){
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((time % (1000 * 60)) / 1000);
      return{ days, hours, mins, secs };
    }
    function pad(value) {
      return String(value).padStart(2, "0");
    }
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jun 19, 2021'),
});

