# JavaScript

这是一个自己基于loon瞎倒腾的脚本，学艺不精还需要改进


## 梨涡（京东大学生特权app）的闲时任务查看与提醒
我的梨涡邀请码：dasaw  

邀请链接 http://2do.jd.com/events/red-envelopes/?inviter=1236228340192960513&channel=cash&extParam=1260048962852974594#/  

进野比大佬的京东京豆签到 bean.m.jd.com 再签到一下就能获取cookie了。

【Loon 2.1+ 脚本配置】:

[Script]  

cron "0 0-22 * * *" tag=京东梨涡任务查看, script-path=https://raw.githubusercontent.com/bokuosusume/JavaScript/master/liwo/liwotaskview.js 

http-request https:\/\/api\.m\.jd\.com\/client\.action.*functionId=signBean tag=获取京东Cookie, script-path=https://raw.githubusercontent.com/bokuosusume/JavaScript/master/liwo/liwocookie.js 

[MITM]  

hostname = api.m.jd.com
