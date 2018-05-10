<template>
    <div class='vu__application-cascader-multi'>
       <BSelect v-for='(item, index) in options' 
        :key='index' multiple 
        :options='item.options' 
        :placeholder='item.placeholder' 
        :name='item.name' 
        @focus='onFocus(arguments[0], index)'
        @change='onChange(arguments[0], index)'>
    </BSelect>
    </div>
</template>

<script>
    import BSelect from '~packages/base/select/index'
    export default {
        name: 'BCascaderMulti',
        data () {
            return {}
        },
        extends: BSelect,
        props: {
            options: {
                type: Array,
                default: function () {
                    return []
                }
            }
        },
        created () {
            
        },
        computed: {
            
        },
        methods: {
            onFocus (e, index) {
                var options = this.options[index].options
                if (!options || options.length === 0) {
                    this.$emit('focus', {name: options[index].name})
                }
            },
            onChange (val, index) {
                var options = this.options[index].options
                this.$emit('change', {name: options[index].name})
            }
        },
        mounted () {
            console.log(`BCascaderMulti mounted!`)
        }
    }
</script>
