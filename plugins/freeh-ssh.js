/*let handler = async (m, { conn }) => {
	m.reply('habis)
  let caption = "ni ssh free \n```━━━━━━━━━━━━━━━━━
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
━━━━━━━━━━━━━━━━━
» Save Link Account: https://vpnku.kytrx.cloud:81/ssh-Gass.txt
» Expired Until: 2023-09-25```\nsitumbal.bbm.online:80@power:range\nsg02.vpnhack.xyz:80@vpnhack-hanskor:noprem\nid01.vpnhack.xyz:80@vpnhack-hansgans:bukanprem\n◇━━━━━━━━━━━━━◇\n⟨ Xray/Vmess Account ⟩\n◇━━━━━━━━━━━━━◇\n» Remarks     : Test WS (CDN) TLS\n» Domain      : sgdo.forceoneme.my.id\n» Ns DNS      : dns.forceoneme.my.id\n» Port DNS    : 443, 53\n» port TLS    : 443\n» Port NTLS   : 80, 8080\n» Port GRPC   : 443\n» AlterId     : 0\n» Security    : auto\n» NetWork     : (WS) or (gRPC)\n» Path        : /whatever/vmess\n» ServiceName : vmess-grpc\n» User ID     : 60785514-fa62-4e0a-92cb-5d96ab626b53\n» Pub Key     : 8ed0e6b4ba3bf14a66066194a3d70f4d865a9ff831fb5155c3385f83e075741d\n◇━━━━━━━━━━━━━◇\n» Link TLS     : \nvmess://ICAgICAgewogICAgICAidiI6ICIyIiwKICAgICAgInBzIjogIlRlc3QgV1MgKENETikgVExTIiwKICAgICAgImFkZCI6ICJzZ2RvLmZvcmNlb25lbWUubXkuaWQiLAogICAgICAicG9ydCI6ICI0NDMiLAogICAgICAiaWQiOiAiNjA3ODU1MTQtZmE2Mi00ZTBhLTkyY2ItNWQ5NmFiNjI2YjUzIiwKICAgICAgImFpZCI6ICIwIiwKICAgICAgIm5ldCI6ICJ3cyIsCiAgICAgICJwYXRoIjogIi93aGF0ZXZlci92bWVzcyIsCiAgICAgICJ0eXBlIjogIm5vbmUiLAogICAgICAiaG9zdCI6ICJzZ2RvLmZvcmNlb25lbWUubXkuaWQiLAogICAgICAidGxzIjogInRscyIKfQo=\n◇━━━━━━━━━━━━━◇\n» Link NTLS    : \nvmess://ICAgICAgewogICAgICAidiI6ICIyIiwKICAgICAgInBzIjogIlRlc3QgV1MgKENETikgTlRMUyIsCiAgICAgICJhZGQiOiAic2dkby5mb3JjZW9uZW1lLm15LmlkIiwKICAgICAgInBvcnQiOiAiODAiLAogICAgICAiaWQiOiAiNjA3ODU1MTQtZmE2Mi00ZTBhLTkyY2ItNWQ5NmFiNjI2YjUzIiwKICAgICAgImFpZCI6ICIwIiwKICAgICAgIm5ldCI6ICJ3cyIsCiAgICAgICJwYXRoIjogIi93aGF0ZXZlci92bWVzcyIsCiAgICAgICJ0eXBlIjogIm5vbmUiLAogICAgICAiaG9zdCI6ICJzZ2RvLmZvcmNlb25lbWUubXkuaWQiLAogICAgICAidGxzIjogIm5vbmUiCn0K\n◇━━━━━━━━━━━━━◇\n» Link GRPC    : \nvmess://ICAgICAgewogICAgICAidiI6ICIyIiwKICAgICAgInBzIjogIlRlc3QgKFNOSSkgR1JQQyIsCiAgICAgICJhZGQiOiAic2dkby5mb3JjZW9uZW1lLm15LmlkIiwKICAgICAgInBvcnQiOiAiNDQzIiwKICAgICAgImlkIjogIjYwNzg1NTE0LWZhNjItNGUwYS05MmNiLTVkOTZhYjYyNmI1MyIsCiAgICAgICJhaWQiOiAiMCIsCiAgICAgICJuZXQiOiAiZ3JwYyIsCiAgICAgICJwYXRoIjogInZtZXNzLWdycGMiLAogICAgICAidHlwZSI6ICJub25lIiwKICAgICAgImhvc3QiOiAic2dkby5mb3JjZW9uZW1lLm15LmlkIiwKICAgICAgInRscyI6ICJ0bHMiCn0K\n◇━━━━━━━━━━━━━◇\n» Format OpenClash : https://sgdo.forceoneme.my.id:81/vmess-Test.txt\n◇━━━━━━━━━━━━━◇\n» Expired Until: 2023-09-25\n*kalo ingin tau gw dapat dari mana jawabanya gw ambil ssh di config orang dan taruh sini👍☕*";
  m.reply(caption)
}
handler.command = /^(ssh)$/i
handler.help = ['ssh']
handler.tags = ['main']
export default handler*/