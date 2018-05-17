<template>
    <div class='vu__application-tabs'>
        <el-tabs v-model="activeName">
            <el-tab-pane v-for='(item, index) in options' :key='index' :label="item.label" :name="item.name">
                <BTextarea :name='item.name' :value='item.value'></BTextarea>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import { ElTabs } from 'element-ui'
    import BTextarea from '../../../base/textarea/index'
    export default {
        name: 'BTabs',
        data () {
            return {
                activeName: ''
            }
        },
        extends: ElTabs,
        components: {BTextarea},
        props: {
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
