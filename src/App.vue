<script setup>
import "openapi-explorer";
</script>

<script>
export default {
  data() {
    return {
      url: "./doc/schema/example.yml",
    };
  },
};
</script>

<template>
  <openapi-explorer :spec-url="url"></openapi-explorer>
</template>

<style>
</style>