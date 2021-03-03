<template>
  <a :href="link" target="_blank">
    <button
      type="button"
      class="btn-transition focus:outline-none dark:text-white light:text-gray-800 text-md py-3 px-5 rounded-md border border-gray-800 hover:text-white hover:bg-primary-500"
    >
      {{ text }}
    </button>
  </a>
</template>

<script>
export default {
  props: {
    text: String,
    link: String,
  },
};
</script>

<style scoped>
.btn-transition {
transition-property: all;
transition-timing-function: ease-out;
transition-duration: 200ms;
}

</style>

