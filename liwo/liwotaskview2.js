const CookieName = 'Liwo'
const Key = 'CookieJD'
const Val = $persistentStore.read(Key)
const url = "https://ms.jr.jd.com/gw/generic/bt/h5/m/queryLazyTaskList?time=-&reqData="
const appurl = "yocial://free_time"

const review = encodeURI (url + JSON.stringify
({"clientVersion":"4.1.0",
 "taskType":"2",
 "pageNo":1,
 "pageSize":10,
 "clientType":""}))
const invite = encodeURI (url + JSON.stringify({"clientVersion":"4.1.0",
  "taskType":"3",
  "pageNo":1,
  "pageSize":10,
  "clientType":""}))
const pick = encodeURI (url + JSON.stringify
    ({"clientVersion":"4.1.0",
     "taskType":"1",
     "pageNo":1,
     "pageSize":10,
     "clientType":""}))
const talk = encodeURI (url + JSON.stringify
   ({"clientVersion":"4.1.0",
     "taskType":"4",
     "pageNo":1,
     "pageSize":10,
     "clientType":""}))
const look = encodeURI (url + JSON.stringify
   ({"clientVersion":"4.1.0",
     "taskType":"7",
     "pageNo":1,
     "pageSize":10,
     "clientType":""}))

const headers = {"Accept": "application/json, text/plain, */*",
"Accept-Encoding": "gzip, deflate, br",
"Accept-Language": "zh-cn",
"Connection": "keep-alive",
"Cookie": Val,"Host": "ms.jr.jd.com",
"Origin": "https://btfront.jd.com",
"Referer": "https://btfront.jd.com/release/zoneAuth/index.html?source=207&backURL=https%3A%2F%2Flwxianshi.jd.com%2FidleHours%2Findex.html%23%2Fbridge",
"User-Agent":"jdapp;iPhone;4.0.0;13.5.1;00e75528501feabe305085bd1d74f9ad2a49cc97;network/wifi;ADID/BDAE754C-5799-461C-B226-BC666A103CE1;model/iPhone8,4;appBuild/428;jdSupportDarkMode/0;pv/55.1;pap/(null)|(null)|IOS 13.5.1;apprpd/;psn/00e75528501feabe305085bd1d74f9ad2a49cc97|554;usc/;jdv/;umd/;psq/0;ucp/;app_device/IOS;utr/;ref/;adk/;ads/;Mozilla/5.0 (iPhone; CPU iPhone OS 13_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148/yocial",}

var params1 = {
    url:pick,
    headers:headers,
}

var params2 = {
    url:review,
    headers:headers,
}

var params3 = {
    url:invite,
    headers:headers,
}

var params4 = {
    url:talk,
    headers:headers,
}
var params5 = {
    url:look,
    headers:headers,
}


function get_data(p) {$httpClient.get(p,function(error, response, rd){
  var d = JSON.parse(rd)
  let task_data = d.resultData.data.queryTaskListInfo.taskInfoList
  let task_list = JSON.stringify(task_data,["taskName","buttonColor","unitPrice","buttonStr","stockTotalDaySurplus"])
  let t = JSON.parse(task_list)
  var n
  for (n=0; n<t.length; n++){
    if (t[n]&&t[n].stockTotalDaySurplus == 0 ){
      t.splice(n,1)
      n--     
    }
   return t
  }  
)}

function alllist(a){
 var i,x
 var list = ""
 for (i=0; i<a.length;i++){
    var x = a[i]
    if (x.buttonColor == 1){
    var msg = (i+1)+"."+" ✅"+ x.taskName +" "+"💰"+ x.unitPrice +"元 "+"🟢"+ x.buttonStr + " 名额"+x.stockTotalDaySurplus +`\n`
    }
    else {var msg = (i+1)+"."+" ⏰"+ x.taskName +" "+"💰"+ x.unitPrice +"元 "+"🟠"+ x.buttonStr + " 名额"+x.stockTotalDaySurplus +`\n`
    }
    
    list = list + msg 
    }
    return list
}
                      
var obj_pick =    alllist(get_data(params1))
var obj_review =  alllist(get_data(params2))
var obj_invite =  alllist(get_data(params3))
var obj_talk =    alllist(get_data(params4))
var obj_look =    alllist(get_data(params5))                                  
                                      
var subTitle = `😊梨涡闲时任务查看 点击通知跳转APP🔔`                       
var merge =   
    "--📬票选任务详情--"+"今日共"+ get_data(params1).length +"个任务--"+`\n`+ obj_pick +
    "--📋调研任务详情--"+"今日共"+ get_data(params2).length +"个任务--"+`\n`+ obj_review +
    "--💭话题任务详情--"+"今日共"+ get_data(params4).length +"个任务--"+`\n`+ obj_talk +
    "--🔍测评任务详情--"+"今日共"+ get_data(params3).length +"个任务--"+`\n`+ obj_invite +
    "--👀看看任务详情--"+"今日共"+ get_data(params5).length +"个任务--"+`\n`+ obj_look 
     
$notification.post(subTitle, merge, appurl)   
                                    

$done({})
