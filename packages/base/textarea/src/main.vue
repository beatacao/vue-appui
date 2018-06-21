<template>
  <div :class='{"vu__base-textarea": true, tab: isTab, hasvalue: value&&value.length>0}'>
      <label v-if='label && label.length>0' class="base-label" @click='labelClick'>
        {{label}}
        <span class="el-input__suffix"><span class="el-input__suffix-inner"><i class="el-select__caret el-input__icon el-icon-arrow-up" :class='{"is-reverse": showTextarea}'></i> </span></span>
      </label>
      <el-input ref='textarea' v-show='!isTab || showTextarea' class='base-textarea' type='textarea' v-bind='$attrs' :value='value' :rows='rows'  @change='onChange' @blur='onBlur'></el-input>
  </div>
</template>

<script>
  import {ElInput} from 'element-ui'

  export default {
    name: 'BTextarea',
    extends: ElInput,
    data () {
      return {
        showTextarea: false
      }
    },
    props: {
      label: {
        type: String,
        default: ''
      },
      isTab: {
        type: Boolean,
        default: true
      },
      rows: {
        type: Number,
        default: 5
      },
      value: ''
    },
    methods: {
      onBlur () {
        this.showTextarea = false
        this.$emit('blur')
      },
      onChange (val) {
        this.$emit('change', val)
      },
      labelClick () {
        if (!this.isTab) return
        this.showTextarea = !this.showTextarea
      }
    }
  }
</script>
