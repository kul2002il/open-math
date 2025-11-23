<template>
    <div class="line-operator">
        <OperatorContainer v-if="treeNode.left" :treeNode="treeNode.left" />
        <div>{{operator}}</div>
        <OperatorContainer v-if="treeNode.right" :treeNode="treeNode.right" />
    </div>
</template>

<script setup lang="ts">

import OperatorContainer from "@/components/operators/OperatorContainer.vue";
import type {TreeNode} from "@/modules/parser";
import {defineProps} from 'vue';

defineProps<{
    treeNode: TreeNode;
    operator: string
}>();

</script>

<style scoped>
.line-operator {
    display: flex;
    flex-direction: row;
    Justify-content:center;
    align-items: center;
}
</style>