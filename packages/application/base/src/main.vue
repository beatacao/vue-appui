<template>
    <div class='vu__application-base'>
        <div v-for='(item,index) in configArray' :key='index' :class='"application-base-" + item.type'>
            <label v-if='item.label && item.label.length>0' class="base-label">{{item.label}}</label>
            <div class="base-component">
                <BInput v-if='item.type === "input"' :placeholder='item.placeholder'></BInput>
                <BTextarea v-if='item.type === "input-multi"' :placeholder='item.placeholder'></BTextarea>
                <BRegion v-if='item.type === "region"' :itemType='item.itemType' :options='item.options'></BRegion>
                <BSelect v-if='item.type === "select"' :value='item.value' :options='item.options'></BSelect>
                <BSelect v-if='item.type === "select-multi"' multiple :value='item.value' :options='item.options'></BSelect>
                <BGroup v-if='item.type === "group"' :itemType='item.itemType' :options='item.options' :value='item.value'></BGroup>
                <BTabs v-if='item.type === "tabs"' :options='item.options'></BTabs>
                <BCascaderMulti v-if='item.type === "select-ld"' :options='item.options'></BCascaderMulti>
            </div>
            <!-- <div class="base-tip">
                <BTip v-if='item.tip && item.tip.length>0' :tip='item.tip'></BTip>
            </div> -->
            <!-- <div class="base-validator">
                <BValidator v-if='item.validator'></BValidator>
            </div> -->
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BAppBase',
        data () {
            return {}
        },
        props: {
            configArray: {
                type: Array,
                default: function () {
                    return []
                }
            }
        },
        methods: {
            onChange (e, opt) {
                this.$emit('onChange', opt)
            }
        },
        mounted () {
            console.log('BAppBase mounted!')
            console.log(this.configArray)
        }
    }
</script>
