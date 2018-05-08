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
                v-model="currentValue"
                type="daterange"
                :range-separator="split"
                :start-placeholder="options[0].placeholder"
                :end-placeholder="options[1].placeholder">
            </BDatepicker>
        </div>
    </div>
</template>

<script>
    import BDatepicker from '~packages/base/datepicker/index'
    import BInput from '~packages/base/input/index'

    export default {
        name: 'BRegion',
        data () {
            return {}
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
                    return []
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
            }
        },
        computed: {
            currentValue: {
                get: function () {
                    return this.value || []
                },
                set: function (val) {
                    this.$emit('onChange', val)
                }
            }
        },
        mounted () {
            console.log(`BRegion ${this.itemType} mounted!`)
        }
    }
</script>
