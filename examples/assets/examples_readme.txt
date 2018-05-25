1、datasource url config
<div class='configTip' v-if='datasourceType === "apiModule"'>
    <dl>
        <dt>url配置说明：</dt>
        <dd>1、整体参数配置：${method}/${path}/${type}/${group}/${categories}</dd>
        <dd>2、method: get/post</dd>
        <dd>3、path: 请求url路径</dd>
        <dd>4、type: 应用类型区分，如：专题-商品：1，专题-档期：2，专场-人工：3，专场-自动：4</dd>
        <dd>5、group: 模块标志码</dd>
        <dd>6、categories: 模块所依赖规则的当前值</dd>
    </dl>
</div>
<div class='configTip' v-if='datasourceType === "apiRule"'>
    <dl>
        <dt>url配置说明：</dt>
        <dd>1、整体参数配置：${method}/${path}/${type}/${rule}/${query}</dd>
        <dd>2、method: get/post</dd>
        <dd>3、path: 请求url路径</dd>
        <dd>4、type: 应用类型区分，如：专题-商品：1，专题-档期：2，专场-人工：3，专场-自动：4</dd>
        <dd>5、rule: 规则标志码</dd>
        <dd>6、query: 用户输入的查询关键词</dd>
    </dl>
</div>
<div class='configTip' v-if='datasourceType === "apiRuleLd"'>
    <dl>
        <dt>url配置说明：</dt>
        <dd>1、整体参数配置：${method}/${path}/${type}/${rule}/${parent}/${categories}</dd>
        <dd>2、method: get/post</dd>
        <dd>3、path: 请求url路径</dd>
        <dd>4、type: 应用类型区分，如：专题-商品：1，专题-档期：2，专场-人工：3，专场-自动：4</dd>
        <dd>5、rule: 当前规则标志码</dd>
        <dd>6、parent: 当前规则父级标志码</dd>
        <dd>6、categories: 父级规则当前选择值</dd>
    </dl>
</div>


todo:
    分类验证
    级联虚拟
    api接口url解析