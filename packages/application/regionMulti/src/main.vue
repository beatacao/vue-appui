<template>
    <div class='vu__application-region-multi'>
        <BSelect :name='name' :value='value' :options='options' @change='onChange' placeholder=''></BSelect>
        <BDatepicker
            v-bind='$attrs'
            :value="current.value"
            type="datetimerange"
            :range-separator="split"
            :start-placeholder="current.startPlaceholder"
            :end-placeholder="current.endPlaceholder"
            @input='timeInput'>
        </BDatepicker>
    </div>
</template>

<script>
    import BDatepicker from '../../../base/datepicker/index'
    import BSelect from '../../../base/select/index'

    export default {
        name: 'BRegionMulti',
        data () {
            return {
                current: {
                    value: '',
                    startPlaceholder: '',
                    endPlaceholder: ''
                }
            }
        },
        components: {BSelect, BDatepicker},
        props: {
            name: {
                type: String,
                default: function () {
                    return ''
                }
            },
            value: {
                type: String | Number,
                default: function () {
                    return ''
                }
            },
            itemType: {
                type: String,
                default: 'time'
            },
            options: {
                type: Array,
                default: function () {
                    return []
                }
            },
            split: {
                type: String,
                default: function () {
                    return '-'
                }
            }
        },
        created () {
            var self = this
            var current
            this.options.forEach(function (v, i) {
                if (v.value === self.value) {
                    var value = ''
                    if (v.options && v.options[0].value.length > 0 && v.options[1].value.length > 0) {
                        value = [v.options[0].value, v.options[1].value]
                    }
                    current = {
                        'value': value,
                        'startPlaceholder': v.options ? v.options[0].placeholder : '',
                        'endPlaceholder': v.options ? v.options[1].placeholder : ''
                    }
                }
            })
            this.current = current
        },
        methods: {
            onChange (val) {
                var current
                this.options.forEach(function (v, i) {
                    if (v.value === val) {
                        var value = ''
                        if (v.options && v.options[0].value.length > 0 && v.options[1].value.length > 0) {
                            value = [v.options[0].value, v.options[1].value]
                        }
                        current = {
                            'value': value,
                            'startPlaceholder': v.options ? v.options[0].placeholder : '',
                            'endPlaceholder': v.options ? v.options[1].placeholder : ''
                        }
                    }
                })
                this.current = Object.assign({}, current)
                this.$emit('change', {value: val, name: 'type'})
            },
            timeInput (val) {
                this.current = Object.assign(this.current, {
                    value: val
                })
                this.$emit('change', {value: val, name: 'time'})
            }
        },
        mounted () {
            console.log(`BRegionMulti mounted!`)
        }
    }
</script>
