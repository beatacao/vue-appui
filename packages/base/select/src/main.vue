<template>
  <div class='vu__base-select'>
    <el-select v-if='!multiple' v-model="currentValue" :value='value' :placeholder="placeholder"  
      @focus='onFocus'
      @change='onChange'
      @visible-change='visibleChange'
      v-bind='$attrs'>
        <el-option
          v-for="item in options"
          :key="dataRename.value ? item[dataRename.value] : item.value"
          :label="dataRename.label ? item[dataRename.label] : item.label"
          :value="dataRename.value ? item[dataRename.value] : item.value"
          >
        </el-option>
      </el-select>
      <el-select v-if='multiple'
        v-model="currentValue"
        multiple
        @focus='onFocus'
        @change='onChange'
        @visible-change='visibleChange'
        :value='value'
        :placeholder="placeholder" 
        collapse-tags v-bind='$attrs'>
        <el-option
          v-for="item in options"
          :key="dataRename.value ? item[dataRename.value] : item.value"
          :label="dataRename.label ? item[dataRename.label] : item.label"
          :value="dataRename.value ? item[dataRename.value] : item.value">
        </el-option>
        <slot name='custom'>
          <div v-if='custom && custom.template' v-html='custom.template'></div>
        </slot>
      </el-select>
  </div>
</template>

<script>
  import {ElSelect} from 'element-ui'

  export default {
    name: 'BSelect',
    extends: ElSelect,
    props: {
      value: {
        default: ''
      },
      options: {
        type: Array,
        default: function () {
          return []
        }
      },
      multiple: {
        type: Boolean,
        default: false
      },
      placeholder: {
        type: String,
        default: '请选择'
      },
      custom: {
        default: null
      },
      dataRename: {
        type: Object,
        default: function () {
          return {}
        }
      }
    },
    data () {
      return {
        currentValue: this.value
      }
    },
    watch: {
      value (val) {
        this.currentValue = val
      }
    },
    methods: {
      onFocus (e) {
        this.$emit('focus', e)
      },
      onChange (v) {
        this.$emit('change', v)
      },
      visibleChange (isVisible) {
        this.$emit('visibleChange', isVisible)
      }
    }
  }
</script>
