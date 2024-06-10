<script setup>
  import { defineComponent } from 'vue';

  import CountDown from './components/countDown.vue';
  import { RouterView } from 'vue-router';

  const LayoutWrapper = defineComponent({
    components: {
        CountDown
    },
  });
</script>


<template>
  <main>
    <CountDown />
  </main>
</template>

