<template>
    <main>
      <div class="container mx-auto px-4 py-24 max-w-screen-2xl gradient h-screen">
        <div class="w-full lg:w-1/2 mx-auto bg-white shadow-lg rounded-lg p-6">
          <p class="text-center text-pink font-bold text-3xl py-8">Countdown Timer</p>
          <div class="flex flex-row justify-center items-center gap-10">
            <div>
              <div class="countdown-item">
                <p class="countdown-value">{{ days }}</p>
              </div>
              <p class="countdown-label text-center">Days</p>
            </div>
  
            <div>
              <div class="countdown-item">
                <p class="countdown-value">{{ hours }}</p>
              </div>
              <p class="countdown-label text-center">Hours</p>
            </div>
  
            <div>
              <div class="countdown-item">
                <p class="countdown-value">{{ minutes }}</p>
              </div>
              <p class="countdown-label text-center">Minutes</p>
            </div>
  
            <div>
              <div class="countdown-item">
                <p class="countdown-value">{{ seconds }}</p>
              </div>
              <p class="countdown-label text-center">Seconds</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </template>
  
  <script>
  export default {
    data() {
      return {
        targetTime: this.getChristmasTime(),
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    },
    mounted() {
      this.startCountdown();
    },
    methods: {
      getChristmasTime() {
        const now = new Date();
        const currentYear = now.getFullYear();
        return new Date(`December 25, ${currentYear} 00:00:00`).getTime();
      },
      startCountdown() {
        this.updateCountdown();
        setInterval(this.updateCountdown, 1000);
      },
      updateCountdown() {
        const now = new Date().getTime();
        const distance = this.targetTime - now;
  
        this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
        this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
      },
    },
  };
  </script>
  
  <style scoped>
    .countdown-value{
        color: #ee9ae5 !important;
    }

    .countdown-item{
        background: #f5f5f5 !important;
    }
  </style>
  