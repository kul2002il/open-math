<template>
    <ExpressionInput v-model="line"/>
    <pre>{{parsed}}</pre>
</template>

<script setup lang="ts">

import {computed, ref} from 'vue';

import ExpressionInput from './components/ExpressionInput.vue';

import {parseExpression} from './modules/parser';

const line = ref("(x + 10.2)^2 + 5*y - z");
const parsed = computed(() => {
    return parseExpression(line.value);
});

</script>

<style>
pre {
    font-size: 15px;
    color: white;
    background-color: black;
}
</style>
