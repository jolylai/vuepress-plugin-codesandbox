<template>
  <span class="spinner rotate-animation">
    <svg class="circular" viewBox="25 25 50 50">
      <circle cx="50" cy="50" r="20" fill="none"></circle>
    </svg>
  </span>
</template>

<style scoped>
.spinner {
  display: inline-block;
  width: 30px;
  height: 30px;
  color: rgb(25, 137, 250);
}

.circular {
  display: block;
  width: 100%;
  height: 100%;
}

.circular circle {
  stroke: currentColor;
  stroke-width: 3;
  stroke-linecap: round;
  animation: circular 1.5s ease-in-out infinite;
}

.rotate-animation {
  animation: rotate 2s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes circular {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -40;
  }

  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -120;
  }
}
</style>
