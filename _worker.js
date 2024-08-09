
// 部署完成后在网址后面加上这个，获取自建节点和机场聚合节点，/?token=auto或/auto或

let mytoken = 'auto'; //可以随便取，或者uuid生成，https://1024tools.com/uuid
let BotToken =''; //可以为空，或者@BotFather中输入/start，/newbot，并关注机器人
let ChatID =''; //可以为空，或者@userinfobot中获取，/start
let TG = 0; //小白勿动， 开发者专用，1 为推送所有的访问信息，0 为不推送订阅转换后端的访问信息与异常访问
let FileName = 'CF-Workers-SUB';
let SUBUpdateTime = 6; //自定义订阅更新时间，单位小时
let total = 99;//TB
let timestamp = 4102329600000;//2099-12-31

let cacheTTL = 24 ;//小时，缓存时长

//节点链接 + 订阅链接
let MainData = `
vless://89b3cbba-e6ac-485a-9481-976a0415eab9@5e35469e.bpb-worker-panel-4iw.pages.dev:2053?encryption=none&security=tls&sni=5e35469E.bpB-WOrkeR-paNEL-4Iw.pageS.dEv&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=5e35469e.BPB-wORker-pAnEL-4iW.paGES.dEv&path=%2F7j6W3iZEK4sYnwNk%3Fed%3D2560#%F0%9F%92%A6%20BPB%20-%20Domain_1%20%3A%202053
vless://89b3cbba-e6ac-485a-9481-976a0415eab9@5e35469e.bpb-worker-panel-4iw.pages.dev:2083?encryption=none&security=tls&sni=5E35469e.bPb-wOrKeR-PAnEL-4Iw.pages.deV&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=5E35469e.BPB-WorKeR-paNEL-4IW.pAGES.dEV&path=%2FRR0UUa2OhzEvpP6P%3Fed%3D2560#%F0%9F%92%A6%20BPB%20-%20Domain_1%20%3A%202083
vless://89b3cbba-e6ac-485a-9481-976a0415eab9@5e35469e.bpb-worker-panel-4iw.pages.dev:2087?encryption=none&security=tls&sni=5E35469E.bpB-wOrkER-panEL-4iw.PAGes.dev&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=5E35469e.bPb-workEr-PANEl-4IW.paGEs.Dev&path=%2FxJQEt1AHbgXKLDfk%3Fed%3D2560#%F0%9F%92%A6%20BPB%20-%20Domain_1%20%3A%202087
vless://89b3cbba-e6ac-485a-9481-976a0415eab9@5e35469e.bpb-worker-panel-4iw.pages.dev:2096?encryption=none&security=tls&sni=5e35469E.bPb-WorKEr-paneL-4Iw.pAGEs.dEv&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=5e35469e.bpb-WorkER-Panel-4iW.PagES.dEV&path=%2FRyGKPkQ8JeXyYUjx%3Fed%3D2560#%F0%9F%92%A6%20BPB%20-%20Domain_1%20%3A%202096
vless://89b3cbba-e6ac-485a-9481-976a0415eab9@5e35469e.bpb-worker-panel-4iw.pages.dev:443?encryption=none&security=tls&sni=5e35469E.bpb-WORker-pANel-4Iw.pagEs.dEV&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=5e35469e.bPb-wORKER-paNeL-4iW.paGes.dev&path=%2FTBPn7BqivMtWQHVY%3Fed%3D2560#%F0%9F%92%A6%20BPB%20-%20Domain_1%20%3A%20443
vless://89b3cbba-e6ac-485a-9481-976a0415eab9@5e35469e.bpb-worker-panel-4iw.pages.dev:8443?encryption=none&security=tls&sni=5e35469e.Bpb-WOrKEr-PANEl-4IW.paGes.DEV&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=5E35469E.BPB-wOrker-PANel-4Iw.pAGeS.deV&path=%2FCMX7Q5ilyZQE4tii%3Fed%3D2560#%F0%9F%92%A6%20BPB%20-%20Domain_1%20%3A%208443
vless://89b3cbba-e6ac-485a-9481-976a0415eab9@www.speedtest.net:2053?encryption=none&security=tls&sni=5e35469E.BPb-wORkEr-PaNeL-4iw.PageS.deV&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=5e35469E.bpB-WORker-pAnel-4IW.pagEs.DEv&path=%2F08XlCeAwmTS2uDIr%3Fed%3D2560#%F0%9F%92%A6%20BPB%20-%20Domain_2%20%3A%202053
vless://89b3cbba-e6ac-485a-9481-976a0415eab9@www.speedtest.net:2083?encryption=none&security=tls&sni=5e35469E.bpB-wORkER-PAnEL-4Iw.paGEs.DEV&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=5e35469E.BPb-WOrKER-pANEl-4Iw.pAges.DeV&path=%2Fb3uaKanVua3mlaTw%3Fed%3D2560#%F0%9F%92%A6%20BPB%20-%20Domain_2%20%3A%202083
vless://89b3cbba-e6ac-485a-9481-976a0415eab9@[2606:4700:310c::ac42:2d02]:2087?encryption=none&security=tls&sni=5E35469e.bPb-WORKeR-pAnEL-4iW.PaGes.DEV&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=5e35469E.BPB-WORker-PAnEl-4iW.PageS.DEV&path=%2FWkYFSUYAb48QIOAQ%3Fed%3D2560#%F0%9F%92%A6%20BPB%20-%20IPv6_2%20%3A%202087
vless://89b3cbba-e6ac-485a-9481-976a0415eab9@www.speedtest.net:2087?encryption=none&security=tls&sni=5e35469e.bPb-WoRkEr-Panel-4iw.PAges.DeV&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=5e35469e.bPb-worKer-PANEl-4IW.paGES.DEV&path=%2Fi2qGdgG61euZNjfN%3Fed%3D2560#%F0%9F%92%A6%20BPB%20-%20Domain_2%20%3A%202087
vless://89b3cbba-e6ac-485a-9481-976a0415eab9@www.speedtest.net:2096?encryption=none&security=tls&sni=5E35469e.bpb-wORKER-pANeL-4Iw.pAgeS.dEV&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=5e35469e.BPB-WORkeR-PaNEl-4Iw.PAgEs.dev&path=%2Fly8u37mZacSfZOOP%3Fed%3D2560#%F0%9F%92%A6%20BPB%20-%20Domain_2%20%3A%202096
vless://89b3cbba-e6ac-485a-9481-976a0415eab9@www.speedtest.net:443?encryption=none&security=tls&sni=5e35469E.bPB-WORkER-panEl-4iW.pAgEs.dev&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=5e35469e.bpB-wORKEr-PaNEL-4iW.pages.deV&path=%2FgCdN1pWCqW7MC14C%3Fed%3D2560#%F0%9F%92%A6%20BPB%20-%20Domain_2%20%3A%20443
vless://89b3cbba-e6ac-485a-9481-976a0415eab9@www.speedtest.net:8443?encryption=none&security=tls&sni=5e35469e.BPb-WORKer-PaneL-4iw.pAgEs.dEv&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=5e35469E.bpB-wORkeR-PanEL-4iw.pages.DEv&path=%2F2sJFuwjFASvLIqeS%3Fed%3D2560#%F0%9F%92%A6%20BPB%20-%20Domain_2%20%3A%208443
vless://89b3cbba-e6ac-485a-9481-976a0415eab9@172.66.45.2:2053?encryption=none&security=tls&sni=5E35469e.BPb-WOrker-PaneL-4iw.PAGEs.deV&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=5E35469e.bpb-woRKER-PanEL-4Iw.pAges.dev&path=%2FRoi06hHDj8u6wNfP%3Fed%3D2560#%F0%9F%92%A6%20BPB%20-%20IPv4_1%20%3A%202053
vless://89b3cbba-e6ac-485a-9481-976a0415eab9@172.66.45.2:2083?encryption=none&security=tls&sni=5E35469e.Bpb-wORker-PANel-4iW.PagEs.dev&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=5E35469E.BpB-wORker-PAnEL-4iw.PAgeS.dev&path=%2FnMXyYNdgs3xsDd7t%3Fed%3D2560#%F0%9F%92%A6%20BPB%20-%20IPv4_1%20%3A%202083
vless://89b3cbba-e6ac-485a-9481-976a0415eab9@172.66.45.2:2087?encryption=none&security=tls&sni=5e35469e.bpb-wORkeR-panel-4iW.pAgES.dEV&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=5e35469E.BPB-workEr-pAneL-4iw.pAgES.deV&path=%2Ff4IpXQ8sC46Ii94c%3Fed%3D2560#%F0%9F%92%A6%20BPB%20-%20IPv4_1%20%3A%202087
vless://89b3cbba-e6ac-485a-9481-976a0415eab9@172.66.45.2:2096?encryption=none&security=tls&sni=5E35469E.BPB-WorkER-PANEL-4iw.pAgEs.DEv&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=5E35469E.bpb-WoRKeR-PanEL-4iW.PagES.Dev&path=%2FlD6W5JKw4JNk5Lhl%3Fed%3D2560#%F0%9F%92%A6%20BPB%20-%20IPv4_1%20%3A%202096
vless://89b3cbba-e6ac-485a-9481-976a0415eab9@172.66.45.2:443?encryption=none&security=tls&sni=5E35469e.bpb-Worker-panel-4iw.PagEs.DEV&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=5E35469E.bPb-wOrKeR-PaNeL-4iw.PaGEs.DEV&path=%2FiehOjVcSyuZeOc1Z%3Fed%3D2560#%F0%9F%92%A6%20BPB%20-%20IPv4_1%20%3A%20443
vless://89b3cbba-e6ac-485a-9481-976a0415eab9@172.66.45.2:8443?encryption=none&security=tls&sni=5E35469E.BPb-wORKeR-PAnEL-4IW.PAGeS.DEV&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=5E35469E.bpb-WORKeR-PaNEL-4Iw.PageS.Dev&path=%2FhccDzG4fWIXhHMwn%3Fed%3D2560#%F0%9F%92%A6%20BPB%20-%20IPv4_1%20%3A%208443
vless://89b3cbba-e6ac-485a-9481-976a0415eab9@172.66.46.254:2053?encryption=none&security=tls&sni=5e35469e.bpB-wOrKer-PaneL-4IW.PAgEs.DeV&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=5e35469E.BpB-woRKer-pANEL-4IW.PAGEs.Dev&path=%2FcgGneBlLiS7JZmwA%3Fed%3D2560#%F0%9F%92%A6%20BPB%20-%20IPv4_2%20%3A%202053
vless://89b3cbba-e6ac-485a-9481-976a0415eab9@172.66.46.254:2083?encryption=none&security=tls&sni=5e35469E.BpB-WOrkEr-pAnEl-4Iw.pAGEs.DEV&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=5E35469E.BPB-WorkEr-panEL-4iW.PageS.Dev&path=%2FGFHwXrkTNc7eGcBG%3Fed%3D2560#%F0%9F%92%A6%20BPB%20-%20IPv4_2%20%3A%202083
vless://89b3cbba-e6ac-485a-9481-976a0415eab9@172.66.46.254:2087?encryption=none&security=tls&sni=5e35469E.BPB-workEr-paNel-4IW.PAGeS.DeV&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=5e35469e.bPb-WOrkeR-PaNeL-4iW.pagES.dev&path=%2FJyVpXbDApBjz8sbI%3Fed%3D2560#%F0%9F%92%A6%20BPB%20-%20IPv4_2%20%3A%202087
vless://89b3cbba-e6ac-485a-9481-976a0415eab9@172.66.46.254:2096?encryption=none&security=tls&sni=5E35469E.bPB-WOrKEr-PAneL-4Iw.pAgeS.dev&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=5E35469E.bPb-WoRker-PaNEL-4IW.paGes.DEv&path=%2FEPIokrH07M3toKi2%3Fed%3D2560#%F0%9F%92%A6%20BPB%20-%20IPv4_2%20%3A%202096
vless://89b3cbba-e6ac-485a-9481-976a0415eab9@172.66.46.254:443?encryption=none&security=tls&sni=5e35469e.bPB-woRKEr-PAneL-4iw.pAges.dEV&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=5E35469e.bpB-wORKEr-panEl-4IW.paGES.deV&path=%2Ftx5TP469RIdNbrGf%3Fed%3D2560#%F0%9F%92%A6%20BPB%20-%20IPv4_2%20%3A%20443
vless://89b3cbba-e6ac-485a-9481-976a0415eab9@172.66.46.254:8443?encryption=none&security=tls&sni=5e35469E.bpB-woRKeR-PAnEL-4IW.paGES.dev&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=5E35469e.bPB-WORKeR-pANEl-4IW.PAGEs.DEv&path=%2FhkKo0ipcQ6NB8AlN%3Fed%3D2560#%F0%9F%92%A6%20BPB%20-%20IPv4_2%20%3A%208443
vless://89b3cbba-e6ac-485a-9481-976a0415eab9@[2606:4700:310c::ac42:2efe]:2053?encryption=none&security=tls&sni=5E35469E.bPb-worKEr-paNEl-4IW.PaGes.DeV&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=5e35469E.BPB-wOrKER-PANel-4iw.paGes.deV&path=%2FVgFoGJAkSEXG9Uyr%3Fed%3D2560#%F0%9F%92%A6%20BPB%20-%20IPv6_1%20%3A%202053
vless://89b3cbba-e6ac-485a-9481-976a0415eab9@[2606:4700:310c::ac42:2efe]:2087?encryption=none&security=tls&sni=5e35469E.BpB-WoRker-panel-4IW.paGEs.dev&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=5E35469E.bPb-WORkeR-PAneL-4IW.PAGES.deV&path=%2FF5lQMASyccVbMMyW%3Fed%3D2560#%F0%9F%92%A6%20BPB%20-%20IPv6_1%20%3A%202087
vless://89b3cbba-e6ac-485a-9481-976a0415eab9@[2606:4700:310c::ac42:2efe]:2096?encryption=none&security=tls&sni=5E35469e.BPb-WoRkeR-pANel-4Iw.PAGES.DeV&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=5E35469E.BpB-WORkEr-PaNEL-4iW.pAGes.DEv&path=%2Fy3yxm35Qx1spnsnj%3Fed%3D2560#%F0%9F%92%A6%20BPB%20-%20IPv6_1%20%3A%202096
vless://89b3cbba-e6ac-485a-9481-976a0415eab9@[2606:4700:310c::ac42:2efe]:443?encryption=none&security=tls&sni=5E35469e.bpb-WORkER-PANEl-4iw.PAgES.Dev&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=5E35469e.bpB-woRKeR-PANEl-4Iw.paGEs.dev&path=%2FhqZRVa1fluWD9Jt5%3Fed%3D2560#%F0%9F%92%A6%20BPB%20-%20IPv6_1%20%3A%20443
vless://89b3cbba-e6ac-485a-9481-976a0415eab9@[2606:4700:310c::ac42:2efe]:8443?encryption=none&security=tls&sni=5E35469E.bPb-wOrKer-PAneL-4IW.pages.Dev&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=5E35469e.Bpb-WORKER-PaNEl-4Iw.PAgEs.dEV&path=%2FSJf12oaKNC6vAP1O%3Fed%3D2560#%F0%9F%92%A6%20BPB%20-%20IPv6_1%20%3A%208443
vless://89b3cbba-e6ac-485a-9481-976a0415eab9@[2606:4700:310c::ac42:2d02]:2053?encryption=none&security=tls&sni=5e35469e.bPb-WORker-panEL-4IW.pAGeS.dEV&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=5E35469E.bpb-wOrKEr-PaNeL-4Iw.PaGes.dEV&path=%2FdZ6DlIBXaV2rYWzB%3Fed%3D2560#%F0%9F%92%A6%20BPB%20-%20IPv6_2%20%3A%202053
vless://89b3cbba-e6ac-485a-9481-976a0415eab9@[2606:4700:310c::ac42:2d02]:2083?encryption=none&security=tls&sni=5e35469E.Bpb-WORKEr-PANel-4iw.PaGeS.deV&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=5E35469E.bPB-wORkeR-pANEL-4iw.paGeS.deV&path=%2Fxdi2Q0VRWcX0qGwp%3Fed%3D2560#%F0%9F%92%A6%20BPB%20-%20IPv6_2%20%3A%202083
vless://89b3cbba-e6ac-485a-9481-976a0415eab9@[2606:4700:310c::ac42:2d02]:2096?encryption=none&security=tls&sni=5E35469E.bPb-woRkeR-PANeL-4iW.PagES.Dev&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=5e35469e.Bpb-wORkeR-PaNEL-4iw.pages.DEv&path=%2FXv3C0qtEmD6Dn8I0%3Fed%3D2560#%F0%9F%92%A6%20BPB%20-%20IPv6_2%20%3A%202096
vless://89b3cbba-e6ac-485a-9481-976a0415eab9@[2606:4700:310c::ac42:2d02]:443?encryption=none&security=tls&sni=5E35469e.bpb-WORkEr-PaNel-4IW.Pages.deV&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=5E35469E.bPb-woRKer-panEl-4IW.PAGEs.DEV&path=%2FUDsaImBVmZAblQKv%3Fed%3D2560#%F0%9F%92%A6%20BPB%20-%20IPv6_2%20%3A%20443
vless://89b3cbba-e6ac-485a-9481-976a0415eab9@[2606:4700:310c::ac42:2d02]:8443?encryption=none&security=tls&sni=5e35469E.Bpb-WoRKER-PaNeL-4iw.PAges.dEv&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=5e35469E.bpB-WORker-PANel-4iw.PaGEs.DEv&path=%2FeT56bKtOkHjIV781%3Fed%3D2560#%F0%9F%92%A6%20BPB%20-%20IPv6_2%20%3A%208443
vless://89b3cbba-e6ac-485a-9481-976a0415eab9@[2606:4700:310c::ac42:2d02]:443?encryption=none&security=tls&sni=5E35469e.bpb-WORkEr-PaNel-4IW.Pages.deV&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=5E35469E.bPb-woRKer-panEl-4IW.PAGEs.DEV&path=%2FUDsaImBVmZAblQKv%3Fed%3D2560#%F0%9F%92%A6%20BPB%20-%20IPv6_2%20%3A%20443-clone
`

