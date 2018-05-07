<template>
  <div>
      <el-select v-if='!multiple' v-model="currentValue" placeholder="请选择"  v-bind='$attrs'>
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          placeholder="请选择"
          >
        </el-option>
      </el-select>

      <el-select v-if='multiple'
        v-model="currentValue"
        multiple
        collapse-tags
        placeholder="请选择" v-bind='$attrs'>
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
      }
    },
    data () {
      return {
        currentValue: this.value
      }
    }
  }
</script>
