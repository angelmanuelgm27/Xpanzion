<script setup>
import { defineProps } from 'vue'
import FooterModel1 from './Footers/FooterModel1.vue'
import FooterModel2 from './Footers/FooterModel2.vue'

const props = defineProps({
  modelFooter: {
    type: String
  }
})
</script>
<template>
  <footer>
    <div v-if="props.modelFooter == 1 ">
      <FooterModel1 />
    </div>

    <div v-else-if="props.modelFooter == 2 ">
      <FooterModel2 />
    </div>
  </footer>
</template>
