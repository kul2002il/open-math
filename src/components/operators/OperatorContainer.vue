<template>
    <InlineOperator operator="+" v-if="treeNode.operator === '+'" :treeNode="treeNode" />
    <InlineOperator operator="-" v-else-if="treeNode.operator === '-'" :treeNode="treeNode" />
    <InlineOperator operator="*" v-else-if="treeNode.operator === '*'" :treeNode="treeNode" />
    <BraceOperator v-else-if="treeNode.operator === '('" :treeNode="treeNode" />
    <DivisionOperator v-else-if="treeNode.operator === '/'" :treeNode="treeNode" />
    <div class="operator" v-else>{{treeNode.operator || '[none]'}}</div>
</template>

<script setup lang="ts">

import InlineOperator from "@/components/operators/InlineOperator.vue";
import BraceOperator from "@/components/operators/BraceOperator.vue";
import DivisionOperator from "@/components/operators/DivisionOperator.vue";
import {TreeNode} from "@/modules/parser";
import {defineProps} from 'vue';

defineProps<{
  treeNode: TreeNode;
}>();

</script>

<style scoped>

</style>