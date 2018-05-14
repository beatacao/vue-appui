<template>
    <el-date-picker v-bind='$attrs' @input='input'></el-date-picker>
</template>

<script>
  import {ElDatepicker} from 'element-ui'

  export default {
    name: 'BDatepicker',
    extends: ElDatepicker,
    methods: {
      input (val) {
        this.$emit('input', val)
      }
    }
  }
</script>
