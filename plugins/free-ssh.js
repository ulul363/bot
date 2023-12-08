/*let handler = async (m, { conn }) => {
	m.reply('habis')
 let sshInfo = `
⚡ SSH OVPN ACCOUNT ⚡
━━━━━━━━━━━━━━━━━
» Username         : Gass
» Password         : Prem
━━━━━━━━━━━━━━━━━
» Host             : vpnku.kytrx.cloud
» Host Slowdns     : dns.nwaqktg.sloowdns.my.id
» Pub Key          : d90d9ea03ab77fea2be019c7803ada4f4a8f5a444dcd795fe397c6bbc2bb1f6c
» Port OpenSSH     : 443, 80, 22
» Port DNS         : 443, 53 ,22
» Port Dropbear    : 443, 109
» Port Dropbear WS : 443, 109
» Port SSH WS      : 80, 8080, 8081-9999 
» Port SSH SSL WS  : 443
» Port SSL/TLS     : 222-1000
» Port OVPN WS SSL : 443
» Port OVPN SSL    : 443
» Port OVPN TCP    : 443, 1194
» Port OVPN UDP    : 2200
» Proxy Squid      : 3128
» BadVPN UDP       : 7100, 7300, 7300
━━━━━━━━━━━━━━━━━
» Payload WSS      : GET wss://BUG.COM/ HTTP/1.1[crlf]Host: vpnku.kytrx.cloud[crlf]Upgrade: websocket[crlf][crlf]
━━━━━━━━━━━━━━━━━
» OpenVPN WS SSL   : https://vpnku.kytrx.cloud:81/ws-ssl.ovpn
» OpenVPN SSL      : https://vpnku.kytrx.cloud:81/ssl.ovpn
» OpenVPN TCP      : https://vpnku.kytrx.cloud:81/tcp.ovpn
» OpenVPN UDP      : https://vpnku.kytrx.cloud:81/udp.ovpn
━━━━━━━━━━━━━━━━━» Save Link Account: https://vpnku.kytrx.cloud:81/ssh-Gass.txt
» Expired Until: 2023-09-25
`;

  let additionalInfo = `
situmbal.bbm.online:80@power:range
sg02.vpnhack.xyz:80@vpnhack-hanskor:noprem
id01.vpnhack.xyz:80@vpnhack-hansgans:bukanprem
`;

  let vmessInfo = `
⟨ Xray/Vmess Account ⟩
◇━━━━━━━━━━━━━◇
» Remarks     : Test WS (CDN) TLS
» Domain      : sgdo.forceoneme.my.id
» Ns DNS      : dns.forceoneme.my.id
» Port DNS    : 443, 53
» port TLS    : 443
» Port NTLS   : 80, 8080
» Port GRPC   : 443
» AlterId     : 0
» Security    : auto
» NetWork     : (WS) or (gRPC)
» Path        : /whatever/vmess
» ServiceName : vmess-grpc
» User ID     : 60785514-fa62-4e0a-92cb-5d96ab626b53
» Pub Key     : 8ed0e6b4ba3bf14a66066194a3d70f4d865a9ff831fb5155c3385f83e075741d
◇━━━━━━━━━━━━━◇
`;

  let vmessLinks = `
undefined
`;

  let openClashLink = `
» Format OpenClash : https://sgdo.forceoneme.my.id:81/vmess-Test.txt
`;

  let disclaimer = `
*kalo ingin tau gw dapat dari mana jawabanya gw ambil ssh di config orang dan taruh sini👍☕*`;

  let caption = sshInfo + additionalInfo + vmessInfo + vmessLinks + openClashLink + disclaimer;

  m.reply(caption);
}

handler.command = /^(ssh)$/i
handler.help = ['ssh']
handler.tags = ['main']
export default handler*/