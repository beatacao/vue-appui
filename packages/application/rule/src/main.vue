<template>
        <div :class='classObject'>
            <label v-if='widget.label && widget.label.length>0 && (widget.type !== "tabs")' class="base-label"><span v-if='required'>*</span>{{widget.label}}</label>
            <div class="base-component">
                <BInput v-if='widget.type === "input"' :placeholder='widget.placeholder' :value='widget.value'  :required='required' @change='inputChange'></BInput>
                <BTextarea v-if='widget.type === "input-multi"' :placeholder='widget.placeholder' :label='widget.label' :value='widget.value' :required='required' 
                    :reverse='widget.reverse === 0' @change='inputChange'></BTextarea>
                <BRegion v-if='widget.type === "region"' :itemType='widget.itemType' :options='ruleOptions' :value='widget.value' @change='regionChange' :required='required'></BRegion>
                <BSelect v-if='widget.type === "select"' :value='widget.value' :options='ruleOptions' :placeholder='widget.placeholder || widget.label' 
                    @visibleChange='visibleChange' @change='selectChange' @focus='selectFocus' :required='required'></BSelect>
                <BSelect v-if='widget.type === "select-multi" || widget.type === "select-ld-tree"' @focus='selectFocus' :custom='customOption' :placeholder='widget.placeholder || widget.label'  
                    @visibleChange='visibleChange' multiple :displayTags='false' :value='widget.value' :options='ruleOptions' 
                    :remote='widget.filterType === 1' @remoteMethod='remoteMethod' :required='required' @change='selectChange'></BSelect>
                <BGroup v-if='widget.type === "group"' :itemType='widget.itemType' :options='ruleOptions' :value='widget.value' :required='required'></BGroup>
                <BTabs v-if='widget.type === "tabs"' :label='widget.label' :options='ruleOptions' :value='widget.value' :required='required'></BTabs>
                <BCascaderMulti :id='id' :name='widget.name' v-if='widget.type === "select-ld"' :options='cascaderOptions' :value='widget.value' 
                    :displayTags='false' @focus='cascaderFocus' @change='cascaderChange' :required='required'></BCascaderMulti>
                <BRegionMulti v-if='widget.type === "region-multi"' :name='widget.name' :value='widget.value' :options='widget.options' :required='required' @change='regionMultiChange'></BRegionMulti>
            </div>
            <div class="base-tip" v-if='other.hasTip === 1 && other.tipContent.length>0'>
                <BTip :content='other.tipContent'></BTip>
            </div>
            
            <!-- <div class="base-validator">
                <BValidator v-if='widget.validator'></BValidator>
            </div> -->
        </div>
    </template>
    
    <script>
        export default {
            name: 'BAppRule',
            data () {
                return {}
            },
            props: {
                widget: {
                    type: Object,
                    default: function () {
                        return {}
                    }
                },
                datasource: {
                    type: Object,
                    default: function () {
                        return {}
                    }
                },
                other: {
                    type: Object,
                    default: function () {
                        return {}
    
                    }
                },
                id: {
                    type: Number,
                    default: ''
                }
            },
            watch:{
                widget(val){
                    // console.log(val)
                    // test modifier
                }
            },
            methods: {
                regionMultiChange(opt){
                    this.$emit('change', Object.assign(opt, {type: 'regionMultiChange', ruleId: this.id}))
                },
                regionChange(opt){
                    this.$emit('change', Object.assign(opt, {type: 'regionChange', ruleId: this.id}))
                },
                inputChange(val){
                    var opt
                    if(Object.prototype.toString.call(val).toLowerCase() !== '[object object]'){
                        opt = {value: val}
                    }else{
                        opt = val
                    }
                    this.$emit('change', Object.assign(opt, {type: 'inputChange', ruleId: this.id}))
                },
                selectChange(val){
                    var opt = {value: val}
                    this.$emit('change', Object.assign(opt, {type: 'selectChange', ruleId: this.id}))
                },
                cascaderFocus (opt) {
                    this.$emit('change', Object.assign(opt, {type: 'cascaderFocus', ruleId: this.id}))
                },
                cascaderChange (opt) {
                    this.$emit('change', Object.assign(opt, {type: 'cascaderChange', ruleId: this.id}))
                },
                visibleChange () {
                    this.$emit('change', Object.assign({isVisible: arguments[0]}, {type: 'selectVisibleChange', ruleId: this.id}))
                },
                selectFocus () {
                    this.$emit('change', Object.assign({isVisible: arguments[0]}, {type: 'selectFocus', ruleId: this.id}))
                },
                remoteMethod (val) {
                    this.$emit('change', Object.assign({type: 'remoteMethod', ruleId: this.id, keyword: val}))
                }
            },
            computed: {
                cascaderOptions(){
                    return [].concat(this.widget.options)
                },
                classObject() {
                    return {
                        "application-base-component": true,
                        ["application-base-" + this.widget.type]: true, 
                        'tipPreposition': (this.other.tipPostion === 1 && this.other.hasTip === 1)
                    }
                },
                ruleOptions(){
                    var type = this.datasource && this.datasource.type 
                    if(type === 'static-multi'){
                        return this.datasource.staticConfig
                    }
                    return this.widget.options
                },
                required(){
                    var validator = this.widget.validator || null
                    if(!validator) return false
                    var required = false
                    validator.forEach(function(v, i){
                        if(v.type === 'required'){
                            required = true
                        }
                    })
                    return required
                },
                customOption(){
                    var self = this
                    if(this.widget.hasCustom === 0){
                        var custom = {}
                        var val = this.widget.value
                        if(val && Object.prototype.toString.call(val).toLowerCase() == '[object array]'){
                            var optionsValues = this.ruleOptions.map(function(option, index){
                                return option.value
                            })
                            var customValue = val.filter(function(value, index){
                                return optionsValues.indexOf(value) === -1
                            })
                            if(customValue && customValue.length>0){
                                custom.customMin = customValue[0].split('#')[0]
                                custom.customMax = customValue[0].split('#')[1]
                            }
                        }
                        return Object.assign({}, custom, {
                            valueMin: self.widget.valueMin,
                            valueMax: self.widget.valueMax,
                            unit: self.widget.unit
                        })
                    }
                    return null
                }
            }
        }
    </script>
    
    <style lang='less'>
        .base-tip{
            display:inline-block; 
        }
        input[name="custom-min"], input[name="custom-max"]{
            width: 35%;
            height: 30px;
            line-height: 30px;
            margin: 10px;
        }
        .vu__base-select{
            &.selected{
                .el-input__inner{
                    border-color: #409EFF;
                }
                .el-icon-arrow-up:before{
                    color: #409EFF;
                }
                ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
                color: #409EFF;
                }
                ::-moz-placeholder { /* Firefox 19+ */
                color: #409EFF;
                }
                :-ms-input-placeholder { /* IE 10+ */
                color: #409EFF;
                }
                :-moz-placeholder { /* Firefox 18- */
                color: #409EFF;
                }
            }
            .requiredIcon{
                position:absolute; top:14px; left:10px; z-index:10; color: red;
            }
        }
    </style>
    