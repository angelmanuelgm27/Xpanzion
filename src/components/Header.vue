<script setup>
import HeaderModel1 from './Headers/HeaderModel1.vue'
import HeaderModel2 from './Headers/HeaderModel2.vue'
import { defineProps } from 'vue'

const props = defineProps({
  menuModel: {
    type: String
  }
})
</script>
<template>
  <div>
    <!-- MODELO DE MENU N° 1 PARA EL INICIO -->
    <div v-if="props.menuModel == 1">
      <HeaderModel1 />
    </div>
    <!-- MODELO DE MENU N° 2 -->
    <div v-else-if="props.menuModel == 2">
      <HeaderModel2 :slugName="$route.params.slug" />
    </div>
  </div>
</template>
