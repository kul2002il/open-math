<template>
    <textarea cols="80" rows="4" v-model="source"></textarea>
</template>

<script setup>

import {defineModel} from 'vue';

const source = defineModel();

</script>

<style scoped>

</style>