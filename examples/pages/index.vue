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
                        'tag': '单行输入框',
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
                        'tag': '多行输入框',
                        'validator': null,
                        'type': 'multi-input',
                        'name': 'multi-input',
                        'placeholder': '请输入内容',
                        'value': '',
                        'tip': '',
                        'unit': null,
                        'deps': null
                    },
                    {
                        'tag': '下拉单选框',
                        'validator': null,
                        'type': 'select',
                        'name': 'selct',
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
                        'tag': '下拉多选',
                        'validator': null,
                        'type': 'multi-select',
                        'name': 'multi-select',
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
                        'tag': '区间',
                        'validator': null,
                        'type': 'region',
                        'name': 'region',
                        'placeholder': '',
                        'split': '-',
                        'itemType': 'input',
                        'value': '',
                        'tip': '提示信息',
                        'unit': null,
                        'deps': null,
                        'items': [  
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
                        'label': '单行选择',
                        'type': 'line-select',
                        'name': 'line-select',
                        'itemType': 'checkbox',
                        'value': ['0'],
                        'items': [
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
                        'type': 'multi-tabs',
                        'tip': null,
                        'items': [
                            {
                                'label': '正向',
                                'validator': '',
                                'type': 'multi-input',
                                'placeholder': '一行一条，最多3000条',
                                'value': '',
                                'resizeable': false,
                                'name': 'sn1'
                            },
                            {
                                'label': '反向',
                                'validator': '',
                                'type': 'multi-input',
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
                        'type': 'ld-select',
                        'placeholder': '',
                        'value': '',
                        'name': 'ld-select',
                        'search': false,
                        'items': [] 
                    }
                ]
                return arr
            }
        }
    }
</script>

<style lang='less'>
</style>