<template>
  <div
    class="absolute container max-w-screen-md m-auto flex h-screen items-center z-10 pointer-events-none"
    style="left: 50%"
  >
    <VSearch
      @search="onSubmit"
      @focused="onFocused"
      style="margin-left: -50%"
    />
  </div>
  <main v-if="price" ref="priceText">
    <div
      ref="priceTitle"
      class="container pt-32 relative m-auto text-center"
      v-motion
      :initial="{
        y: -50,
        opacity: 0,
      }"
      :enter="{
        y: 0,
        opacity: 1,
        transition: {
          delay: 100,
          type: 'spring',
          stiffness: 250,
          damping: 25,
          mass: 0.5,
        },
      }"
    >
      <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
        Fuel Price
      </h5>
      <div
        class="flex items-center justify-center text-gray-900 dark:text-white"
      >
        <span class="text-3xl font-semibold">$</span>
        <span class="text-5xl font-extrabold tracking-tight">{{ price }}</span>
      </div>
    </div>
    <div
      class="flex flex-wrap mt-12 justify-center z-20"
      v-motion
      :initial="{
        y: 0,
        opacity: 0,
        scale: 0.5,
      }"
      :enter="{
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
          delay: 300,
          type: 'spring',
          stiffness: 250,
          damping: 25,
          mass: 0.5,
        },
      }"
    >
      <div
        v-for="litre in litresAvailable"
        :key="litre"
        class="m-2 flex p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <div class="mx-4">
          <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
            Litres
          </h5>
          <div
            class="flex items-center justify-center text-gray-900 dark:text-white"
          >
            <span class="text-3xl font-extrabold tracking-tight">{{
              litre
            }}</span>
          </div>
        </div>
        <div class="mx-4">
          <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
            Cost
          </h5>
          <div
            class="flex items-center justify-center text-gray-900 dark:text-white"
          >
            <span class="text-2xl font-semibold">$</span>
            <span class="text-3xl font-extrabold tracking-tight">{{
              (litre * price).toFixed(2)
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import { ref } from "vue";
import VSearch from "./components/VSearch.vue";
import fuelPriceMap from "./data/fuel.json";

const price = ref();
const priceText = ref<HTMLElement>();
const litresAvailable = ref<number[] | undefined>();

const onSubmit = (_price: number) => {
  price.value = getPriceInDollars(_price);
  litresAvailable.value = fuelPriceMap.find(
    (item) => item.price === getPriceInDollars(_price)
  )?.litres;
};

const onFocused = () => {
  price.value = undefined;
  litresAvailable.value = undefined;
};

const getPriceInDollars = (_price: number) => {
  if (_price > 50) {
    return _price / 100;
  }
  return _price;
};
</script>