let urls = [];
let subconverter = "subapi-loadbalancing.pages.dev"; //在线订阅转换后端，目前使用CM的订阅转换功能。支持自建psub 可自行搭建https://github.com/bulianglin/psub
let subconfig = "https://raw.githubusercontent.com/cmliu/ACL4SSR/main/Clash/config/ACL4SSR_Online_MultiCountry.ini"; //订阅配置文件
let subProtocol = 'https';

export default {
	async fetch (request,env) {
		const userAgentHeader = request.headers.get('User-Agent');
		const userAgent = userAgentHeader ? userAgentHeader.toLowerCase() : "null";
		const url = new URL(request.url);
		const token = url.searchParams.get('token');
		mytoken = env.TOKEN || mytoken;
		BotToken = env.TGTOKEN || BotToken;
		ChatID = env.TGID || ChatID; 
		TG =  env.TG || TG; 
		subconverter = env.SUBAPI || subconverter;
		if( subconverter.includes("http://") ){
			subconverter = subconverter.split("//")[1];
			subProtocol = 'http';
		} else {
			subconverter = subconverter.split("//")[1] || subconverter;
		}
		subconfig = env.SUBCONFIG || subconfig;
		FileName = env.SUBNAME || FileName;
		MainData = env.LINK || MainData;
		if(env.LINKSUB) urls = await ADD(env.LINKSUB);

		const currentDate = new Date();
		currentDate.setHours(0, 0, 0, 0); 
		const timeTemp = Math.ceil(currentDate.getTime() / 1000);
		const fakeToken = await MD5MD5(`${mytoken}${timeTemp}`);
		//console.log(`${fakeUserID}\n${fakeHostName}`); // 打印fakeID

		let UD = Math.floor(((timestamp - Date.now())/timestamp * total * 1099511627776 )/2);
		total = total * 1099511627776 ;
		let expire= Math.floor(timestamp / 1000) ;
		SUBUpdateTime = env.SUBUPTIME || SUBUpdateTime;

		let 重新汇总所有链接 = await ADD(MainData + '\n' + urls.join('\n'));
		let 自建节点 ="";
		let 订阅链接 ="";
		for (let x of 重新汇总所有链接) {
			if (x.toLowerCase().startsWith('http')) {
				订阅链接 += x + '\n';
			} else {
				自建节点 += x + '\n';
			}
		}
		MainData = 自建节点;
		urls = await ADD(订阅链接);

		if ( !(token == mytoken || token == fakeToken || url.pathname == ("/"+ mytoken) || url.pathname.includes("/"+ mytoken + "?")) ) {
			if ( TG == 1 && url.pathname !== "/" && url.pathname !== "/favicon.ico" ) await sendMessage(`#异常访问 ${FileName}`, request.headers.get('CF-Connecting-IP'), `UA: ${userAgent}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
			const envKey = env.URL302 ? 'URL302' : (env.URL ? 'URL' : null);
			if (envKey) {
				const URLs = await ADD(env[envKey]);
				const URL = URLs[Math.floor(Math.random() * URLs.length)];
				return envKey === 'URL302' ? Response.redirect(URL, 302) : fetch(new Request(URL, request));
			}
			return new Response(await nginx(), { 
				status: 200 ,
				headers: {
					'Content-Type': 'text/html; charset=UTF-8',
				},
			});
		} else {
			await sendMessage(`#获取订阅 ${FileName}`, request.headers.get('CF-Connecting-IP'), `UA: ${userAgentHeader}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
			let 订阅格式 = 'base64';
			if (userAgent.includes('null') || userAgent.includes('subconverter') || userAgent.includes('nekobox') || userAgent.includes(('CF-Workers-SUB').toLowerCase())){
				订阅格式 = 'base64';
			} else if (userAgent.includes('clash') || ( url.searchParams.has('clash') && !userAgent.includes('subconverter'))){
				订阅格式 = 'clash';
			} else if (userAgent.includes('sing-box') || userAgent.includes('singbox') || ( (url.searchParams.has('sb') || url.searchParams.has('singbox')) && !userAgent.includes('subconverter'))){
				订阅格式 = 'singbox';
			} else if (userAgent.includes('surge') || ( url.searchParams.has('surge') && !userAgent.includes('subconverter'))){
				订阅格式 = 'surge';
			}

			let subconverterUrl ;
			let 订阅转换URL = `${url.origin}/${await MD5MD5(fakeToken)}?token=${fakeToken}`;
			//console.log(订阅转换URL);
			let req_data = MainData;

			// 初始化缓存
			const cache = caches.default;

			let 追加UA = 'v2rayn';
			if (url.searchParams.has('clash')){
				追加UA = 'clash';
			} else if(url.searchParams.has('singbox')){
				追加UA = 'singbox';
			} else if(url.searchParams.has('surge')){
				追加UA = 'surge';
			}
			
			try {
				const responses = await Promise.all(urls.map(async url => {
					const cacheKey = new Request(url);
					
					try {
						// 设置2秒超时
						const controller = new AbortController();
						const timeoutId = setTimeout(() => controller.abort(), 2000);
	
						const response = await fetch(url, {
							method: 'get',
							headers: {
								'Accept': 'text/html,application/xhtml+xml,application/xml;',
								'User-Agent': `${追加UA} cmliu/CF-Workers-SUB ${userAgentHeader}`
							},
							signal: controller.signal
						});
	
						clearTimeout(timeoutId);
	
						if (response.ok) {
							const content = await response.text();
							
							// 请求成功，写入缓存，设置24小时的缓存时间
							const cacheResponse = new Response(content, {
								headers: {
									...response.headers,
									'Cache-Control': `public, max-age=${cacheTTL * 60 * 60}`
								}
							});
							await cache.put(cacheKey, cacheResponse);
							console.log(`更新缓存 ${url}:\n${content.slice(0, 10)}...`);
							if (content.includes('dns') && content.includes('proxies') && content.includes('proxy-groups')) {
								// Clash 配置
								订阅转换URL += "|" + url;
								return ""; // 返回空字符串，因为这种情况下我们不需要内容
							} else if (content.includes('dns') && content.includes('outbounds') && content.includes('inbounds')){
								// Singbox 配置
								订阅转换URL += "|" + url;
								return ""; // 返回空字符串，因为这种情况下我们不需要内容
							} else {
								return content;
							}
						} else {
							throw new Error('请求失败');
						}
					} catch (error) {
						// 请求失败或超时，尝试从缓存读取
						const cachedResponse = await cache.match(cacheKey);
						if (cachedResponse) {
							const cachedContent = await cachedResponse.text();
							console.log(`使用缓存内容 ${url}:\n${cachedContent.slice(0, 10)}...`);
							return cachedResponse.text();
						} else {
							console.log(`无缓存可用 ${url}`);
							return ""; // 缓存中也没有，返回空字符串
						}
					}
				}));	
			
				for (const response of responses) {
					if (response) {
						req_data += base64Decode(response) + '\n';
					}
				}
			
			} catch (error) {
				console.error('处理 URL 时发生错误：', error);
			}

			//修复中文错误
			const utf8Encoder = new TextEncoder();
			const encodedData = utf8Encoder.encode(req_data);
			const text = String.fromCharCode.apply(null, encodedData);
			
			//去重
			const uniqueLines = new Set(text.split('\n'));
			const result = [...uniqueLines].join('\n');
			//console.log(result);
			
			const base64Data = btoa(result);

			if (订阅格式 == 'base64' || token == fakeToken){
				return new Response(base64Data ,{
					headers: { 
						"content-type": "text/plain; charset=utf-8",
						"Profile-Update-Interval": `${SUBUpdateTime}`,
						"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
					}
				});
			} else if (订阅格式 == 'clash'){
				subconverterUrl = `${subProtocol}://${subconverter}/sub?target=clash&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			} else if (订阅格式 == 'singbox'){
				subconverterUrl = `${subProtocol}://${subconverter}/sub?target=singbox&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			} else if (订阅格式 == 'surge'){
				subconverterUrl = `${subProtocol}://${subconverter}/sub?target=surge&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			}
			//console.log(订阅转换URL);
			try {
				const subconverterResponse = await fetch(subconverterUrl);
				
				if (!subconverterResponse.ok) {
					return new Response(base64Data ,{
						headers: { 
							"content-type": "text/plain; charset=utf-8",
							"Profile-Update-Interval": `${SUBUpdateTime}`,
							"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
						}
					});
					//throw new Error(`Error fetching subconverterUrl: ${subconverterResponse.status} ${subconverterResponse.statusText}`);
				}
				let subconverterContent = await subconverterResponse.text();
				if (订阅格式 == 'clash') subconverterContent =await clashFix(subconverterContent);
				return new Response(subconverterContent, {
					headers: { 
						"Content-Disposition": `attachment; filename*=utf-8''${encodeURIComponent(FileName)}; filename=${FileName}`,
						"content-type": "text/plain; charset=utf-8",
						"Profile-Update-Interval": `${SUBUpdateTime}`,
						"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,

					},
				});
			} catch (error) {
				return new Response(base64Data ,{
					headers: { 
						"content-type": "text/plain; charset=utf-8",
						"Profile-Update-Interval": `${SUBUpdateTime}`,
						"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
					}
				});
			}
		}
	}
};

async function ADD(envadd) {
	var addtext = envadd.replace(/[	"'|\r\n]+/g, ',').replace(/,+/g, ',');  // 将空格、双引号、单引号和换行符替换为逗号
	//console.log(addtext);
	if (addtext.charAt(0) == ',') addtext = addtext.slice(1);
	if (addtext.charAt(addtext.length -1) == ',') addtext = addtext.slice(0, addtext.length - 1);
	const add = addtext.split(',');
	//console.log(add);
	return add ;
}

async function nginx() {
	const text = `
	<!DOCTYPE html>
	<html>
	<head>
	<title>Welcome to nginx!</title>
	<style>
		body {
			width: 35em;
			margin: 0 auto;
			font-family: Tahoma, Verdana, Arial, sans-serif;
		}
	</style>
	</head>
	<body>
	<h1>Welcome to nginx!</h1>
	<p>If you see this page, the nginx web server is successfully installed and
	working. Further configuration is required.</p>
	
	<p>For online documentation and support please refer to
	<a href="http://nginx.org/">nginx.org</a>.<br/>
	Commercial support is available at
	<a href="http://nginx.com/">nginx.com</a>.</p>
	
	<p><em>Thank you for using nginx.</em></p>
	</body>
	</html>
	`
	return text ;
}

async function sendMessage(type, ip, add_data = "") {
	if ( BotToken !== '' && ChatID !== ''){
		let msg = "";
		const response = await fetch(`http://ip-api.com/json/${ip}?lang=zh-CN`);
		if (response.status == 200) {
			const ipInfo = await response.json();
			msg = `${type}\nIP: ${ip}\n国家: ${ipInfo.country}\n<tg-spoiler>城市: ${ipInfo.city}\n组织: ${ipInfo.org}\nASN: ${ipInfo.as}\n${add_data}`;
		} else {
			msg = `${type}\nIP: ${ip}\n<tg-spoiler>${add_data}`;
		}
	
		let url = "https://api.telegram.org/bot"+ BotToken +"/sendMessage?chat_id=" + ChatID + "&parse_mode=HTML&text=" + encodeURIComponent(msg);
		return fetch(url, {
			method: 'get',
			headers: {
				'Accept': 'text/html,application/xhtml+xml,application/xml;',
				'Accept-Encoding': 'gzip, deflate, br',
				'User-Agent': 'Mozilla/5.0 Chrome/90.0.4430.72'
			}
		});
	}
}

function base64Decode(str) {
	const bytes = new Uint8Array(atob(str).split('').map(c => c.charCodeAt(0)));
	const decoder = new TextDecoder('utf-8');
	return decoder.decode(bytes);
}

async function MD5MD5(text) {
	const encoder = new TextEncoder();
  
	const firstPass = await crypto.subtle.digest('MD5', encoder.encode(text));
	const firstPassArray = Array.from(new Uint8Array(firstPass));
	const firstHex = firstPassArray.map(b => b.toString(16).padStart(2, '0')).join('');

	const secondPass = await crypto.subtle.digest('MD5', encoder.encode(firstHex.slice(7, 27)));
	const secondPassArray = Array.from(new Uint8Array(secondPass));
	const secondHex = secondPassArray.map(b => b.toString(16).padStart(2, '0')).join('');
  
	return secondHex.toLowerCase();
}

function clashFix(content) {
	if(content.includes('wireguard') && !content.includes('remote-dns-resolve')){
		let lines;
		if (content.includes('\r\n')){
			lines = content.split('\r\n');
		} else {
			lines = content.split('\n');
		}
	
		let result = "";
		for (let line of lines) {
			if (line.includes('type: wireguard')) {
				const 备改内容 = `, mtu: 1280, udp: true`;
				const 正确内容 = `, mtu: 1280, remote-dns-resolve: true, udp: true`;
				result += line.replace(new RegExp(备改内容, 'g'), 正确内容) + '\n';
			} else {
				result += line + '\n';
			}
		}

		content = result;
	}
	return content;
}
