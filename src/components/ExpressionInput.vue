<template>
    <textarea v-model="source"></textarea>
</template>

<script setup>

import {defineModel} from 'vue';

const source = defineModel();

</script>

<style scoped>

</style>