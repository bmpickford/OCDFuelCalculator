<template>
  <form
    class="w-full h-min px-4 pointer-events-auto"
    @submit.prevent="submitForm"
    ref="target"
  >
    <label
      for="price-search"
      class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
      >Search</label
    >
    <label
      for="price-search"
      class="text-gray-600"
      :class="{ 'sr-only': !canSearch }"
    >
      Enter your local fuel price in cents or dollars
    </label>
    <div class="relative">
      <div
        class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5 text-gray-500 dark:text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
      <input
        @focus="focusInput"
        ref="inputEl"
        step="0.001"
        v-model="price"
        type="number"
        id="price-search"
        class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="e.g. 184"
        required
      />
      <button
        :disabled="!canSearch"
        type="submit"
        class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Search
      </button>
    </div>
  </form>
</template>
<script setup lang="ts">
import { useMotion } from "@vueuse/motion";
import { ref } from "vue";
const target = ref<HTMLElement>();
const inputEl = ref<HTMLElement>();

const emit = defineEmits<{
  (e: "search", price: number): void;
  (e: "focused"): void;
}>();

const price = ref();
const canSearch = ref(true);

// Get the variant from target motion instance.
const { apply } = useMotion(target, {
  initial: {
    y: 100,
    scale: 1,
    opacity: 0,
  },
  enter: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: "100",
      delay: 100,
    },
  },
  focused: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 250,
      damping: 25,
      mass: 0.5,
    },
  },
});

const focusInput = async () => {
  canSearch.value = true;
  emit("focused");
  await apply("focused");
};
const submitForm = async () => {
  canSearch.value = false;
  inputEl.value?.blur();
  emit("search", price.value);
  const top = target.value?.getBoundingClientRect()?.top;
  if (!top) {
    console.warn('Could not determine "top" value.');
    return;
  }
  await apply({
    y: top * -1 + 20,
    scale: 0.9,
    transition: {
      type: "spring",
      stiffness: 250,
      damping: 25,
      mass: 0.5,
    },
  });
};
</script>
