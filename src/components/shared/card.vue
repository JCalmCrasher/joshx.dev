<template>
  <div class="card" :class="extraClasses">
    <div class="flex justify-between space-y-1">
      <div class="flex flex-col">
        <ul
          v-if="Array.isArray(title) && title.length > 0"
          class="flex space-x-1 mb-4"
        >
          <li v-for="(stack, i) in title" :key="i">
            <badge-area
              :badge="{ label: stack }"
              :extraClasses="'bg-secondary text-gray-400 text-sm font-medium'"
            />
          </li>
        </ul>
        <slot name="header-info"></slot>
      </div>
      <div class="font-mono font-extrabold text-info">{{ logo }}</div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import BadgeArea from "./badge.vue";
export default {
  components: { BadgeArea },
  name: "CardArea",
  props: {
    // TODO: use enum for extraClasses
    extraClasses: { type: String },
    title: {},
    logo: { type: String },
  },
};
</script>

<style scoped>
.card {
  @apply p-6;
}
.card h1:first-of-type {
  @apply text-lg;
}

.card p:first-of-type {
  @apply text-darkText;
}

:slotted(p) {
  @apply leading-6;
}
</style>
