class pubproxy{
    constructor(){
        this.api = "http://pubproxy.com/api"
        this.headers={"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0","x-requested-with": "xmlhttprequest","content-type":"application/x-www-form-urlencoded; charset=UTF-8"}
    }
    async get_proxy(type){
        let req=await fetch(`${this.api}/proxy?type=${type}`,{method:"GET",headers: this.headers});
        return await req.json();
    }
}
module.exports = {pubproxy};