

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
