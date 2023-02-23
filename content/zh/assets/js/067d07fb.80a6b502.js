"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[1234],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),g=a,m=u["".concat(c,".").concat(g)]||u[g]||d[g]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},89295:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={},i="\u987a\u5e8f\u6d88\u606f\u53d1\u9001",s={unversionedId:"producer/03message2",id:"producer/03message2",title:"\u987a\u5e8f\u6d88\u606f\u53d1\u9001",description:"\u987a\u5e8f\u6d88\u606f\u4ecb\u7ecd",source:"@site/docs/02-producer/03message2.md",sourceDirName:"02-producer",slug:"/producer/03message2",permalink:"/zh/docs/4.x/producer/03message2",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/docs/02-producer/03message2.md",tags:[],version:"current",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"\u666e\u901a\u6d88\u606f\u53d1\u9001",permalink:"/zh/docs/4.x/producer/02message1"},next:{title:"\u5ef6\u8fdf\u6d88\u606f\u53d1\u9001",permalink:"/zh/docs/4.x/producer/04message3"}},c={},l=[{value:"\u987a\u5e8f\u6d88\u606f\u4ecb\u7ecd",id:"\u987a\u5e8f\u6d88\u606f\u4ecb\u7ecd",level:2},{value:"\u987a\u5e8f\u6d88\u606f\u793a\u4f8b\u4ee3\u7801",id:"\u987a\u5e8f\u6d88\u606f\u793a\u4f8b\u4ee3\u7801",level:2},{value:"\u987a\u5e8f\u6d88\u606f\u7684\u4e00\u81f4\u6027",id:"\u987a\u5e8f\u6d88\u606f\u7684\u4e00\u81f4\u6027",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u987a\u5e8f\u6d88\u606f\u53d1\u9001"},"\u987a\u5e8f\u6d88\u606f\u53d1\u9001"),(0,a.kt)("h2",{id:"\u987a\u5e8f\u6d88\u606f\u4ecb\u7ecd"},"\u987a\u5e8f\u6d88\u606f\u4ecb\u7ecd"),(0,a.kt)("p",null,"\u987a\u5e8f\u6d88\u606f\u662f\u4e00\u79cd\u5bf9\u6d88\u606f\u53d1\u9001\u548c\u6d88\u8d39\u987a\u5e8f\u6709\u4e25\u683c\u8981\u6c42\u7684\u6d88\u606f\u3002"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u4e00\u4e2a\u6307\u5b9a\u7684Topic\uff0c\u6d88\u606f\u4e25\u683c\u6309\u7167\u5148\u8fdb\u5148\u51fa\uff08FIFO\uff09\u7684\u539f\u5219\u8fdb\u884c\u6d88\u606f\u53d1\u5e03\u548c\u6d88\u8d39\uff0c\u5373\u5148\u53d1\u5e03\u7684\u6d88\u606f\u5148\u6d88\u8d39\uff0c\u540e\u53d1\u5e03\u7684\u6d88\u606f\u540e\u6d88\u8d39\u3002\u5728 Apache RocketMQ \u4e2d\u652f\u6301\u5206\u533a\u987a\u5e8f\u6d88\u606f\uff0c\u5982\u4e0b\u56fe\u6240\u793a\u3002\u6211\u4eec\u53ef\u4ee5\u6309\u7167\u67d0\u4e00\u4e2a\u6807\u51c6\u5bf9\u6d88\u606f\u8fdb\u884c\u5206\u533a\uff08\u6bd4\u5982\u56fe\u4e2d\u7684ShardingKey\uff09\uff0c\u540c\u4e00\u4e2aShardingKey\u7684\u6d88\u606f\u4f1a\u88ab\u5206\u914d\u5230\u540c\u4e00\u4e2a\u961f\u5217\u4e2d\uff0c\u5e76\u6309\u7167\u987a\u5e8f\u88ab\u6d88\u8d39\u3002"),(0,a.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f RocketMQ \u6d88\u606f\u7684\u987a\u5e8f\u6027\u5206\u4e3a\u4e24\u90e8\u5206\uff0c\u751f\u4ea7\u987a\u5e8f\u6027\u548c\u6d88\u8d39\u987a\u5e8f\u6027\u3002\u53ea\u6709\u540c\u65f6\u6ee1\u8db3\u4e86\u751f\u4ea7\u987a\u5e8f\u6027\u548c\u6d88\u8d39\u987a\u5e8f\u6027\u624d\u80fd\u8fbe\u5230\u4e0a\u8ff0\u7684FIFO\u6548\u679c\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u751f\u4ea7\u987a\u5e8f\u6027\uff1a")," RocketMQ \u901a\u8fc7\u751f\u4ea7\u8005\u548c\u670d\u52a1\u7aef\u7684\u534f\u8bae\u4fdd\u969c\u5355\u4e2a\u751f\u4ea7\u8005\u4e32\u884c\u5730\u53d1\u9001\u6d88\u606f\uff0c\u5e76\u6309\u5e8f\u5b58\u50a8\u548c\u6301\u4e45\u5316\u3002\u5982\u9700\u4fdd\u8bc1\u6d88\u606f\u751f\u4ea7\u7684\u987a\u5e8f\u6027\uff0c\u5219\u5fc5\u987b\u6ee1\u8db3\u4ee5\u4e0b\u6761\u4ef6\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5355\u4e00\u751f\u4ea7\u8005\uff1a \u6d88\u606f\u751f\u4ea7\u7684\u987a\u5e8f\u6027\u4ec5\u652f\u6301\u5355\u4e00\u751f\u4ea7\u8005\uff0c\u4e0d\u540c\u751f\u4ea7\u8005\u5206\u5e03\u5728\u4e0d\u540c\u7684\u7cfb\u7edf\uff0c\u5373\u4f7f\u8bbe\u7f6e\u76f8\u540c\u7684\u5206\u533a\u952e\uff0c\u4e0d\u540c\u751f\u4ea7\u8005\u4e4b\u95f4\u4ea7\u751f\u7684\u6d88\u606f\u4e5f\u65e0\u6cd5\u5224\u5b9a\u5176\u5148\u540e\u987a\u5e8f\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4e32\u884c\u53d1\u9001\uff1a\u751f\u4ea7\u8005\u5ba2\u6237\u7aef\u652f\u6301\u591a\u7ebf\u7a0b\u5b89\u5168\u8bbf\u95ee\uff0c\u4f46\u5982\u679c\u751f\u4ea7\u8005\u4f7f\u7528\u591a\u7ebf\u7a0b\u5e76\u884c\u53d1\u9001\uff0c\u5219\u4e0d\u540c\u7ebf\u7a0b\u95f4\u4ea7\u751f\u7684\u6d88\u606f\u5c06\u65e0\u6cd5\u5224\u5b9a\u5176\u5148\u540e\u987a\u5e8f\u3002")),(0,a.kt)("p",null,"\u6ee1\u8db3\u4ee5\u4e0a\u6761\u4ef6\u7684\u751f\u4ea7\u8005\uff0c\u5c06\u987a\u5e8f\u6d88\u606f\u53d1\u9001\u81f3\u670d\u52a1\u7aef\u540e\uff0c\u4f1a\u4fdd\u8bc1\u8bbe\u7f6e\u4e86\u540c\u4e00\u5206\u533a\u952e\u7684\u6d88\u606f\uff0c\u6309\u7167\u53d1\u9001\u987a\u5e8f\u5b58\u50a8\u5728\u540c\u4e00\u961f\u5217\u4e2d\u3002\u670d\u52a1\u7aef\u987a\u5e8f\u5b58\u50a8\u903b\u8f91\u5982\u4e0b\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u987a\u5e8f\u6d88\u606f\u53d1\u9001",src:r(76374).Z,width:"2546",height:"610"})),(0,a.kt)("p",null,"\u987a\u5e8f\u6d88\u606f\u7684\u5e94\u7528\u573a\u666f\u4e5f\u975e\u5e38\u5e7f\u6cdb\uff0c\u5728\u6709\u5e8f\u4e8b\u4ef6\u5904\u7406\u3001\u64ae\u5408\u4ea4\u6613\u3001\u6570\u636e\u5b9e\u65f6\u589e\u91cf\u540c\u6b65\u7b49\u573a\u666f\u4e0b\uff0c\u5f02\u6784\u7cfb\u7edf\u95f4\u9700\u8981\u7ef4\u6301\u5f3a\u4e00\u81f4\u7684\u72b6\u6001\u540c\u6b65\uff0c\u4e0a\u6e38\u7684\u4e8b\u4ef6\u53d8\u66f4\u9700\u8981\u6309\u7167\u987a\u5e8f\u4f20\u9012\u5230\u4e0b\u6e38\u8fdb\u884c\u5904\u7406\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\u521b\u5efa\u8ba2\u5355\u7684\u573a\u666f\uff0c\u9700\u8981\u4fdd\u8bc1\u540c\u4e00\u4e2a\u8ba2\u5355\u7684\u751f\u6210\u3001\u4ed8\u6b3e\u548c\u53d1\u8d27\uff0c\u8fd9\u4e09\u4e2a\u64cd\u4f5c\u88ab\u987a\u5e8f\u6267\u884c\u3002\u5982\u679c\u662f\u666e\u901a\u6d88\u606f\uff0c\u8ba2\u5355A\u7684\u6d88\u606f\u53ef\u80fd\u4f1a\u88ab\u8f6e\u8be2\u53d1\u9001\u5230\u4e0d\u540c\u7684\u961f\u5217\u4e2d\uff0c\u4e0d\u540c\u961f\u5217\u7684\u6d88\u606f\u5c06\u65e0\u6cd5\u4fdd\u6301\u987a\u5e8f\uff0c\u800c\u987a\u5e8f\u6d88\u606f\u53d1\u9001\u65f6\u5c06ShardingKey\u76f8\u540c\uff08\u540c\u4e00\u8ba2\u5355\u53f7\uff09\u7684\u6d88\u606f\u5e8f\u8def\u7531\u5230\u4e00\u4e2a\u903b\u8f91\u961f\u5217\u4e2d\u3002\n",(0,a.kt)("img",{alt:"\u987a\u5e8f\u6d88\u606f\u573a\u666f\u4e00",src:r(93969).Z,width:"877",height:"459"})),(0,a.kt)("h2",{id:"\u987a\u5e8f\u6d88\u606f\u793a\u4f8b\u4ee3\u7801"},"\u987a\u5e8f\u6d88\u606f\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("p",null,"\u987a\u5e8f\u6d88\u606f\u7684\u4ee3\u7801\u5982\u4e0b\u6240\u793a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class Producer {\n    public static void main(String[] args) throws UnsupportedEncodingException {\n        try {\n            DefaultMQProducer producer = new DefaultMQProducer("please_rename_unique_group_name");\n            producer.start();\n\n            String[] tags = new String[] {"TagA", "TagB", "TagC", "TagD", "TagE"};\n            for (int i = 0; i < 100; i++) {\n                int orderId = i % 10;\n                Message msg =\n                    new Message("TopicTest", tags[i % tags.length], "KEY" + i,\n                        ("Hello RocketMQ " + i).getBytes(RemotingHelper.DEFAULT_CHARSET));\n                SendResult sendResult = producer.send(msg, new MessageQueueSelector() {\n                    @Override\n                    public MessageQueue select(List<MessageQueue> mqs, Message msg, Object arg) {\n                        Integer id = (Integer) arg;\n                        int index = id % mqs.size();\n                        return mqs.get(index);\n                    }\n                }, orderId);\n\n                System.out.printf("%s%n", sendResult);\n            }\n\n            producer.shutdown();\n        } catch (MQClientException | RemotingException | MQBrokerException | InterruptedException e) {\n            e.printStackTrace();\n        }\n    }\n}\n')),(0,a.kt)("p",null,"\u8fd9\u91cc\u7684\u533a\u522b\u4e3b\u8981\u662f\u8c03\u7528\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"SendResult send(Message msg, MessageQueueSelector selector, Object arg)"),"\u65b9\u6cd5\uff0cMessageQueueSelector \u662f\u961f\u5217\u9009\u62e9\u5668\uff0carg \u662f\u4e00\u4e2a Java Object \u5bf9\u8c61\uff0c\u53ef\u4ee5\u4f20\u5165\u4f5c\u4e3a\u6d88\u606f\u53d1\u9001\u5206\u533a\u7684\u5206\u7c7b\u6807\u51c6\u3002"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"MessageQueueSelector\u7684\u63a5\u53e3\u5982\u4e0b\uff1a"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public interface MessageQueueSelector {\n    MessageQueue select(final List<MessageQueue> mqs, final Message msg, final Object arg);\n}\n")),(0,a.kt)("p",{parentName:"admonition"},"\u5176\u4e2d mqs \u662f\u53ef\u4ee5\u53d1\u9001\u7684\u961f\u5217\uff0cmsg\u662f\u6d88\u606f\uff0carg\u662f\u4e0a\u8ff0send\u63a5\u53e3\u4e2d\u4f20\u5165\u7684Object\u5bf9\u8c61\uff0c\u8fd4\u56de\u7684\u662f\u8be5\u6d88\u606f\u9700\u8981\u53d1\u9001\u5230\u7684\u961f\u5217\u3002\u4e0a\u8ff0\u4f8b\u5b50\u91cc\uff0c\u662f\u4ee5orderId\u4f5c\u4e3a\u5206\u533a\u5206\u7c7b\u6807\u51c6\uff0c\u5bf9\u6240\u6709\u961f\u5217\u4e2a\u6570\u53d6\u4f59\uff0c\u6765\u5bf9\u5c06\u76f8\u540corderId\u7684\u6d88\u606f\u53d1\u9001\u5230\u540c\u4e00\u4e2a\u961f\u5217\u4e2d\u3002"),(0,a.kt)("p",{parentName:"admonition"},"\u751f\u4ea7\u73af\u5883\u4e2d\u5efa\u8bae\u9009\u62e9\u6700\u7ec6\u7c92\u5ea6\u7684\u5206\u533a\u952e\u8fdb\u884c\u62c6\u5206\uff0c\u4f8b\u5982\uff0c\u5c06\u8ba2\u5355ID\u3001\u7528\u6237ID\u4f5c\u4e3a\u5206\u533a\u952e\u5173\u952e\u5b57\uff0c\u53ef\u5b9e\u73b0\u540c\u4e00\u7ec8\u7aef\u7528\u6237\u7684\u6d88\u606f\u6309\u7167\u987a\u5e8f\u5904\u7406\uff0c\u4e0d\u540c\u7528\u6237\u7684\u6d88\u606f\u65e0\u9700\u4fdd\u8bc1\u987a\u5e8f\u3002")),(0,a.kt)("h2",{id:"\u987a\u5e8f\u6d88\u606f\u7684\u4e00\u81f4\u6027"},"\u987a\u5e8f\u6d88\u606f\u7684\u4e00\u81f4\u6027"),(0,a.kt)("p",null,"\u5982\u679c\u4e00\u4e2aBroker\u6389\u7ebf\uff0c\u90a3\u4e48\u6b64\u65f6\u961f\u5217\u603b\u6570\u662f\u5426\u4f1a\u53d1\u5316\uff1f"),(0,a.kt)("p",null,"\u5982\u679c\u53d1\u751f\u53d8\u5316\uff0c\u90a3\u4e48\u540c\u4e00\u4e2a ShardingKey \u7684\u6d88\u606f\u5c31\u4f1a\u53d1\u9001\u5230\u4e0d\u540c\u7684\u961f\u5217\u4e0a\uff0c\u9020\u6210\u4e71\u5e8f\u3002\u5982\u679c\u4e0d\u53d1\u751f\u53d8\u5316\uff0c\u90a3\u6d88\u606f\u5c06\u4f1a\u53d1\u9001\u5230\u6389\u7ebfBroker\u7684\u961f\u5217\u4e0a\uff0c\u5fc5\u7136\u662f\u5931\u8d25\u7684\u3002\u56e0\u6b64 Apache RocketMQ \u63d0\u4f9b\u4e86\u4e24\u79cd\u6a21\u5f0f\uff0c\u5982\u679c\u8981\u4fdd\u8bc1\u4e25\u683c\u987a\u5e8f\u800c\u4e0d\u662f\u53ef\u7528\u6027\uff0c\u521b\u5efa Topic \u662f\u8981\u6307\u5b9a ",(0,a.kt)("inlineCode",{parentName:"p"},"-o")," \u53c2\u6570\uff08--order\uff09\u4e3atrue\uff0c\u8868\u793a\u987a\u5e8f\u6d88\u606f:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ sh bin/mqadmin updateTopic -c DefaultCluster -t TopicTest -o true -n 127.0.0.1:9876\ncreate topic to 127.0.0.1:10911 success.\nTopicConfig [topicName=TopicTest, readQueueNums=8, writeQueueNums=8, perm=RW-, topicFilterType=SINGLE_TAG, topicSysFlag=0, order=true, attributes=null]\n")),(0,a.kt)("p",null,"\u5176\u6b21\u8981\u4fdd\u8bc1NameServer\u4e2d\u7684\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"orderMessageEnable")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"returnOrderTopicConfigToBroker")," \u5fc5\u987b\u662f true\u3002\u5982\u679c\u4e0a\u8ff0\u4efb\u610f\u4e00\u4e2a\u6761\u4ef6\u4e0d\u6ee1\u8db3\uff0c\u5219\u662f\u4fdd\u8bc1\u53ef\u7528\u6027\u800c\u4e0d\u662f\u4e25\u683c\u987a\u5e8f\u3002"))}d.isMDXComponent=!0},76374:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/\u987a\u5e8f\u6d88\u606f\u53d1\u9001-a80d08ef7dacd4e936c3f6992a1369e5.png"},93969:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/\u987a\u5e8f\u6d88\u606f\u793a\u4f8b\u4e00-a8bac55b8fb3fceb995891c64c2f0a5a.png"}}]);