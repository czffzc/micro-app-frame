// 获取dom
var el = document.getElementById('root');

        console.log(el);
// 遍历dom
        function dealNode(el) {
            var childNodes = el.childNodes;
            [].slice.call(childNodes).forEach((node)=>{
                if(node.nodeType == 1){
                    //节点元素的属性
                    var nodeAttrs = node.attributes;
                    console.log(nodeAttrs);
                    [].slice.call(nodeAttrs).forEach((attr) => {
                        var attrName = attr.name;
                        if(isDeretive(attrName)){
                            var exp = attr.value;
                            var dir = attr.name.substring(2);
                            console.log('指令类型',dir);
                            console.log('指令的值',exp);
                            if(dir == 'if' && (exp=='false')){
                                node.parentNode.removeChild(node);
                            }
                        }
                    });
                }
        
                //节点深层遍历
                if(node.childNodes && node.childNodes.length){
                    dealNode(node);
                }
            })
        }
        dealNode(el);
        
        function isDeretive(attr) {
            return attr.indexOf('r-') == 0;
        }