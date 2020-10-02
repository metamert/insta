const express = require('express')
const axios = require('axios');
const app = express()
const port = 3000

const Arrayid=[]

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function follow() {
  console.log('Taking a break...');
  await sleep(2000);
  console.log('Two seconds later, showing sleep in a loop...');

  // Sleep in loop
  for (let i = 0; i < Arrayid.length; i++) {
  
      await sleep(20000);
      axios({
        method: 'post', //you can set what request you want to be
        url: `https://www.instagram.com/web/friendships/${Arrayid[i]}/follow/`,
  
        headers: {
  
'cookie':'ig_did=D374697D-145E-444D-ABDC-B0FD9873AFED; mid=XfVdCwALAAEDbQaAa9fQ735sD31b; fbm_124024574287414=base_domain=.instagram.com; shbid=18707; shbts=1591105116.9822855; csrftoken=jKkadQ3Cm5k2TQIWSgbPGP1sravoPMGC; ds_user_id=14253702403; sessionid=14253702403%3AISKSNxgpj0AarF%3A8; urlgen="{\"78.190.56.97\": 47331}:1jgQ1X:uztdbRx2YKX8VaI8Bol4cM3FYTE"'    ,      
'x-csrftoken':'jKkadQ3Cm5k2TQIWSgbPGP1sravoPMGC',
'x-ig-app-id':'936619743392459' ,
        'x-instagram-ajax':'01b761449ae2'  ,
        'accept':'*/*'
          
        
          
  
  
        }
      }).then(response => {
  
      console.log(response)
         
       
      }).catch(e=>console.log(e))
    
  
  
  
    }
}




















function showid(array){

array.map(item=>{

item.map(item=>Arrayid.push(item.node.id))


})
setTimeout(() => {
 follow() 

},3000);


}

