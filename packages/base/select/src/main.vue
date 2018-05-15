<template>
  <div class='vu__base-select'>
    <el-select v-if='!multiple' v-model="currentValue" :value='value' placeholder="请选择"  
      @focus='onFocus'
      @change='onChange'
      v-bind='$attrs'>
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          >
        </el-option>
      </el-select>
      <el-select v-if='multiple'
        v-model="currentValue"
        multiple
        @focus='onFocus'
        @change='onChange'
        :value='value'
        collapse-tags v-bind='$attrs'>
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
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
      }
    }
  }
</script>
