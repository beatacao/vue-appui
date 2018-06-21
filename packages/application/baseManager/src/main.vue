<template>
    <div class='vu__application-base-manager'>
        <div v-for='(item,index) in configArray' :key='index' :class='"application-base-" + item.type'>
            <label v-if='item.markname && item.markname.length>0' class="base-label">{{item.markname}}</label>
            <div class="base-component">
                <BInput v-if='item.type === "input"' :placeholder='item.placeholder' :name='item.name'></BInput>
                <BTextarea v-if='item.type === "input-multi"' :placeholder='item.placeholder' :name='item.name' :label='item.label'></BTextarea>
                <BRegion v-if='item.type === "region"' :itemType='item.itemType' :options='item.options'></BRegion>
                <BSelect v-if='item.type === "select" || item.type === "select-ld-tree"' :custom='item.custom' :value='item.value' :options='item.options' 
                    :displayTags='false' :name='item.name' :placeholder='item.placeholder||item.label'></BSelect>
                <BSelect v-if='item.type === "select-multi"' :custom='item.custom'  @visibleChange='visibleChange(arguments[0], index)' 
                    multiple :value='item.value' :options='item.options' :name='item.name' :displayTags='false' :remote='item.isSearch === 0' :placeholder='item.placeholder||item.label'></BSelect>
                <BGroup v-if='item.type === "group"' :itemType='item.itemType' :options='item.options' :value='item.value'></BGroup>
                <BTabs v-if='item.type === "tabs"' :options='item.options' :label='item.label' :name='item.name'></BTabs>
                <BCascaderMulti :name='item.name' v-if='item.type === "select-ld"' :options='item.options' @focus='cascaderFocus(arguments[0], index)' :displayTags='false' @change='cascaderChange(arguments[0], index)'></BCascaderMulti>
                <BRegionMulti v-if='item.type === "region-multi"' :name='item.name' :value='item.value' :options='item.options'></BRegionMulti>
            </div>
            <div class="base-tip" v-if='item.hasTip && item.tipContent.length>0'>
                <BTip :content='item.tipContent'></BTip>
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
            &.application-base-input-multi{
                position:relative;
                .vu__base-textarea.tab{
                    position:relative; margin-left:100px;
                    &.hasvalue{
                        &>.base-label{
                            border-color: #409EFF; color:#409EFF;
                        }
                    }
                    &>.base-label{
                        display:inline-block; width:auto; 
                        padding: 0 20px;
                        border: 1px solid #dcdfe6;
                        border-radius: 4px;
                        height: 40px;
                        line-height: 40px;
                        padding-right:40px; color: #606266;
                    }
                    .base-textarea{
                        position: absolute; top:40px; left:0; z-index: 1001;
                        border: 1px solid #e4e7ed;
                        border-radius: 4px;
                        background-color: #fff;
                        -webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
                        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
                        -webkit-box-sizing: border-box;
                        box-sizing: border-box;
                        margin: 5px 0;  padding: 10px 15px;  min-width: 300px;
                    }
                    .el-select__caret {
                        color: #c0c4cc;
                        font-size: 14px;
                        -webkit-transition: -webkit-transform .3s;
                        transition: -webkit-transform .3s;
                        transition: transform .3s;
                        transition: transform .3s, -webkit-transform .3s;
                        transition: transform .3s,-webkit-transform .3s;
                        -webkit-transform: rotateZ(180deg);
                        -ms-transform: rotate(180deg);
                        transform: rotateZ(180deg);
                        line-height: 16px;
                        cursor: pointer;
                    }
                    .el-select__caret.is-reverse {
                        -webkit-transform: rotateZ(0);
                        -ms-transform: rotate(0);
                        transform: rotateZ(0);
                    }
                } 
            }
        }
        .application-base-tabs>.base-label, .application-base-input-multi>.base-label{
            display:none;
        }
    }
</style>