async function start(name){
  console.log(name)
  console.log(`https://www.instagram.com/${name}/?__a=1`)
  //"etsy" yazarak etsynin idsini alıyoruz aslında direk idsini bulabilirz ama sonradan bugra yazdıgımızda otomatik onun kullanıclarını almıs olcaz daha rahat
  axios({
    method: 'get', //you can set what request you want to be
    url: `https://www.instagram.com/${name}/?__a=1`,
  
    headers: {
  
      'cookie': 'ig_did=D374697D-145E-444D-ABDC-B0FD9873AFED; mid=XfVdCwALAAEDbQaAa9fQ735sD31b; fbm_124024574287414=base_domain=.instagram.com; fbsr_124024574287414=GN9PzLq7frkHoQTO4q6mK59BGC2tl1-_Y5-LcisVmKM.eyJ1c2VyX2lkIjoiMTI1NzY2NzQwMCIsImNvZGUiOiJBUUJ4UTM4RmRUNVFHNmlSeVRRS20ta1ZtTkNxY3NXdTRqMHpHRTY2YWpKWEtNWjUyakt6eFdnWjFrU2RpMWJVTl92b2t4bHkxbFZwRm9MOHk4eHlacGJCRjZUTmdpbmtMRXlNTGo4N25JdnZmRFowRGs3dFRMQ1lPSU5OaS1rRUlGdklhZ0drT19EUG5aSUhleDJhTGpFb1cxOURzWE8za0JyckFUMk1zd3lQMkg0UHRKZHVFUGx1ZW5QTkJVZFVsVzBVdWZqdTJncS1Ld05aMW1Pb2ZGWjhISUwyZDlMV1ZoNEw5ZnNzeVJEMDY5dTRYVC05TUJ0NG00djQzQW9hcXN4c1h4OVBuN1lyc05fbHpDZGZFTkJ5M2owX0ZNVkZWcFN4UE5haUNvY3hQN09xTVNBTHNPVnZ1UU5reFJkZENOVSIsIm9hdXRoX3Rva2VuIjoiRUFBQnd6TGl4bmpZQkFOWTl4Z2FlNll3Z2xLemhLVnFvNWdhbnp1QTJyZ2xaQzVhT21GYXNKeHY4RFhuMTVVd29kdU1MTUdNS1JOTkJVVVZkMjI4OHo0SW5xMjBVYzFZRFpDTjc1TEhRdTk1NW15bURxZG1LdVh2V1hlWkFvYVRTTDJRbVM2RjNEcXpBUVZQNFpBMXBId2RBVHk1Vkxmd0JyeHU2WkFXbzdsd1pEWkQiLCJhbGdvcml0aG0iOiJITUFDLVNIQTI1NiIsImlzc3VlZF9hdCI6MTU5MTEwNTA5Nn0; csrftoken=I638Y6hsY9o2nVNnjrhuB686kb6BYPKZ; ds_user_id=14253702403; sessionid=14253702403%3AmmQZMud2awlwAe%3A3; shbid=18707; shbts=1591105116.9822855; urlgen="{\"78.190.56.97\": 47331}:1jg786:mgZbK-jJuLtgop9DFcR21bI36TY"',
      'sec-fetch-dest': 'empty',
  
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
  
      'x-ig-app-id': 936619743392459,
      'x-ig-www-claim': 'hmac.AR3EgGFPrRp7lMoflSHG-AggQXPR8gqcknUibswg0xaolnOy',
      'x-requested-with': 'XMLHttpRequest'
  
  
  
    }
  }).then(n => {
  //kullanıcı id sini aldık
    let userid = n.data.logging_page_id.split("_")[1]
  console.log(userid)
    //alttaki url followersları alma urlsi ama ilk follower çekişle sonrakiler farklı
    let url = `https://www.instagram.com/graphql/query/?query_hash=d04b0a864b4b54837c0d870b0e77e076&variables=%7B%22id%22%3A%22${userid}%22%2C%22include_reel%22%3Atrue%2C%22fetch_mutual%22%3Atrue%2C%22first%22%3A24%7D`
  console.log(url) 
    axios({
      method: 'get', //you can set what request you want to be
      url: url,
  
      headers: {
  
        'cookie': 'ig_did=D374697D-145E-444D-ABDC-B0FD9873AFED; mid=XfVdCwALAAEDbQaAa9fQ735sD31b; fbm_124024574287414=base_domain=.instagram.com; shbid=18707; shbts=1591105116.9822855; csrftoken=jKkadQ3Cm5k2TQIWSgbPGP1sravoPMGC; ds_user_id=14253702403; sessionid=14253702403%3AISKSNxgpj0AarF%3A8; urlgen="{\"78.190.56.97\": 47331}:1jgPFC:8ud9VEEzWWtfpmHTR4gMAKtauLk"',
        'sec-fetch-dest': 'empty',
  
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'referer': 'https://www.instagram.com/tomascorekulan/following/',
        'x-ig-app-id': 936619743392459,
        'x-ig-www-claim': 'hmac.AR3EgGFPrRp7lMoflSHG-AggQXPR8gqcknUibswg0xaolnOy',
        'x-requested-with': 'XMLHttpRequest'
  
  
  
      }
    }).then(response => {
  //followersları çektik yanında kullancılar ve after geldi sonra bunu loopa alıcaz aşagıda
      let obj = response.data.data.user.edge_follow
  
      let after = obj.page_info.end_cursor
  console.log(obj)
      let Array = []
      //Array.push(obj.edges)
  
      let newurl = `https://www.instagram.com/graphql/query/?query_hash=c76146de99bb02f6415203be841dd25a&variables=%7B%22id%22%3A%22${userid}%22%2C%22include_reel%22%3Atrue%2C%22fetch_mutual%22%3Atrue%2C%22first%22%3A200%2C%22after%22%3A%22${after.split("==")[0]}%3D%3D%22%7D`
  
  
      const inter = setInterval(() => {
  
        axios({
          method: 'get', //you can set what request you want to be
          url: newurl,
  
          headers: {
  
            'cookie': 'ig_did=D374697D-145E-444D-ABDC-B0FD9873AFED; mid=XfVdCwALAAEDbQaAa9fQ735sD31b; fbm_124024574287414=base_domain=.instagram.com; shbid=18707; shbts=1591105116.9822855; csrftoken=jKkadQ3Cm5k2TQIWSgbPGP1sravoPMGC; ds_user_id=14253702403; sessionid=14253702403%3AISKSNxgpj0AarF%3A8; urlgen="{\"78.190.56.97\": 47331}:1jgPFC:8ud9VEEzWWtfpmHTR4gMAKtauLk"',
            'sec-fetch-dest': 'empty',
  
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'referer': 'https://www.instagram.com/tomascorekulan/following/',
            'x-ig-app-id': 936619743392459,
            'x-ig-www-claim': 'hmac.AR3EgGFPrRp7lMoflSHG-AggQXPR8gqcknUibswg0xaolnOy',
            'x-requested-with': 'XMLHttpRequest'
  
  
  
          }
        }).then(response => {
  
          newurl = `https://www.instagram.com/graphql/query/?query_hash=c76146de99bb02f6415203be841dd25a&variables=%7B%22id%22%3A%22${userid}%22%2C%22include_reel%22%3Atrue%2C%22fetch_mutual%22%3Atrue%2C%22first%22%3A100%2C%22after%22%3A%22${response.data.data.user.edge_followed_by.page_info.end_cursor.split("==")[0]}%3D%3D%22%7D`
          //console.log(response.data.data.user.edge_followed_by)
  
          Array.push(response.data.data.user.edge_followed_by.edges)
          //yukarıdaki direk id si her request sonrası new url üretiyoruz çünkü after şeyleri farklı hepsinin
          if (Array.length > 50) {
            //50 ye ulaştıgında durdur
            clearInterval(inter);
  showid(Array)
          }
         
        }).catch()
      }, 3000)
  
     
  
  
  
  
  
  
  
    })
  
  
  
  
  
  })
  

}





//app.get('/', (req, res) => res.send('Hello World!'))
app.post("/follow",async (req, res) => {
console.log(req.headers.name)

 start(req.headers.name).then(()=>res.send("basladı"))
})



app.listen(4545, () => console.log(`Example app listening at http://localhost:${port}`))
