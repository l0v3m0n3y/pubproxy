# pubproxy
JavaScript library for pubproxy.com
# main
```js
async function main(){
    const {pubproxy} = require('./pubproxy');
    const proxy= new pubproxy();
    let req=await proxy.get_proxy('socks5')
    console.log(req)
}
main()
```
