<template>
    <div class='vu__application-cascader-multi'>
    <template v-for='(item, index) in options'>
       <BSelect 
        :key='index' multiple 
        :options='item.options' 
        :placeholder='item.placeholder' 
        :name='item.name' 
        :value='item.value'
        filterable
        @focus='onFocus(arguments[0], index)'
        @change='onChange(arguments[0], index)'>
    </BSelect>
    </template>
    </div>
</template>

<script>
    import BSelect from '../../../base/select/index'
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
            },
            name: {
                type: String,
                default: ''
            }
        },
        created () {
            
        },
        computed: {
            
        },
        methods: {
            onFocus (e, index) {
                var options = this.options[index].options
                if ((index > 0) && (!this.options[index - 1].value || this.options[index - 1].value.length === 0)) {
                    return
                }
                if (!options || options.length === 0) {
                    this.$emit('focus', {name: this.name, subName: this.options[index].name, index: index})
                }
            },
            onChange (val, index) {
                this.$emit('change', {name: this.name, subName: this.options[index].name, value: val, index: index})
            }
        },
        mounted () {
            console.log(`BCascaderMulti mounted!`)
        }
    }
</script>
