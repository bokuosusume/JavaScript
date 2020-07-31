/*【Loon 2.1+ 脚本配置】 
 *
 * [Script]
 *
 * cron "7 0 * * *" tag=梨涡签到领现金, script-path=https://raw.githubusercontent.com/bokuosusume/JavaScript/master/liwo/7days.js
 * http-request https:\/\/api\.m\.jd\.com\/api\/v1\/sign\/doSign tag=梨涡签到领现金Cookie, script-path=https://raw.githubusercontent.com/bokuosusume/JavaScript/master/liwo/7dayscookie.js
 * 
 * [MITM]
 *
 *hostname = api.m.jd.com
 */
 
 
const CookieName = '😀梨涡签到领钱'
const lwKey = 'CookieJD'
const lwVal = $request.headers['Cookie']
const lwbody = $request.body
const lwbodyKey = "Body"

if (lwVal && lwbody){
  let cookie = $persistentStore.write(lwVal, lwKey)
  let body = $persistentStore.write(lwbody, lwbodyKey)
  let msg = `${CookieName}`
  if (cookie && body){
    $notification.post(msg, '❤梨涡签到Body and Cookie写入成功', '详见日志')
    console.log(msg)
    console.log(lwVal)
    console.log(lwbody)
    $done({})
    
  }
}


//https:\/\/api\.m\.jd\.com\/api\/v1\/sign\/doSign
