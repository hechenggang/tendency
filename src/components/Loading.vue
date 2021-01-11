<template>
<transition name="ani-loading">
    <div class="fixed_full flex_center loading bg-trans">
      <div class="loading-icon animation_rotate"></div>
    </div>
  </transition>
</template>

<style>
@keyframes frames_rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.animation_rotate {
  animation: frames_rotate 4s infinite linear;
}

.shadow {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.fixed_full {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.flex_center {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  flex-direction: column;
}

.loading {
  z-index: 999;
}
.loading-icon {
  width: 1rem;
  height: 1rem;
  border: .2rem solid #1a2b3c;
}
.ani-loading-enter-active {
  transition: all 0.15s ease-in;
}
.ani-loading-leave-active {
  transition: all 0.15s ease-out;
}
.ani-loading-enter,
.ani-loading-leave-to {
  transform: translateX(5px);
  opacity: 0;
}
.bg-trans {
  background: rgba(255, 255, 255, 0.8);
}
</style>