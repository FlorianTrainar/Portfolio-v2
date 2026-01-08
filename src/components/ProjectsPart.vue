<script setup>
import { ref, computed } from 'vue'
import { projectList } from '../js/projectList'

const currentIndex = ref(0)

const currentProject = computed(() => projectList[currentIndex.value])

const next = () => {
  if (currentIndex.value < projectList.length - 1) {
    currentIndex.value++
  }
}
const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}
</script>
<template>
  <section id="projects" class="min-h-[600px] flex flex-col justify-around">
    <h3>Projets</h3>
    <p class="mb-8">Voici quelques-un de mes projets, réalisés avec amour :</p>

    <div class="relative flex justify-between">
      <button class="btn-scroll left-[-20px]" @click="prev" :disabled="currentIndex === 0">
        <font-awesome-icon :icon="['fas', 'caret-left']" />
      </button>

      <div class="w-full sm:w-[90%] lg:w-[80%] flex flex-col md:flex-row gap-6">
        <div class="flex-1 text-center">
          <div class="flex items-center justify-between gap-2 mx-5 mb-2">
            <div class="text-left">
              <h3 class="mb-2 font-bold">
                {{ currentProject.title }}
              </h3>
              <h4 class="text-white italic">
                {{ currentProject.type }}
              </h4>
            </div>

            <a :href="currentProject.url" target="_blank">
              <font-awesome-icon class="text-[40px]" :icon="['fas', 'external-link-square-alt']" />
            </a>
          </div>

          <img
            class="w-[90%] mx-auto rounded-xl shadow-md shadow-gray-100/50 object-contain"
            :src="currentProject.picture.url"
          />
        </div>

        <div class="flex-1">
          <ul class="md:mt-16">
            <li
              v-for="f in currentProject.features"
              :key="f"
              class="list-disc ml-8 md:ml-2 leading-7"
            >
              {{ f }}
            </li>
          </ul>
        </div>
      </div>

      <button
        class="btn-scroll right-[-20px]"
        @click="next"
        :disabled="currentIndex === projectList.length - 1"
      >
        <font-awesome-icon :icon="['fas', 'caret-right']" />
      </button>
    </div>

    <div class="flex justify-center gap-2 mt-6">
      <button
        v-for="(p, i) in projectList"
        :key="i"
        @click="currentIndex = i"
        class="w-3 h-3 rounded-full"
        :class="i === currentIndex ? 'bg-gray-800' : 'bg-gray-300'"
      />
    </div>
  </section>
</template>

<style scoped>
.btn-scroll {
  @apply absolute top-[-10px] md:relative text-[60px] text-gray-500;
}
</style>
