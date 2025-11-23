<template>
    <div class="brace-operator">
        <div>(</div>
        <OperatorContainer v-if="treeNode.right" :treeNode="treeNode.right" />
        <div>)</div>
    </div>
</template>

<script setup lang="ts">

import OperatorContainer from "@/components/operators/OperatorContainer.vue";
import type {TreeNode} from "@/modules/parser";
import {defineProps} from 'vue';

defineProps<{
    treeNode: TreeNode;
}>();

</script>

<style scoped>
.brace-operator {
    display: flex;
    flex-direction: row;
    Justify-content:center;
    align-items: center;
}
</style>