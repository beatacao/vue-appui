<template>
    <div class='vu__application-base'>
        <div v-for='(item,index) in configArray' :key='index' :class='"application-base-" + item.type'>
            <div class="base-tag">
                <BTag v-if='item.tag && item.tag.length>0' :tag='item.tag'></BTag>
            </div>
            <div class="base-component">
                <BInput v-if='item.type === "input"' :placeholder='item.placeholder' disabled></BInput>
                <BTextarea v-if='item.type === "multi-input"' :placeholder='item.placeholder'></BTextarea>
                <BSelect v-if='item.type === "select"' :value='item.value' :options='item.options'></BSelect>
                <BSelect v-if='item.type === "multi-select"' multiple :value='item.value' :options='item.options'></BSelect>
                <!-- <BInput v-if='item.type === "region"'></BInput>
                <BInput v-if='item.type === "line-select"'></BInput>
                <BInput v-if='item.type === "multi-tags"'></BInput>
                <BInput v-if='item.type === "ld-select"'></BInput> -->
            </div>
            <div class="base-tip">
                <BTip v-if='item.tip && item.tip.length>0' :tip='item.tip'></BTip>
            </div>
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
