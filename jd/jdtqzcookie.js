// https:\/\/ms\.jr\.jd\.com\/gw\/generic\/bt\/h5\/m\/doSign\?reqData=%7B%7D
/*
*http-request ^https:\/\/ms\.jr\.jd\.com\/gw\/generic\/bt\/h5\/m\/queryUserSignFlow script-path=https://github.com/bokuosusume/JavaScript/raw/master/jd/jdtqzcookie.js, tag=京东特权值cookie
*cron "5 8 * * *" script-path=https://github.com/bokuosusume/JavaScript/raw/master/jd/jdtqz.js, tag= 京东特权值
*
* 登录京东账号后进 https://btfront.jd.com/release/growth/index.html 签到
* 登录京东账号后进 https://btfront.jd.com/release/growth/index.html 签到
*/
const cookieName = '京东特权值'
const tqzKey = 'CookieJD'
const sams = init()
const cookieVal = $request.headers['Cookie']

if (cookieVal) {
  if (sams.setdata(cookieVal, tqzKey)) {
    sams.msg(`${cookieName}`, '❤获取Cookie成功', '')
    sams.log(`[${cookieName}] ❤获取Cookie: 成功, cookie: ${cookieVal}`)
  }
}

function init() {
  isSurge = () => {
    return undefined === this.$httpClient ? false : true
  }
  isQuanX = () => {
    return undefined === this.$task ? false : true
  }
  getdata = (key) => {
    if (isSurge()) return $persistentStore.read(key)
    if (isQuanX()) return $prefs.valueForKey(key)
  }
  setdata = (key, val) => {
    if (isSurge()) return $persistentStore.write(key, val)
    if (isQuanX()) return $prefs.setValueForKey(key, val)
  }
  msg = (title, subtitle, body) => {
    if (isSurge()) $notification.post(title, subtitle, body)
    if (isQuanX()) $notify(title, subtitle, body)
  }
  log = (message) => console.log(message)
  get = (url, cb) => {
    if (isSurge()) {
      $httpClient.get(url, cb)
    }
    if (isQuanX()) {
      url.method = 'GET'
      $task.fetch(url).then((resp) => cb(null, {}, resp.body))
    }
  }
  post = (url, cb) => {
    if (isSurge()) {
      $httpClient.post(url, cb)
    }
    if (isQuanX()) {
      url.method = 'POST'
      $task.fetch(url).then((resp) => cb(null, {}, resp.body))
    }
  }
  done = (value = {}) => {
    $done(value)
  }
  return { isSurge, isQuanX, msg, log, getdata, setdata, get, post, done }
  }
 sams.done()
