import {Popover} from 'element-ui'


export const global = {
    //暴露给外部适用 install
    install: function (Vue) {
        //使用require.context 使工程自动化
        const requireComponent = require.context(
            "../base",
            true,
            /\.vue$/
        );

        //filename 得到base下的所有的文件名组成的数组
        requireComponent.keys().map(fileName => {
            //返回一个require函数
            const componentConfig = requireComponent(fileName);
            // console.log(requireComponent.keys());
            const componentName = componentConfig.default.name;
            // console.log(componentConfig.default.name);

            Vue.component(componentName, componentConfig.default || componentConfig)
        })

     
    }
   
}


