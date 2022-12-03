const e=JSON.parse('{"key":"v-0b0d0087","path":"/coding/go/more/1.html","title":"1. sync包","lang":"zh-CN","frontmatter":{"icon":"note","date":"2022-01-01T00:00:00.000Z","category":["go"],"tag":["sync"],"description":"sync.Map 介绍 sync.Map 是 Go 语言中的一个并发安全的 map，它的 API 与 map 类似，但是它的实现是线程安全的。 用法 tab 基本用法#基本用法 tab sync.Map遍历#sync.Map遍历 实现原理 sync.Map 的实现原理是分段锁，它将 map 分为多个段，每个段都有一个互斥锁，当对 map 进行读写操作时...","head":[["meta",{"property":"og:url","content":"https://github.com/aide-cloud.github.io/coding/go/more/1.html"}],["meta",{"property":"og:site_name","content":"梧桐"}],["meta",{"property":"og:title","content":"1. sync包"}],["meta",{"property":"og:description","content":"sync.Map 介绍 sync.Map 是 Go 语言中的一个并发安全的 map，它的 API 与 map 类似，但是它的实现是线程安全的。 用法 tab 基本用法#基本用法 tab sync.Map遍历#sync.Map遍历 实现原理 sync.Map 的实现原理是分段锁，它将 map 分为多个段，每个段都有一个互斥锁，当对 map 进行读写操作时..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-03T09:48:45.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"sync"}],["meta",{"property":"article:published_time","content":"2022-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-12-03T09:48:45.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"sync.Map","slug":"sync-map","link":"#sync-map","children":[{"level":3,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":3,"title":"用法","slug":"用法","link":"#用法","children":[]},{"level":3,"title":"实现原理","slug":"实现原理","link":"#实现原理","children":[]},{"level":3,"title":"总结","slug":"总结","link":"#总结","children":[]}]},{"level":2,"title":"sync.Pool","slug":"sync-pool","link":"#sync-pool","children":[{"level":3,"title":"介绍","slug":"介绍-1","link":"#介绍-1","children":[]},{"level":3,"title":"用法","slug":"用法-1","link":"#用法-1","children":[]},{"level":3,"title":"实现原理","slug":"实现原理-1","link":"#实现原理-1","children":[]},{"level":3,"title":"总结","slug":"总结-1","link":"#总结-1","children":[]}]},{"level":2,"title":"sync.Once","slug":"sync-once","link":"#sync-once","children":[{"level":3,"title":"介绍","slug":"介绍-2","link":"#介绍-2","children":[]},{"level":3,"title":"用法","slug":"用法-2","link":"#用法-2","children":[]},{"level":3,"title":"实现原理","slug":"实现原理-2","link":"#实现原理-2","children":[]},{"level":3,"title":"总结","slug":"总结-2","link":"#总结-2","children":[]}]},{"level":2,"title":"sync.RWMutex","slug":"sync-rwmutex","link":"#sync-rwmutex","children":[{"level":3,"title":"介绍","slug":"介绍-3","link":"#介绍-3","children":[]},{"level":3,"title":"用法","slug":"用法-3","link":"#用法-3","children":[]},{"level":3,"title":"实现原理","slug":"实现原理-3","link":"#实现原理-3","children":[]},{"level":3,"title":"总结","slug":"总结-3","link":"#总结-3","children":[]}]},{"level":2,"title":"sync.Mutex","slug":"sync-mutex","link":"#sync-mutex","children":[{"level":3,"title":"介绍","slug":"介绍-4","link":"#介绍-4","children":[]},{"level":3,"title":"用法","slug":"用法-4","link":"#用法-4","children":[]},{"level":3,"title":"实现原理","slug":"实现原理-4","link":"#实现原理-4","children":[]},{"level":3,"title":"总结","slug":"总结-4","link":"#总结-4","children":[]}]},{"level":2,"title":"sync.WaitGroup","slug":"sync-waitgroup","link":"#sync-waitgroup","children":[{"level":3,"title":"介绍","slug":"介绍-5","link":"#介绍-5","children":[]},{"level":3,"title":"用法","slug":"用法-5","link":"#用法-5","children":[]},{"level":3,"title":"实现原理","slug":"实现原理-5","link":"#实现原理-5","children":[]},{"level":3,"title":"总结","slug":"总结-5","link":"#总结-5","children":[]}]}],"git":{"createdTime":1670055234000,"updatedTime":1670060925000,"contributors":[{"name":"胡标","email":"biao.hu@baishan.com","commits":2}]},"readingTime":{"minutes":4.29,"words":1287},"autoDesc":true,"filePathRelative":"coding/go/more/1.md","localizedDate":"2022年1月1日"}');export{e as data};
