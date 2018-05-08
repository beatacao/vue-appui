<template>
    <el-input type='textarea' v-bind='$attrs'></el-input>
</template>

<script>
  import {ElInput} from 'element-ui'

  export default {
    name: 'BTextarea',
    extends: ElInput
  }
</script>
