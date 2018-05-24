<template>
    <div class='vu__application-region'>
        <div v-if='itemType === "input"'>
            <div class='wrapper' v-for='(item, index) in options' :key='index' >
                <BInput 
                    v-bind='$attrs'
                    :placeholder='item.placeholder' 
                    :value='item.value' 
                    :name='item.name'>
                </BInput>
                <span v-if='index < (options.length-1)'>{{split}}</span>
            </div>
        </div>
        <div v-else>
            <BDatepicker
                v-bind='$attrs'
                :value="currentValue"
                type="daterange"
                :range-separator="split"
                :start-placeholder="options[0].placeholder"
                :end-placeholder="options[1].placeholder"
                @input='timeInput'
                :name='name'>
            </BDatepicker>
        </div>
    </div>
</template>

<script>
    import BDatepicker from '../../../base/datepicker/index'
    import BInput from '../../../base/input/index'

    export default {
        name: 'BRegion',
        data () {
            return {
                currentValue: ''
            }
        },
        extends: BDatepicker,
        components: {BInput},
        props: {
            itemType: {
                type: String,
                default: 'input'
            },
            options: {
                type: Array,
                default: function () {
                    return [
                        {
                            label: '',
                            placeholder: ''
                        },
                        {
                            label: '',
                            placeholder: ''
                        }
                    ]
                }
            },
            value: {
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
            },
            name: {
                type: String,
                default: ''
            }
        },
        created () {
            this.currentValue = this.value
        },
        methods: {
            timeInput (val) {
                this.currentValue = val
            }
        },
        mounted () {
            console.log(`BRegion ${this.itemType} mounted!`)
        }
    }
</script>
