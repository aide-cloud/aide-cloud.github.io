const e=JSON.parse('{"key":"v-71ea8a43","path":"/coding/go/base/15.%20defer.html","title":"15. defer","lang":"zh-CN","frontmatter":{"icon":"note","date":"2023-01-30T00:00:00.000Z","category":["Go"],"tag":["基础","defer"],"description":"defer是什么 defer是Go语言中的一个关键字，用于注册延迟调用。当函数执行到最后时，这些调用会按照逆序执行，最后该函数返回。也就是说，defer语句会将其后面跟随的语句进行延迟处理。 defer的用法 defer语句会将其后面跟随的语句进行延迟处理。在defer归属的函数即将返回时，将延迟处理的语句按defer定义的逆序进行执行，最后该函数返回...","head":[["meta",{"property":"og:url","content":"https://github.com/aide-cloud.github.io/coding/go/base/15.%20defer.html"}],["meta",{"property":"og:site_name","content":"梧桐"}],["meta",{"property":"og:title","content":"15. defer"}],["meta",{"property":"og:description","content":"defer是什么 defer是Go语言中的一个关键字，用于注册延迟调用。当函数执行到最后时，这些调用会按照逆序执行，最后该函数返回。也就是说，defer语句会将其后面跟随的语句进行延迟处理。 defer的用法 defer语句会将其后面跟随的语句进行延迟处理。在defer归属的函数即将返回时，将延迟处理的语句按defer定义的逆序进行执行，最后该函数返回..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-01-30T03:02:37.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"基础"}],["meta",{"property":"article:tag","content":"defer"}],["meta",{"property":"article:published_time","content":"2023-01-30T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-01-30T03:02:37.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"defer是什么","slug":"defer是什么","link":"#defer是什么","children":[]},{"level":2,"title":"defer的用法","slug":"defer的用法","link":"#defer的用法","children":[]},{"level":2,"title":"defer在循环中","slug":"defer在循环中","link":"#defer在循环中","children":[]},{"level":2,"title":"defer应用场景","slug":"defer应用场景","link":"#defer应用场景","children":[{"level":3,"title":"1. 错误处理","slug":"_1-错误处理","link":"#_1-错误处理","children":[]},{"level":3,"title":"2. 锁的释放","slug":"_2-锁的释放","link":"#_2-锁的释放","children":[]},{"level":3,"title":"3. 文件打开和关闭","slug":"_3-文件打开和关闭","link":"#_3-文件打开和关闭","children":[]},{"level":3,"title":"4. 数据库连接和关闭","slug":"_4-数据库连接和关闭","link":"#_4-数据库连接和关闭","children":[]},{"level":3,"title":"5. 事务的提交和回滚","slug":"_5-事务的提交和回滚","link":"#_5-事务的提交和回滚","children":[]}]}],"git":{"createdTime":1675047757000,"updatedTime":1675047757000,"contributors":[{"name":"梧桐","email":"aidecloud@163.com","commits":1}]},"readingTime":{"minutes":2.4,"words":721},"autoDesc":true,"filePathRelative":"coding/go/base/15. defer.md","localizedDate":"2023年1月30日"}');export{e as data};