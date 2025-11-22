<template>
    <div>
        <ExpressionInput v-model="line"/>
        <div>
            <OperatorContainer :tree-node="parsed" />
        </div>
        <pre>{{parsed}}</pre>
    </div>
</template>

<script setup lang="ts">

import {computed, ref} from 'vue';
import ExpressionInput from '@/components/ExpressionInput.vue';
import OperatorContainer from "@/components/operators/OperatorContainer.vue";
import {parseExpression} from './modules/parser';

const line = ref("{x + 10.2}/2 + 5*(y - z)");
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
