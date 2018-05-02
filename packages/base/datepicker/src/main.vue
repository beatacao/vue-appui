<template>
  <div>
      <el-date-picker></el-date-picker>
  </div>
</template>

<script>
  import {ElDatepicker} from 'element-ui'

  export default {
    name: 'BDatepicker',
    extends: ElDatepicker
  }
</script>
