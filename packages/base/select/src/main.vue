<template>
  <div class='vu__base-select' :class='{selected: selectedLength>0 || (currentValue && currentValue.length>0), filterable: customFilterable}'>
    <el-b-select v-if='!multiple && !group' v-model="currentValue" :value='value' :placeholder="placeholder"  :loading='loading' :loadingText='loadingText' :noMatchText='noMatchText'
      @focus='onFocus'
      @change='onChange'
      @blur='onBlur'
      ref='select'
      @visible-change='visibleChange'
      :customFilterable='customFilterable'
      :filterPlaceholder = 'filterPlaceholder'
      v-bind='$attrs'>
        <span slot='inputPrev' class='requiredIcon' v-if='required'>*</span>
        <el-b-option
          ref='el-b-option'
          v-for="item in options"
          :key="dataRename.value ? item[dataRename.value] : item.value"
          :label="dataRename.label ? item[dataRename.label] : item.label"
          :value="dataRename.value ? item[dataRename.value] : item.value"
          >
        </el-b-option>
        <slot name='custom'>
            <div v-if='custom &&  Object.keys(custom).length>0'>
                <input type="text" name="custom-min" :min="custom.valueMin" v-model='custom.customMin'>{{custom.unit||""}} - <input type="text" name="custom-max"  :max="custom.valueMax" v-model='custom.customMax'>{{custom.unit||""}}
            </div>
        </slot>
      </el-b-select>
      <el-b-select v-if='multiple && !group'  :loading='loading' :loadingText='loadingText' :noMatchText='noMatchText'
        :remote='remote'
        :filterable='remote'
        @queryChange="queryChange"
        ref='select'
        v-model="currentValue"
        multiple
        @focus='onFocus'
        @change='onChange'
        @blur='onBlur'
        @visible-change='visibleChange'
        :value='value'
        :placeholder="placeholder" 
        :displayTags='displayTags'
        :customFilterable='customFilterable'
        :filterPlaceholder = 'filterPlaceholder'
        collapse-tags v-bind='$attrs'>
        <span slot='inputPrev' class='requiredIcon' v-if='required'>*</span>
        <li :class="{'el-select-dropdown__item': true, 'allOption': true, selected: isAll, 'custom-filterable': customFilterable}" v-if='options && options.length>0'>
          <span @click='selectAll' class='selectAll'>全选<i>（{{displayOptions.length}}）</i></span> 
          <span class='filterSelected' @click='filterSelected' v-show='customFilterable'>
              <template v-if='!filterSelectedStatus'>
                查看已选（{{value.length}}）
              </template>
              <template v-if='filterSelectedStatus'>
                  返回&nbsp;&nbsp;
              </template>
          </span>
        </li>
        <el-b-option  
          ref='el-b-option'
          v-for="item in options"
          :key="dataRename.value ? item[dataRename.value] : item.value"
          :label="dataRename.label ? item[dataRename.label] : item.label"
          :value="dataRename.value ? item[dataRename.value] : item.value">
          <span>{{dataRename.label ? item[dataRename.label] : item.label}}</span>
          <div class='child' v-if='item.childs && item.childs.length>0'>
            <el-b-option 
              ref='el-b-option'
              v-for='citem in item.childs'
              :key="dataRename.value ? citem[dataRename.value] : citem.value"
              :label="dataRename.label ? citem[dataRename.label] : citem.label"
              :value="dataRename.value ? citem[dataRename.value] : citem.value">
                <span>{{dataRename.label ? citem[dataRename.label] : citem.label}}</span>
                <div class='gchild' v-if='citem.childs && citem.childs.length>0'>
                  <el-b-option 
                    v-for='gitem in citem.childs'
                    :key="dataRename.value ? gitem[dataRename.value] : gitem.value"
                    :label="dataRename.label ? gitem[dataRename.label] : gitem.label"
                    :value="dataRename.value ? gitem[dataRename.value] : gitem.value">
                  </el-b-option>
                </div>
            </el-b-option>
          </div>
        </el-b-option>
        <slot name='custom'>
            <div v-if='custom &&  Object.keys(custom).length>0'>
                <input type="text" name="custom-min" :min="custom.valueMin" v-model='custom.customMin'>{{custom.unit||""}} - <input type="text" name="custom-max"  :max="custom.valueMax" v-model='custom.customMax'>{{custom.unit||""}}
            </div>
        </slot>
      </el-b-select>
      <el-b-select v-if='!multiple && group' v-model="currentValue" :value='value' :placeholder="placeholder"  :loading='loading' :loadingText='loadingText' :noMatchText='noMatchText'
        @focus='onFocus'
        @change='onChange'
        @visible-change='visibleChange'
        @blur='onBlur'
        :customFilterable='customFilterable'
        :filterPlaceholder = 'filterPlaceholder'
        ref='select'
        v-bind='$attrs'>
        <span slot='inputPrev' class='requiredIcon' v-if='required'>*</span>
        <el-option-group 
          v-for="group in options"
          :key="group.label"
          :label="group.label">
          <el-b-option
            ref='el-b-option'
            v-for="item in group.options"
            :key="dataRename.value ? item[dataRename.value] : item.value"
            :label="dataRename.label ? item[dataRename.label] : item.label"
            :value="dataRename.value ? item[dataRename.value] : item.value">
          </el-b-option>
        </el-option-group>
        <slot name='custom'>
            <div v-if='custom &&  Object.keys(custom).length>0'>
                <input type="text" name="custom-min" :min="custom.valueMin" v-model='custom.customMin'>{{custom.unit||""}} - <input type="text" name="custom-max"  :max="custom.valueMax" v-model='custom.customMax'>{{custom.unit||""}}
            </div>
        </slot>
        </el-b-select>
        <el-b-select v-if='multiple && group'  :loading='loading' :loadingText='loadingText' :noMatchText='noMatchText'
          :remote='remote'
          :filterable='remote'
          @queryChange="queryChange"
          v-model="currentValue"
          multiple
          @focus='onFocus'
          @change='onChange'
          @visible-change='visibleChange'
          :value='value'
          ref='select'
          :placeholder="placeholder" 
          :displayTags='displayTags'
          :customFilterable='customFilterable'
          :filterPlaceholder = 'filterPlaceholder'
          collapse-tags v-bind='$attrs'>
          <span slot='inputPrev' class='requiredIcon' v-if='required'>*</span>
          <li :class="{'el-select-dropdown__item': true, 'allOption': true, selected: isAll, 'custom-filterable': customFilterable}" v-if='options && options.length>0'>
            <span @click='selectAll' class='selectAll'>全选<i>（{{displayOptions.length}}）</i></span> 
            <span class='filterSelected' @click='filterSelected' v-show='customFilterable'>
              <template v-if='!filterSelectedStatus'>
              查看已选（{{value.length}}）
              </template>
              <template v-if='filterSelectedStatus'>
                  返回&nbsp;&nbsp;
              </template>
            </span>
          </li>
          <el-option-group 
            v-for="group in options"
            :key="group.label"
            :label="group.label">
            <el-b-option
              ref='el-b-option'
              v-for="item in group.options"
              :key="dataRename.value ? item[dataRename.value] : item.value"
              :label="dataRename.label ? item[dataRename.label] : item.label"
              :value="dataRename.value ? item[dataRename.value] : item.value">
            </el-b-option>
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
  import ElBOption from './elselect/option.vue'

  export default {
    name: 'BSelect',
    extends: ElBSelect,
    components: {ElBSelect, ElBOption},
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
      },
      loading: {
        default: false
      },
      loadingText: {
        default: '无数据'
      },
      noMatchText: {
        default: '无匹配的数据'
      },
      customFilterable: {
        default: false
      },
      filterPlaceholder: {
        default: '输入关键字'
      }
    },
    data () {
      return {
        currentValue: this.value || '',
        selectedLength: 0,
        filterSelectedStatus: false,
        displayOptions: this.options || [],
        domChanging: false
      }
    },
    computed: {
      isAll: {
        get: function(){
          var self = this
          var vals = self.value || []
          var displayOptions =  this.options.filter(function(option){
            return !option.isFiltered
          })
          var isAll
          if(displayOptions && displayOptions.length>0){
            isAll = displayOptions.every(function(option){
              return vals.indexOf(option.value) > -1
            })
          }else{
            isAll = false
          }
          return isAll
        },
        set: function(v){
          var vals = []
          var alls = []
          this.options.forEach(function(option){
            if(!option.isFiltered && option.value){
              alls.push(option.value)
            }
          })
          if(v){
            vals = [...new Set(alls.concat(this.value))]
          }else{
            vals = this.value.filter(function(v){
              return alls.indexOf(v) === -1
            })
          }
          this.$emit('domChange', {length: vals.length, isIng: true})
          this.$emit('change', vals)
        }
      }
    },
    watch: {
      value (val) {
        var self = this
        this.currentValue = val
        if (!val || val.length === 0) {
          this.selectedLength = 0
        }
        this.$emit('domChange', {length: val.length, isIng: false})
      },
      options (options) {
        this.displayOptions = options.filter(function(option){
          return !option.isFiltered
        })
      }
    },
    methods: {
      selectAll(e){
        this.isAll = !this.isAll
        
      },
      onFocus (e) {
        var self = this
        if(this.customFilterable){
          this.$refs['el-b-option'].forEach(function($option){
            $option.queryChange(self.query)
          })
        }
        
        this.$emit('focus', e)
      },
      onBlur (e) {
        this.$emit('blur', e)
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
            return
          }
        }
        this.$emit('change', v)
      },
      visibleChange (isVisible) {
        var self = this
        this.visible = isVisible
        if (!isVisible) {
          if (this.custom && Object.keys(this.custom).length > 0 && !isNaN(parseInt(this.custom.customMin)) && !isNaN(parseInt(this.custom.customMax))) {
            this.$emit('change', [
                parseFloat(this.custom.customMin)*parseFloat(this.custom.transform).toFixed(isNaN(parseInt(this.custom.dotNumber, 10)) ? 2 : parseInt(this.custom.dotNumber, 10)) + '#' + 
                parseFloat(this.custom.customMax)*parseFloat(this.custom.transform).toFixed(isNaN(parseInt(this.custom.dotNumber, 10)) ? 2 : parseInt(this.custom.dotNumber, 10))])
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
        this.$emit('visibleChange', {isVisible: isVisible, query: this.query})
      },
      queryChange (val) {
        this.query = val
        if(this.customFilterable){
          this.$emit('filterMethod', val)
          return 
        }else if(this.remote){
          this.$emit('remoteMethod', val)
          return 
        }
        this.$emit('queryChange', val)
      },
      filterSelected () {
        var self = this
        if(this.customFilterable){
          if(!this.filterSelectedStatus){
            this.$refs['el-b-option'].forEach(function($option){
              if(self.value.indexOf($option.value) > -1){
                $option.queryChange('')
              }else{
                $option.queryChange($option.label+'noMatch')
              }
            })
            this.$emit('filterSelected')
          }else{
            this.$refs['el-b-option'].forEach(function($option){
              $option.queryChange(self.query)
            })
            this.$emit('filterMethod', self.query)
          }
        }
        this.filterSelectedStatus = !this.filterSelectedStatus
      }
    }
  }
</script>
