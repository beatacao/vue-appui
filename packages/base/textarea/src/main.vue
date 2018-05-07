<template>
  <div>
      <el-input type='textarea' v-bind='$attrs'></el-input>
  </div>
</template>

<script>
  import {ElInput} from 'element-ui'

  export default {
    name: 'BTextarea',
    extends: ElInput
  }
</script>
