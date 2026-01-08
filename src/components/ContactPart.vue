<script setup></script>
<template>
  <section id="contacts">
    <h3>Contact</h3>
    <div class="flex flex-col md:flex-row-reverse items-center justify-end md:gap-10">
      <div class="flex flex-col justify-center gap-6 text-xl mb-10">
        <div class="flex items-center gap-3">
          <font-awesome-icon class="text-3xl mr-1 text-white" :icon="['fas', 'envelope']" />
          <p>florian.trainar@hotmail.fr</p>
        </div>
        <div class="flex items-center gap-3">
          <img class="h-8" src="../img/logo-github.png" />
          <a href="https://github.com/FlorianTrainar" target="_blank">github.com/FlorianTrainar</a>
        </div>
      </div>
      <div class="flex flex-col items-center gap-[20px]">
        <img
          class="w-[180px] h-[180px] lg:w-[210px] lg:h-[210px] rounded-full border border-lime-600 shadow-md shadow-lime-500 object-cover bg-gray-900/40"
          src="../img/coucou2.webp"
          alt=""
        />
      </div>
    </div>
  </section>
</template>
<style scoped></style>
