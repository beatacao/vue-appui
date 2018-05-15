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
.vueui__demo .base-component{
    display: inline-block; vertical-align: top; width:600px; text-align:left;
}
.base-label{
    display: inline-block; width:200px; text-align:right;
}
[class^=application-base]{
    margin-bottom: 20px;
}
</style>