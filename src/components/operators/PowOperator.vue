<template>
    <div class="power-operator">
        <OperatorContainer class="power-operand-exp" v-if="treeNode.left" :treeNode="treeNode.left" />
        <div class="power-operand-power">
            <OperatorContainer v-if="treeNode.right" :treeNode="treeNode.right" />
        </div>
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

.power-operator {
    display: inline-flex;
    flex-direction: row;
}

.power-operand-exp {
    align-self: center;
}

.power-operand-power {
    align-self: flex-start;
    font-size: 70%;
}

</style>