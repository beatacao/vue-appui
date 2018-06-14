<template>
  <div class='vu__base-select' :class='{selected: selectedLength>0 || currentValue.length>0}'>
    <el-b-select v-if='!multiple && !group' v-model="currentValue" :value='value' :placeholder="placeholder"  
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
        <slot name='custom'>
            <div v-if='custom &&  Object.keys(custom).length>0'>
                <input type="text" name="custom-min" :min="custom.valueMin" v-model='custom.customMin'>{{custom.unit||""}} - <input type="text" name="custom-max"  :max="custom.valueMax" v-model='custom.customMax'>{{custom.unit||""}}
            </div>
        </slot>
      </el-b-select>
      <el-b-select v-if='multiple && !group'
        ref='select'
        v-model="currentValue"
        multiple
        @focus='onFocus'
        @change='onChange'
        @visible-change='visibleChange'
        :value='value'
        :placeholder="placeholder" 
        :displayTags='displayTags'
        collapse-tags v-bind='$attrs'>
        <el-option
          v-for="item in options"
          :key="dataRename.value ? item[dataRename.value] : item.value"
          :label="dataRename.label ? item[dataRename.label] : item.label"
          :value="dataRename.value ? item[dataRename.value] : item.value">
        </el-option>
        <slot name='custom'>
            <div v-if='custom &&  Object.keys(custom).length>0'>
                <input type="text" name="custom-min" :min="custom.valueMin" v-model='custom.customMin'>{{custom.unit||""}} - <input type="text" name="custom-max"  :max="custom.valueMax" v-model='custom.customMax'>{{custom.unit||""}}
            </div>
        </slot>
      </el-b-select>
      <el-b-select v-if='!multiple && group' v-model="currentValue" :value='value' :placeholder="placeholder"  
        @focus='onFocus'
        @change='onChange'
        @visible-change='visibleChange'
        v-bind='$attrs'>
        <el-option-group 
          v-for="group in options"
          :key="group.label"
          :label="group.label">
          <el-option
            v-for="item in group.options"
            :key="dataRename.value ? item[dataRename.value] : item.value"
            :label="dataRename.label ? item[dataRename.label] : item.label"
            :value="dataRename.value ? item[dataRename.value] : item.value">
          </el-option>
        </el-option-group>
        <slot name='custom'>
            <div v-if='custom &&  Object.keys(custom).length>0'>
                <input type="text" name="custom-min" :min="custom.valueMin" v-model='custom.customMin'>{{custom.unit||""}} - <input type="text" name="custom-max"  :max="custom.valueMax" v-model='custom.customMax'>{{custom.unit||""}}
            </div>
        </slot>
        </el-b-select>
        <el-b-select v-if='multiple && group'
          v-model="currentValue"
          multiple
          @focus='onFocus'
          @change='onChange'
          @visible-change='visibleChange'
          :value='value'
          :placeholder="placeholder" 
          :displayTags='displayTags'
          collapse-tags v-bind='$attrs'>
          <el-option-group 
            v-for="group in options"
            :key="group.label"
            :label="group.label">
            <el-option
              v-for="item in group.options"
              :key="dataRename.value ? item[dataRename.value] : item.value"
              :label="dataRename.label ? item[dataRename.label] : item.label"
              :value="dataRename.value ? item[dataRename.value] : item.value">
            </el-option>
          </el-option-group>
          <slot name='custom'>
            <div v-if='custom &&  Object.keys(custom).length>0'>
                <input type="text" name="custom-min" :min="custom.valueMin" v-model='custom.customMin'>{{custom.unit||""}} - <input type="text" name="custom-max"  :max="custom.valueMax" v-model='custom.customMax'>{{custom.unit||""}}
            </div>
          </slot>
        </el-b-select>
  </div>
</template>

<script>
  import ElBSelect from './elselect/select.vue'

  export default {
    name: 'BSelect',
    extends: ElBSelect,
    components: {ElBSelect},
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
      },
      group: {
        type: Boolean,
        default: false
      },
      displayTags: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        currentValue: this.value || '',
        selectedLength: 0
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
        this.selectedLength = v.length
        this.$emit('change', v)
      },
      visibleChange (isVisible) {
        if (!isVisible) {
          if (this.custom && Object.keys(this.custom).length > 0 && !isNaN(parseInt(this.custom.valueMin)) && !isNaN(parseInt(this.custom.valueMax))) {
            this.$emit('change', parseInt(this.custom.valueMin) + '#' + parseInt(this.custom.valueMax))
          }
        }
        this.$emit('visibleChange', isVisible)
      }
    }
  }
</script>
