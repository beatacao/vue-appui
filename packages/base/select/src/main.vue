<template>
  <div class='vu__base-select' :class='{selected: selectedLength>0 || (currentValue && currentValue.length>0)}'>
    <el-b-select v-if='!multiple && !group' v-model="currentValue" :value='value' :placeholder="placeholder"  
      @focus='onFocus'
      @change='onChange'
      @visible-change='visibleChange'
      v-bind='$attrs'>
        <span slot='inputPrev' class='requiredIcon' v-if='required'>*</span>
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
        :remote='remote'
        :filterable='remote'
        @queryChange="queryChange"
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
        <span slot='inputPrev' class='requiredIcon' v-if='required'>*</span>
        <el-option
          v-for="item in options"
          :key="dataRename.value ? item[dataRename.value] : item.value"
          :label="dataRename.label ? item[dataRename.label] : item.label"
          :value="dataRename.value ? item[dataRename.value] : item.value">
          <span>{{dataRename.label ? item[dataRename.label] : item.label}}</span>
          <div class='child' v-if='item.childs && item.childs.length>0'>
            <el-option 
              v-for='citem in item.childs'
              :key="dataRename.value ? citem[dataRename.value] : citem.value"
              :label="dataRename.label ? citem[dataRename.label] : citem.label"
              :value="dataRename.value ? citem[dataRename.value] : citem.value">
                <span>{{dataRename.label ? citem[dataRename.label] : citem.label}}</span>
                <div class='gchild' v-if='citem.childs && citem.childs.length>0'>
                  <el-option 
                    v-for='gitem in citem.childs'
                    :key="dataRename.value ? gitem[dataRename.value] : gitem.value"
                    :label="dataRename.label ? gitem[dataRename.label] : gitem.label"
                    :value="dataRename.value ? gitem[dataRename.value] : gitem.value">
                  </el-option>
                </div>
            </el-option>
          </div>
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
        <span slot='inputPrev' class='requiredIcon' v-if='required'>*</span>
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
          :remote='remote'
          :filterable='remote'
          @queryChange="queryChange"
          v-model="currentValue"
          multiple
          @focus='onFocus'
          @change='onChange'
          @visible-change='visibleChange'
          :value='value'
          :placeholder="placeholder" 
          :displayTags='displayTags'
          collapse-tags v-bind='$attrs'>
          <span slot='inputPrev' class='requiredIcon' v-if='required'>*</span>
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
      },
      remote: {
        type: Boolean,
        default: false
      },
      required: {
        type: Boolean,
        default: false
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
        if (!val || val.length === 0) {
          this.selectedLength = 0
        }
      }
    },
    methods: {
      onFocus (e) {
        this.$emit('focus', e)
      },
      onChange (v) {
        var self = this
        this.selectedLength = v.length
        if (!this.custom || Object.keys(this.custom).length === 0 || (isNaN(parseInt(this.custom.customMin)) && isNaN(parseInt(this.custom.customMax)))) {
          if(v.length>0){
            var vals = v.filter(function(v){
              return self.options.some(function(o){
                return o.value === v
              })
            })
            this.$emit('change', vals || [])
          }
        }else{
          this.$emit('change', v)
        }
      },
      visibleChange (isVisible) {
        var self = this
        if (!isVisible) {
          if (this.custom && Object.keys(this.custom).length > 0 && !isNaN(parseInt(this.custom.customMin)) && !isNaN(parseInt(this.custom.customMax))) {
            this.$emit('change', [parseInt(this.custom.customMin)*parseFloat(this.custom.transform).toFixed(this.custom.dotNumber || 2) + '#' + parseInt(this.custom.customMax)*parseFloat(this.custom.transform).toFixed(this.custom.dotNumber || 2)])
          }else{
            if(this.value.length>0){
              var vals = this.value.filter(function(v){
                return self.options.some(function(o){
                  return o.value === v
                })
              })
              this.$emit('change', vals || [])
            }
          }
        }
        this.$emit('visibleChange', isVisible)
      },
      queryChange (val) {
        if (val && val.length > 0) {
          this.$emit('remoteMethod', val)
        }
      }
    }
  }
</script>
