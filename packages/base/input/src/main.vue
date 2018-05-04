<template>
  <div>
      <el-input :placeholder='placeholder'></el-input>
  </div>
</template>

<script>
  import {ElInput} from 'element-ui'
  export default {
    name: 'BInput',
    extends: ElInput,
    props: {
      placeholder: {
        type: String,
        default: '请填写内容'
      }
    },
    created () {
      console.log(this)
    }
  }
</script>
