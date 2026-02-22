<script setup>
defineProps({
  bg: {
    type: String,
    default: 'bg1', // 'bg1' | 'bg2'
  },
  haloPosition: {
    type: String,
    default: 'right', // 'left' | 'right' | 'center'
  },
  showDivider: {
    type: Boolean,
    default: true,
  },
})
</script>

<template>
  <div :class="['relative overflow-hidden', bg === 'bg1' ? 'bg-[var(--bg1)]' : 'bg-[var(--bg2)]']">
    <!-- HALO -->
    <div class="absolute inset-0 z-0 pointer-events-none">
      <div
        :class="[
          'absolute w-[600px] h-[600px] blur-[160px] rounded-full bg-emerald-400/15',
          haloPosition === 'right' && 'top-[-200px] right-[-200px]',
          haloPosition === 'left' && 'top-[-200px] left-[-200px]',
          haloPosition === 'center' && 'top-[-200px] left-1/2 -translate-x-1/2',
        ]"
      />
    </div>

    <!-- SLOT -->
    <div class="relative z-10">
      <slot />
    </div>

    <!-- DIVIDER -->
    <div
      v-if="showDivider"
      class="absolute bottom-0 left-0 w-full flex justify-center z-20 pointer-events-none"
    >
      <div class="relative w-full h-px">
        <div
          class="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent"
        />
        <div class="absolute inset-0 bg-emerald-200/20 blur-sm" />
      </div>
    </div>
  </div>
</template>
