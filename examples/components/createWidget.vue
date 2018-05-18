<template>
        <div id='createWidget'>
            <el-button type="primary" @click='dialogVisible = true'>添加控件</el-button>
    
            <el-dialog
            title="添加控件"
            :visible.sync="dialogVisible"
            width="30%">
                <el-form v-model='form'>
                    <el-form-item label="控件类型">
                        <BSelect name='componentType' v-model='form.componentType' @change='onTypeChange' :options='options'></BSelect>
                    </el-form-item>
                    <el-form-item v-show='form.componentType' v-for='(p, index) in componentProps' :key='index' :label='p.label'>
                        <BInput :placeholder='p.placeholder' :name='p.name' :value='p.value' @change='onPropChange(arguments[0], index)'></BInput>
                    </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="addComponent">确 定</el-button>
                </span>
            </el-dialog>
    
        </div>
    </template>
          
    <script>
    
    export default {
        data () {
            return {
                dialogVisible: false,
                form: {
                    componentType: null
                },
                componentProps: [
                    {
                        label: '控件名称',
                        name: 'label',
                        type: 'input',
                        value: ''
                    },
                    {
                        label: 'placeholder',
                        name: 'placeholder',
                        type: 'input',
                        value: ''
                    }
                ],
                options: [
                    {
                        label: '单行输入框',
                        value: 'input'
                    },
                    {
                        label: '多行输入框',
                        value: 'input-multi'
                    },
                    {
                        label: '下拉单选框',
                        value: 'select',
                    },
                    {
                        label: '下拉多选框',
                        value: 'select-multi'
                    },
                    {
                        label: '输入区间值',
                        value: 'region#input',
                        props: [{
                            label: '控件名称',
                            name: 'label',
                            type: 'input',
                            value: ''
                        },
                        {
                            label: 'start-placeholder',
                            name: 'start-placeholder',
                            type: 'input',
                            value: ''
                        },
                        {
                            label: 'end-placeholder',
                            name: 'end-placeholder',
                            type: 'input',
                            value: ''
                        }]
                    },
                    {
                        label: '时间段区间',
                        value: 'region#datepicker',
                        props: [{
                            label: '控件名称',
                            name: 'label',
                            type: 'input',
                            value: ''
                        },
                        {
                            label: 'start-placeholder',
                            name: 'start-placeholder',
                            type: 'input',
                            value: ''
                        },
                        {
                            label: 'end-placeholder',
                            name: 'end-placeholder',
                            type: 'input',
                            value: ''
                        }]
                    },
                    {
                        label: '单选框radio组',
                        value: 'group#radio'
                    },
                    {
                        label: '多选框checkbox组',
                        value: 'group#checkbox'
                    },
                    {
                        label: '标签切换多行文本',
                        value: 'tabs'
                    },
                    {
                        label: '多级联动组件',
                        value: 'select-ld'
                    },
                    {
                        label: '售卖时间类组件',
                        value: 'region-multi'
                    }
                ]
            }
        },
        methods:{
            onTypeChange (val) {
                var self = this
                this.options.forEach(function(o, i){
                    if(o.value === val){
                        if(o.props && o.props.length>0){
                            self.componentProps = [].concat(o.props)
                        }else{
                            self.componentProps = [].concat([
                                {
                                    label: '控件名称',
                                    name: 'label',
                                    type: 'input',
                                    value: ''
                                },
                                {
                                    label: 'placeholder',
                                    name: 'placeholder',
                                    type: 'input',
                                    value: ''
                                }
                            ])
                        }
                    }
                    
                })
                this.form = Object.assign(this.form, {
                    componentType: val
                })
            },
            onPropChange (val, index) {
                this.componentProps[index].value = val
            },
            addComponent () {
                var type = this.form.componentType.split('#')
                var params = {
                    type: type[0],
                    itemType: type.length>1 ? type[1] : ''
                }
                this.componentProps.forEach(function(p, i){
                    params[p.name] = p.value
                })
                this.$emit('addWidget', params)
                this.dialogVisible = false
            }
        }
    }
    </script>
          
    <style lang='less'>
    #createWidget {
        .el-form-item__label{
           width:30%;
        }
        .el-form-item__content{
            display:inline-block;
        }
    }
    </style>