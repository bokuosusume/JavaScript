  
/*【Loon 2.1+ 脚本配置】
 *
 * [Script]
 *
 *梨涡签到领现金
 *cron "7 0 * * *" script-path=https://raw.githubusercontent.com/bokuosusume/JavaScript/master/liwo/7days.js,tag=梨涡签到领现金
 *http-request https:\/\/api\.m\.jd\.com\/api\/v1\/sign\/doSign script-path=https://raw.githubusercontent.com/bokuosusume/JavaScript/master/liwo/7dayscookie.js, requires-body=true, timeout=10, tag=梨涡签到领现金Cookie
 * [MITM]
 *
 *hostname = api.m.jd.com
 */

const lwKey = 'CookieJD'
const lwVal = $persistentStore.read(lwKey)
const lwbodyKey = "Body"
const lwbody = $persistentStore.read(lwbodyKey)


const headers = {"Accept": "application/json, text/plain, */*","Accept-Encoding": "gzip, deflate, br","Accept-Language": "zh-cn","Connection": "keep-alive","Content-Length": "246","Content-Type": "application/x-www-form-urlencoded","Cookie": lwVal,"Host": "api.m.jd.com","Origin": "https://2do.jd.com","Referer": "https://2do.jd.com/events/7-days/","User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 13_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148/yocial,"}

//获取自1970年1月1日00:00:00 UTC以来经过的毫秒数并更新到消息体内
const nowtime = Date.now()
const changebody = lwbody.replace(/(&t=)\d*/,"&t=" + nowtime)
console.log("刷新时间成功 "+"Time:" + nowtime + "Body:" + changebody)

var params = {
    url:"https://api.m.jd.com/api/v1/sign/doSign",
    headers:headers,
    body:changebody
}

sign()

function sign(){
    $httpClient.post(params,
    (error,reponse,data)=>{
      let result = JSON.parse(data)
      console.log(result)
      let title = `☺️梨涡签到领现金`
      // 签到OK
      if (result.status == true) {
         let subTitle = `💚签到成功`
         let detail = "✅" +result.data.message
         $notification.post(title,
             subTitle, detail)
         console.log(detail)
      }
      //签过到了
      else if (result.status == false) {
         let subTitle = `💛您已签到`
         let detail = "❕" +result.error.message
         $notification.post(title,
             subTitle, detail)
         console.log(detail)
      }
      //失败
      else {
         let subTitle = `💔失败详情`
         let detail = "❗" +result
         console.log(detail)
         $notification.post(title,
             subTitle, detail)
      }
   })
}


 

$done({})
