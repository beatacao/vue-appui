<template>
    <div class='vu__application-base-manager'>
        <div v-for='(item,index) in configArray' :key='index' :class='"application-base-" + item.type'>
            <label v-if='item.label && item.label.length>0 && (item.type !== "tabs")' class="base-label">{{item.label}}</label>
            <div class="base-component">
                <BInput v-if='item.type === "input"' :placeholder='item.placeholder'></BInput>
                <BTextarea v-if='item.type === "input-multi"' :placeholder='item.placeholder'></BTextarea>
                <BRegion v-if='item.type === "region"' :itemType='item.itemType' :options='item.options'></BRegion>
                <BSelect v-if='item.type === "select"' :value='item.value' :options='item.options'></BSelect>
                <BSelect v-if='item.type === "select-multi"' :custom='item.custom'  @visibleChange='visibleChange(arguments[0], index)' multiple :value='item.value' :options='item.options'></BSelect>
                <BGroup v-if='item.type === "group"' :itemType='item.itemType' :options='item.options' :value='item.value'></BGroup>
                <BTabs v-if='item.type === "tabs"' :options='item.options' :label='item.label'></BTabs>
                <BCascaderMulti :name='item.name' v-if='item.type === "select-ld"' :options='item.options' @focus='cascaderFocus(arguments[0], index)' @change='cascaderChange(arguments[0], index)'></BCascaderMulti>
                <BRegionMulti v-if='item.type === "region-multi"' :name='item.name' :value='item.value' :options='item.options'></BRegionMulti>
            </div>
            <div class="base-tip" v-if='item.tip && item.tip.content.length>0'>
                <BTip :content='item.tip.content'></BTip>
            </div>
            <span class='el-icon-edit b-icon' @click='edit(index)' title='编辑'></span>
            <span class='el-icon-close b-icon' @click='del(index)' title='删除'></span>
            <!-- <div class="base-validator">
                <BValidator v-if='item.validator'></BValidator>
            </div> -->
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BAppBaseMng',
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
            cascaderFocus (opt, index) {
                this.$emit('change', Object.assign(opt, {type: 'cascaderFocus', rIndex: index}))
            },
            cascaderChange (opt, index) {
                this.$emit('change', Object.assign(opt, {type: 'cascaderChange', rIndex: index}))
            },
            visibleChange (isVisible, index) {
                this.$emit('change', Object.assign({isVisible: isVisible}, {type: 'selectVisibleChange', rIndex: index}))
            },
            edit (index) {
                this.$emit('change', {type: 'widgetEdit', rIndex: index})
            },
            del (index) {
                this.$emit('change', {type: 'widgetDel', rIndex: index})
            }
        },
        mounted () {
            console.log('BAppBase mounted!')
            console.log(this.configArray)
        }
    }
</script>

<style lang='less'>
    .vu__application-base-manager{
        margin-top: 30px;
        border-top: 1px solid #ccc;
        padding-top: 10px;
        .base-tip{
            display:inline-block; 
        }
        [class^=application-base]{
            position:relative;
            margin-bottom: 10px;
            width: 50%;
            overflow: hidden;
            display: inline-block;
            border-bottom: 1px solid #ccc;
            padding: 10px;
            height: 80px;
            &:nth-child(2n+1){
                border-right: 1px solid #ccc;
            }
            .base-label, .base-component{
                display:inline-block;
            }
            .base-label{
                width:100px; text-align:right;
            }
            .b-icon{
                position:absolute; top:0; right:10px; font-size:18px; cursor:pointer; color: #ccc;
                &:hover{
                    color: #3FAAF5;
                }
            }
            .b-icon.el-icon-edit{
                margin-right:35px;
            }
        }
    }
</style>
