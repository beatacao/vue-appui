<template>
    <div class='vueui__demo'>
        <div class='vueui__demo-panel'>
            <BAppBase :configArray='formatteData'></BAppBase>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        computed: {
            formatteData() {
                // 传递给base.vue 的初始数据，数据格式各个应用之间保持统一，每个应用需要转换格式
                // return this.$store.getters['formatData']
                var arr = [
                {
                        'label': '单行输入框',
                        'validator': null,
                        'type': 'input',
                        'name': 'input',
                        'placeholder': '请输入内容',
                        'value': '',
                        'tip': '提示信息',
                        'unit': null,
                        'deps': null
                    },
                    {
                        'label': '多行输入框',
                        'validator': null,
                        'type': 'input-multi',
                        'name': 'input-multi',
                        'placeholder': '请输入内容',
                        'value': '',
                        'tip': '',
                        'unit': null,
                        'deps': null
                    },
                    {
                        'label': '下拉单选框',
                        'validator': null,
                        'type': 'select',
                        'name': 'select',
                        'placeholder': '',
                        'value': '',
                        'tip': '',
                        'unit': null,
                        'deps': null,
                        'search': false,
                        'options': [
                            {
                                'label': '畅销款',
                                'value': '畅销款'
                            },
                            {
                                'label': '平销款',
                                'value': '平销款'
                            },
                            {
                                'label': '滞销款',
                                'value': '滞销款'
                            },
                            {
                                'label': '未知',
                                'value': '未知'
                            }
                        ]
                    },
                    {
                        'label': '下拉多选',
                        'validator': null,
                        'type': 'select-multi',
                        'name': 'select-multi',
                        'placeholder': '',
                        'value': '',
                        'tip': '',
                        'unit': null,
                        'deps': null,
                        'search': false,
                        'options': [
                            {
                                'label': '畅销款',
                                'value': '畅销款'
                            },
                            {
                                'label': '平销款',
                                'value': '平销款'
                            },
                            {
                                'label': '滞销款',
                                'value': '滞销款'
                            },
                            {
                                'label': '未知',
                                'value': '未知'
                            }
                        ],
                        'custom': null

                    },
                    {
                        'label': '区间',
                        'validator': null,
                        'type': 'region',
                        'name': 'region',
                        'placeholder': '',
                        'split': '-',
                        'itemType': 'input',
                        'value': [],
                        'tip': '提示信息',
                        'unit': null,
                        'deps': null,
                        'options': [  
                            {
                                'label': '',
                                'validator': null,
                                'placeholder': '≥0',
                                'value': '',
                                'name': 'stock_out_sku_rate_min',
                                'unit': ''
                            },
                            {
                                'label': '',
                                'validator': null,
                                'placeholder': '<1',
                                'value': '',
                                'name': 'stock_out_sku_rate_max',
                                'unit': ''
                            }
                        ]
                    },
                    {
                        'label': '区间-datepicker',
                        'validator': null,
                        'type': 'region',
                        'name': 'region',
                        'placeholder': '',
                        'split': '-',
                        'itemType': 'datepicker',
                        'value': [],
                        'tip': '提示信息',
                        'unit': null,
                        'deps': null,
                        'options': [  
                            {
                                'label': '',
                                'validator': null,
                                'placeholder': '',
                                'value': '',
                                'name': 'stock_out_sku_rate_min',
                                'unit': ''
                            },
                            {
                                'label': '',
                                'validator': null,
                                'placeholder': '',
                                'value': '',
                                'name': 'stock_out_sku_rate_max',
                                'unit': ''
                            }
                        ]
                    },
                    {
                        'label': '单行选择',
                        'type': 'group',
                        'name': 'group-checkbox',
                        'itemType': 'checkbox',
                        'value': ['0'],
                        'options': [
                            {
                                'label': '选择1',
                                'value': '0'
                            },
                            {
                                'label': '选择2',
                                'value': '1'
                            }
                        ]
                    },
                    {
                        'label': '多标签',
                        'type': 'tabs',
                        'tip': null,
                        'options': [
                            {
                                'label': '正向',
                                'validator': '',
                                'type': 'input-multi',
                                'placeholder': '一行一条，最多3000条',
                                'value': '',
                                'resizeable': false,
                                'name': 'sn1'
                            },
                            {
                                'label': '反向',
                                'validator': '',
                                'type': 'input-multi',
                                'placeholder': '一行一条，最多3000条',
                                'value': '',
                                'resizeable': false,
                                'name': 'sn2'
                            }
                        ]
                    },
                    {
                        'label': '多选下拉级联',
                        'validator': '',
                        'type': 'select-ld',
                        'placeholder': '',
                        'value': '',
                        'name': '',
                        'search': false,
                        'options': [
                            {
                                'label': '下拉多选1',
                                'validator': null,
                                'type': 'select-multi',
                                'name': 'select-multi1',
                                'placeholder': '下拉多选1',
                                'value': '',
                                'tip': '',
                                'unit': null,
                                'deps': null,
                                'search': false,
                                'options': [
                                    {
                                        'label': '畅销款',
                                        'value': '畅销款'
                                    },
                                    {
                                        'label': '平销款',
                                        'value': '平销款'
                                    },
                                    {
                                        'label': '滞销款',
                                        'value': '滞销款'
                                    },
                                    {
                                        'label': '未知',
                                        'value': '未知'
                                    }
                                ],
                                'custom': null
                            },
                            {
                                'label': '下拉多选2',
                                'validator': null,
                                'type': 'select-multi',
                                'name': 'select-multi1',
                                'placeholder': '下拉多选2',
                                'value': '',
                                'tip': '',
                                'unit': null,
                                'deps': null,
                                'search': false,
                                'options': [],
                                'custom': null
                            },
                            {
                                'label': '下拉多选3',
                                'validator': null,
                                'type': 'select-multi',
                                'name': 'select-multi1',
                                'placeholder': '下拉多选3',
                                'value': '',
                                'tip': '',
                                'unit': null,
                                'deps': null,
                                'search': false,
                                'options': [],
                                'custom': null
                            }
                        ] 
                    }
                ]
                return arr
            }
        }
    }
</script>

<style lang='less' type='text/less'>
.vueui__demo .base-component{
    display: inline-block; vertical-align: top; width:600px; text-align:left;
}
.base-label{
    display: inline-block; width:200px; text-align:right;
}
[class^=application-base]{
    margin-bottom: 20px;
}
</style>