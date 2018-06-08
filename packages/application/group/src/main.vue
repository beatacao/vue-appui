<template>
    <div class='vu__application-group'>
        <el-checkbox-group v-if='itemType==="checkbox"' v-model="currentValue" @change='onChange'>
            <BCheckbox v-for='(item, index) in options' :key='index' :label='item.value'>
                {{item.label}}
            </BCheckbox>
        </el-checkbox-group>
        <el-radio-group v-else v-model="currentValue" @change='onChange'>
            <BRadio v-for='(item, index) in options' :key='index' :label='item.value'>
                {{item.label}}
            </BRadio>
        </el-radio-group>
    </div>
</template>

<script>
    import BCheckbox from '../../../base/checkbox/index'
    import BRadio from '../../../base/radio/index'
    export default {
        name: 'BGroup',
        data () {
            return {
                currentValue: []
            }
        },
        props: {
            itemType: {
                type: String,
                default: function () {
                    return 'checkbox'
                }
            },
            options: {
                type: Array,
                default: function () {
                    return []
                }
            },
            value: {
                type: Array | String,
                default: function () {
                    return []
                }
            }
        },
        components: {BCheckbox, BRadio},
        created () {
            this.currentValue = this.value
        },
        watch: {
            value (val, val1) {
                this.currentValue = val
            }
        },
        methods: {
            onChange (val) {
                this.$emit('change', val)
            }
        },
        mounted () {
            console.log('BAppSelectLine mounted!')
        }
    }
</script>
