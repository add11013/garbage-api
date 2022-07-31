<script setup>
import 'openapi-explorer';
</script>

<template>
  <openapi-explorer
    spec-url = "https://petstore.swagger.io/v2/swagger.json">
  </openapi-explorer>
</template>

<style>
    /* <<< targets navigation bar part selector, it's called `section-navbar`. We can see from the image that there is a linear gradient applied to using the original nav background color, transitioned to black. */
    openapi-explorer::part(section-navbar) {
      background: linear-gradient(90deg, var(--nav-bg-color), black);
    }
  </style>