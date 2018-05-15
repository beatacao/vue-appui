<template>
    <div class='vueui__demo'>
        <div class='vueui__demo-panel'>
            <BAppBase :configArray='formatteData' @change='change'></BAppBase>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        beforeCreate () {
            this.$store.dispatch('getRules')
        },
        methods: {
            change(opt){
                var self = this
                switch(opt.type){
                    case 'cascaderFocus': 
                        self.fetchData(opt)
                        break
                    case 'cascaderChange':
                        self.resetData(opt)
                        break
                    case 'selectVisibleChange':
                        self.handleSelect(opt)
                        break;
                    default: 
                        this.$emit('change')
                }
            },
            fetchData (opt) {
                var rule = this.$store.state.rules[opt.rIndex]
                var rOptions = rule.options
                var length = rOptions.length
                if(opt.index > (length-1)){
                    return
                }
                rule.options[opt.index].options = [
                    {
                        'label': '畅销款',
                        'value': '畅销款'
                    },
                    {
                        'label': '平销款',
                        'value': '平销款'
                    },
                    {
                        'label': '滞销款',
                        'value': '滞销款'
                    },
                    {
                        'label': '未知',
                        'value': '未知'
                    }
                ]

                for(var i=opt.index+1; i<=length-1; i++){
                    rule.options[i].options = []
                    rule.options[i].value = []
                }
                this.$store.state.rules.splice(opt.rIndex, 1, rule)
            },
            resetData(opt){
                var rule = this.$store.state.rules[opt.rIndex]
                var rOptions = rule.options
                var length = rOptions.length
                rule.options[opt.index].value = opt.value
                if(opt.index >= (length-1)){
                    return
                } 
                for(var i=opt.index+1; i<=length-1; i++){
                    rule.options[i].options = []
                    rule.options[i].value = []
                }
                this.$store.state.rules.splice(opt.rIndex, 1, rule)
            },
            handleSelect (opt) {
                var max_val = document.getElementsByName('custom-max')[0].value
                var min_val = document.getElementsByName('custom-min')[0].value
                var rule = this.$store.state.rules[opt.rIndex]
                if(max_val && min_val){
                    rule.value = [min_val + '#' + max_val]
                }
                this.$store.state.rules.splice(opt.rIndex, 1, rule)
            }
        },
        computed: {
            formatteData () {
                return this.$store.state.rules
            }
        }
    }
</script>

<style lang='less' type='text/less'>
.vu__application-base{
    display: table; border-spacing: 20px;
    [class^=application-base]{
        display: table-row;
        margin-bottom: 20px;
        .base-label{
            display: table-cell; width:200px; text-align:right; vertical-align:top; 
        }
        .base-component{
            display: table-cell; min-width:600px; text-align:left; 
        }
    }
}
</style>