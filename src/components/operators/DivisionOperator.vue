<template>
    <div class="division-operator">
        <OperatorContainer class="division-operands" v-if="treeNode.left" :treeNode="treeNode.left" />
        <div class="line"></div>
        <OperatorContainer class="division-operands" v-if="treeNode.right" :treeNode="treeNode.right" />
    </div>
</template>

<script setup lang="ts">

import OperatorContainer from "@/components/operators/OperatorContainer.vue";
import type {TreeNode} from "@/modules/parser";
import {defineProps} from 'vue';

const props = defineProps<{
    treeNode: TreeNode;
}>();
</script>

<style scoped>
.division-operator {
    display: flex;
    flex-direction: column;
    Justify-content:center;
    align-items: center;
}
.division-operands {
    padding: 0 5px;
}
.line {
    display: block;
    border-bottom: 2px solid black;
    width: 100%;
}
</style>