<template>
  <el-input :style='{"min-width": 8*placeholder.length*2 + "px"}' :placeholder='placeholder' v-bind='$attrs' @change='onChange' @focus='onFocus' @blur='onBlur'></el-input>
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
      // console.log(this)
    },
    methods: {
      onBlur () {
        this.$emit('blur')
      },
      onFocus () {
        this.$emit('focus')
      },
      onChange (val) {
        this.$emit('change', val)
      }
    }
  }
</script>
