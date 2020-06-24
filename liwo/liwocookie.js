/**
 * 我的梨涡邀请码：dasaw
 * 邀请链接 http://2do.jd.com/events/red-envelopes/?inviter=1236228340192960513&channel=cash&extParam=1260048962852974594#/
 * 进野比大佬的京东京豆签到 bean.m.jd.com 再签到一下就能获取cookie了。
 *
 * 【Loon 2.1+ 脚本配置】:
 *
 * [Script]
 *
 * cron "0 0-22 * * *" tag=京东梨涡任务查看, script-path=https://raw.githubusercontent.com/bokuosusume/JavaScript/master/liwotaskview.js http-request https://api.m.jd.com/client.action.*functionId=signBean tag=获取京东Cookie, script-path=https://raw.githubusercontent.com/bokuosusume/JavaScript/master/liwocookie.js
 *
 * [MITM]
 *
 * hostname = api.m.jd.com
 */

const CookieName = '梨涡任务查看'
const Key = 'CookieJD'
const Val = $request.headers['Cookie']

if (Val){
  let cookie = $persistentStore.write(Val, Key)
  let msg = `${CookieName}`
  if (cookie){
    $notification.post(msg, '京东cookie写入成功', '详见日志')
    console.log(msg)
    console.log(Val)
    console.log("thanks")
    $done({})
    
  }
}
