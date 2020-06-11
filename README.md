# JavaScript

这是一个自己基于loon瞎倒腾的脚本，学艺不精还需要改进


## 梨涡（京东大学生特权app）的闲时任务查看
我的梨涡邀请码：dasaw 

进野比大佬的京东京豆签到 bean.m.jd.com 再签到一下就能获取cookie了。

【Loon 2.1+ 脚本配置】:

[Script]  

cron "0 */1 * * *" tag=京东梨涡任务查看, script-path=https://raw.githubusercontent.com/bokuosusume/JavaScript/master/liwotaskview.js
http-request https:\/\/api\.m\.jd\.com\/client\.action.*functionId=signBean tag=获取京东Cookie, script-path=https://raw.githubusercontent.com/bokuosusume/JavaScript/master/liwocookie.js 

[MITM]  

hostname = api.m.jd.com

