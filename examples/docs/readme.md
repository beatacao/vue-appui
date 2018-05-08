### 基础控件（业务无关）
checkbox, radio, input, textarea, label, select，timepicker， tip(站点统一提示信息组件)

### 应用控件（根据业务逻辑抽象出来的高级控件，其开发基于基础控件的复用）

### 应用控件属性的定义遵循同一个规范，共有属性定义如下：

```
{
    "label": "控件的标签名，会在页面展示给用户，非必需",
    "validator": "该控件用户输入内容验证规则, 非必需，已有规则定义，参考： https://vee-validate.logaretm.com/ ",
    "type": "控件类型，决定了控件的展现形式，必需，对应下文列出的控件，目前可选（input, input-multi, region, select, select-multi, select-ld, group, tabs）",
    "name": "与后端程序交互时传递参数名，必需",
    "placeholder": "用户输入控件的默认提示信息，非必需",
    "value": "控件的默认值，如果是多选，value为数组类型，非必需",
    "tip": "数组，一行一条针对该控件的提示信息，在页面种展现形式为小问号，点击小问号，出现提示列表，非必需",
    "unit": ""      //该筛选规则需要展示的单位信息，比如“%”，“元”等，
    "isToggle": false,  //是否可收起展开模式，默认直接显示
    "isModal": false, //是否弹框模式，默认false
    "deps": [     //组件依赖
                {
                    "name": "所依赖的组件name",
                    "msg": "如果所依赖组件未通过validator验证，给用户的提示信息"     //非必需，默认提示“请先设置xxx” 
                }
            ]
}
```