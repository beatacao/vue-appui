<template>
        <div id='configWidget'>
            <createWidget @addWidget='addWidget'></createWidget>
            <BAppBaseMng :configArray='widgets'></BAppBaseMng>
        </div>
    </template>
          
    <script>
    import createWidget from '../components/createWidget.vue'
    
    export default {
        data () {
            return {
                widgets: []
            }
        },
        components: {createWidget},
        methods:{
            addWidget(payload){
                if(payload.type === 'region'){
                    payload.options = [
                        {
                            placeholder: payload['start-placeholder']
                        },
                        {
                            placeholder: payload['end-placeholder']
                        }
                    ]
                    payload['start-placeholder'] = null
                    payload['end-placeholder'] = null
                }
                this.widgets.push(payload)
            }
        }
    }
    </script>
          
    <style lang='less'>
    #configWidget {
       
    }
    </style>