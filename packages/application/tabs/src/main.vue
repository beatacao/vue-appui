<template>
    <div class='vu__application-tabs'>
        <label v-if='label && label.length>0' class="base-label" @click='tabsVisible = true'>{{label}}</label>
        <el-dialog
            :title="label"
            :visible.sync="tabsVisible"
            :class='{visible: tabsVisible}'
            width="30%">
            <el-tabs v-model="activeName">
                <el-tab-pane v-for='(item, index) in options' :key='index' :label="item.label" :name="item.name">
                    <BTextarea :name='item.name' :value='item.value' :placeholder='item.placeholder'></BTextarea>
                </el-tab-pane>
            </el-tabs>
        </el-dialog>
    </div>
</template>

<script>
    import { ElTabs } from 'element-ui'
    import BTextarea from '../../../base/textarea/index'
    export default {
        name: 'BTabs',
        data () {
            return {
                activeName: '',
                tabsVisible: false
            }
        },
        extends: ElTabs,
        components: {BTextarea},
        props: {
            label: {
                type: String,
                default: ''
            },
            options: {
                type: Array,
                default: function () {
                    return []
                }
            }
        },
        created () {
            this.activeName = this.options[0].name
        },
        computed: {
            
        },
        mounted () {
            console.log(`BRegion ${this.itemType} mounted!`)
        }
    }
</script>
