---
title: dino
---
# dino
## dino hack rom data
~~~
dino绝密系列-重要地址-宝典收藏(整理zengfr).txt
dino Top Secret Series-Important Address-Treasure Collection(Organize zengfr).txt
github:https://github.com/zengfr/romhack
https://gitee.com/zengfr/romhack

https://github.com/zengfr/arcade_game_romhacking_sourcecode_top_secret_data/dino/trace

$018D88						;一直会运行的某个血条相关程序
$acee     					;boss死后 判断是否过关
$acf4     					;过关
$149B0    					;敌人头顶显示数字血值
$16474,$164DC,$16518,$1656e,$165F4;会用到 色板显存 的各个指令
$18d88                       ;$18d88原某个读取血量的程序（不停的读）
$0164EA						 ;血条头部（最左边）
$1648a						 ;血条中部
$01649E						 ;血条尾部（最右边）
$01720A						 ;敌人死后才会运行的某处
$07BEDC                 	 ;派兵跟死后不动的
$058612                    	 ;取消2B开场音乐
$0517d6                    	 ;取消5B开场音乐
$61882                    	 ;取消8B开场音乐
$052D8a                  	 ;取消马云打死慢动作、小兵死
$ABEC						;过关+1
$0810ba 					;正式游戏时，会一直读取时间的地址
$23428 						;一直运行的指令，读取基址存在否处（插入动态强制色板）
$492e				 		;小兵死后一些内存数据清零
$655ba,$655ca,$655e0 		;NOP掉一些自带的强制色板
$014516              		;0d以下不用强制色板
$0144d2              		;跳到非强制 色板

$AAF6					;
$192ce					;按方向键就会运行的某指令
$71DA				    ;选中人物后跟续币载入一次而已
$145c6,$1450a			;不动时的搬砖程序
$14390,$1433e			;动时的搬砖程序
$14560		            ;不知道什么鬼，应该没用
$28AB8,$28AC8        ;初始血量与吃血调整
$28ab8,$28Ad0,$28ae4 ;设置吃食物回血上限
$28adc       		 ;回血 zfr
$116cc				 ;被打 zfr
$11770	    		 ;被打 暴击减小处 zfr
$10b32	    		 ;AB减血 zfr
$4DF0 				 ;接命
$4D9A 				 ;开始 zfr
$4dc2				 ;开始+过关
$188a4				 ;按键start
$9d3f4				 ;按投币键
$fd1e,$fd10,$fe5a       ;加载敌兵内存处
$07bf82    				;过场景卷轴时间加长
$1D95E   				;过关场景处理
$7C0CE 					;加上执行这个关底才能快速过
$7b3c6 					;清板统计程序
$FD32        			;$FD02 $FD2A $fdae出兵相关
$fcd2,$fe36,$fef4       ;Table zfr
$A63C        			;出兵器相关
$ABE8        			;赋值FF84D9关卡号+1，清空FF8786，FF84d2,FF84d0设置为8
$5cca0       			;修复幻影乱跑
$20A0C       			;场景加载处
$2AF8C		        	;变身前段
$52dde                  ;变身显示马云头像jsr sub_84736 zfr
$52ebe              	;马云变身过程的某个指令(变身后段
$abec					;更换关卡
$2228a              	;//加载场景
$ad66               	;//唯一的开始游戏清理数据
$8190e              	;//这里决定出幻影个数
$5c878,$819f6           ;//幻影血处理
$fe5a                   ;//条件掉宝特殊处理程序
$0239DE                 ;movea.w ($b4,A2), A3 ($6c,A3)无限弹药 Rifle, Gun, Uzi, M-16A1, Shotgun and Bazooka;zfr
$0246B2					;maincpu.mb@0246B2=60 Never lose weapons;zfr
$31446                  ;变身后血量血槽赋值;zfr
$52E70                  ;变身动作速度$80(a6);zfr
$52EA6                  ;变身动作速度$80(a6);zfr
$52E7C                  ;变身动作移动子程序sub_1862;zfr
$19796,19782            ;1P白人跑时距离move.w  d1,$1A(a6);zfr
$5514                   ;1P白人 前前A 左跳 ffb6->ffcc ;bp 5398;zfr
$54e4                   ;1P白人 前前A 右跳 ffb6->ffcc ;bp 5398;zfr
$53e8                   ;1P白人 单跳,跳A   ffb6->ffd6 ;bp 5398;zfr
$3b0b8                  ;18狮子死;zfr
$aac8                   ;场景结束后调用;zfr
$484a0                  ;大恐龙被打 zfr
$1450a,$145c6           ;1p动作帧
$aafc->$e90e->$2042E->$206d4->$208fe卷轴判断比较->$209C0->$20a0c场景敌兵加载
$20c94->$acd0->$aa0e-$ab36	;more jsr
$aa0e->$aabc                ;more jsr
$aaf6->$ab26                ;more jsr
$189c-$18da ;1P白人位移赋值加减 3个;zfr ;(14,A6)+(1a,A6)->(8,A6),(16,A6)+(1C,A6)->(C,A6),(18,A6)+(1E,A6)->(10,A6)
$1056e-$105E4               ;1P白人 more bsr ;zfr
$19122-$1B5d4               ;1P动作相关 ;zfr
$42888,$43860               ;区别1BOSS的BOSS和精英小兵 ;zfr
ff873c 地图 ff8788边界
-----------------------------------------------------------------------------------------------------------------
debug mode dip setting:wp ff8022,2,rw,1,{maincpu.pd@ff8022=01a00000;g} ff84aa=1;
-----------------------------------------------------------------------------------------------------------------
ci/cn/cl/cn +/cn -/cn eq/cn ne/
-----------------------------------------------------------------------------------------------------------------
$4d9(a5)写:$ABEC,$8A42
$786(a5)写:$89FC,$20C94,$20d5c,$209E4
$744(a5)写:$2126A,$20A68,$210be,$20C3c 太多
$864(a5)写:$6e8 -> move.l  $744(a5),$864(a5) 
-----------------------------------------------------------------------------------------------------------------
调用$acee:ROM:00038CFE\0004387A\0004C8C8\00050364\00055806\0005A36A\0005E460\00063492\000819F6 
-----------------------------------------------------------------------------------------------------------------
Boss:zfr
ADE62	1BOSS
AE280	2BOSS
AED02	3boss
AF2AE	4BOSS
AFA94, A4 5BOSS
B03D6	6BOSS
B0DE2	7BOSS
1AEC00	8BOSS
-----------------------------------------------------------------------------------------------------------------
FF873c:
+04:查表
+05
+08:卷轴
+0c:场景1V3比较
+4c->08
+4a
+56:查表
+6d
+06
+78
+79
-----------------------------------------------------------------------------------------------------------------
$4d0(a5)	 			 ;游戏状态 
$4d8(a5)	 			 ;不可动时为1
$4d9(a5)	 			 ;关卡
$786(a5)				 ;场景 A6=FF873C,($4a,a6)=$786(a5) 
$744(a5),$864(a5)		 ;卷轴
$47d(A5),$48d(A5),$49d(A5):coin数
$4FB(A5),$4F3(a5)   	 ;清板数
($67c0,A5)     			 ;当前场景中的所有对象的数量
($67c2,A5)     			 ;对象基址列表
$4FC(a5)				 ;BOSS战前关底01 bp 1dada ;zfr
$748(a5)				 ;?
$7a9(a5)				 ;gogogo
$4DA(a5)				 ;ff-00循环
$4fe(a5)				 ;0258-0000循环 go go go;
$4eA(a5)				 ;32-00循环
$4e9(a5)				 ;根据ea循环-1
$4DC(a5)				 ;?
$4D4(a5)				 ;01情况下角色无血不会死zfr
$4E4(a5)				 ;01才能正常过场景 zfr
$50a(a5)                 ;0 or 1 根据0b计数来
$50b(a5)                 ;0-5循环
$50c(a5)                 ;过场景前计时



($2,A6) 				 ;检测1P=0 2P=1 3P=2
($3,A6)       		  	 ;3P ID
$c6(A6)       		  	 ;暴击值
($6a,a0)      		 	 ;血槽长度
$6C(A6)       		 	 ;血量
($6e,a0)      		 	 ;血量(上次)
$5E(A6)       			 ;拳值
($A3,A6)				 ;命数量
($80,A6)				 ;隐现
($96,A6)				 ;掉物

($20,A0)      		        ;ID
($26,a6)      		        ;小类ID
($D6,A0),($23,a0) 		    ;锁定强制色板
($8,A0)						;坐标X水平
$c(A0) 						;坐标高度
$10(A0) 					;坐标y垂直

角色色板:B7A52/b8172(美)
敌人显存:914000+20*1e 91a000
敌兵:FFFFDD14-FFFFC8f4~E0
第一个敌兵:ffd7d4;
滚桶物品:ffd6aA-ffdcCA~E0
打铁桶得到食物武器:ff908A-ff9F8A~C0
灭敌人得到食物武器:ffD08A-ffDF6A~E0
3P:FFB274-FFB3f4-FFB574~180
P1无敌:FFB274=02,FFB360=0002
0246B2              ;0246B2=60 Never lose weapons
$ffb27c				;1P坐标X Y=ffb284 zfr
FFB314				;1P按键
FFB316              ;?
FFB324              ;续命选人时间 bp 70b4
FFB29c				;1P动作
FFB298				;1P朝向
FFB2BD	            ;1P判定框 左受 右攻
FFb345				;1p战后可动  偏移d1

FFB274 1P
FFB274+03=FFB277=ID
FFB274+21=FFB295=ID*4
FFB274+22=跑向
FFB274+24=面向
FFB274+28=FFB29C=当前图像
FFB274+46=FFB2BA=ID*C
FFB274+64=位移表
FFB274+A0=FFB314=按键
FFB274+AC=跑向
FFB274+BC=跑键
FFB274+F4=下上A键
FFB274+FA=跑时
FFB274+FC=跑标
FFDC34 Boss1 

MOVE.L   #0x2000200,(0x4,A6)	;设置跑动状态
MOVE.L   #0x2000002,(0x4,A6)	;写入移动状态
A6+5		;00一般19090 02被打1C02C 04抓人1D652 06被抓1D2BE
A6+6		;00站立中190CA 02跑动中19FA8 04浮空中1A58C
A6+7 ;00站立1916E 02移动192DE 04出拳19416 06击中1947E 08二拳1953E 0A三拳1959C 0C四拳1965A 0E女人保险196F2 
10老大跑踢197A2 12跑踢19826 14捡取198B4 16一般道具19954 18-19A0A 1A合体被推19A7C 1C原地机枪19AEA 1E移动机枪19B90 
20长棍19C62 22火箭筒19D5E 24女人下上拳19E24 26老四下上拳19E7E 28下上拳落地19E9A 2A-19EB2 2C举井盖19F6A

A6+BD		;上次RUNDIR
A6+24		;设置Flip
A6+22		;设置DIR
A6+64.l		;获取位移表
A6+14		;设置XMove
A6+18		;设置YMove
A6+AC		;上次DIR 好像不是
A6+A0       ;按键
A6+A4       ;?
A6+A8       ;新按键
A6+A9       ;
A6+B6       ;?
A6+44       ;?
A6+1A       ;?
A6+08       ;X坐标
A6+10       ;Y坐标
A6+0C       ;高度及时坐标
A6+1C       ;跳高度计数MOVE
-----------------------------------------------------------------------------------------------------------------
$FFD814     		;first敌兵
$FF879C 			;坐标X
$FF879E 			;坐标Y
$FF846d             ;投币界面,ff847d,ff848d, ff849d
$FF84EF  			;模式,游戏人数
$FF84E9    			;Infinite Time =09
$FF8635				;Infinite Character Select Time=0A
$FF84DD				;改1往前走几步;人物不能被控制bp 189d6,zfr 
$FF84D6			    ;BOSS死触发写01
$ffb8f4             ;敌兵基址 zfr 23420: lea ($48f4,A5), A6

#7,$FFF75c 		;难度
#7,$FFF768 		;难度          
#3,$FFF75f 		;难度2
#3,$FFF76c		;难度2
$FF84D1 $06             ;Finish Episode Now!
$FF84D1 $06+$FF84D9 $07 ;See End Sequence Now!

BDC			（开场英文字体颜色）
9DF08		开场英文地址
97f66,97fa0	开场英文地址
2c9b6		暴击地址
19690、10B0C、10B14	美版AB掉血指令
10B1E     （AB掉血指令）
FFDD34		监视点写入，找出随机队列
105000		随机队列地址
FFDD80		第一个兵ffdd14血量地址
31438		加血指令
3145A		血量库
ABE8关卡加一指令，ff84d0迅速过关地址
24e34（机枪）,24E5E（M16）,24E84（霰弹枪）,24EAA（火箭筒弹药指令）,24EEE（猎枪）,24F14（手枪）
104F50、60	关底随机副boss队列
1050C0至105110关底随机小兵队列
26266	    召唤炸弹指令 血战版？
25902		开枪减子弹指令
FF8635		开局选人时间
AFC0, AE3E	时间赋值指令
AF8A 		减时间指令
28518		补给子弹断点
28570		弹夹静态数据
2855A	步枪
28572	UZI
2857A	M16
2858A	火箭炮
28562	手枪子弹
28582	霰弹枪

BP FCA2	读取卷轴
bp fdb2	出兵
BP FC22	兵表格基址
2C8e8	暴击表
bp 6006	加载颜色
ffef7c	马基址
1d86C5	2BFF查表
1D1880	马云查表
6c46	AB无敌时间
90a198	1P敌人血开
90a190	1P血开
9145A0	1P血条色
9145A8	1P敌人血色
2346a	加载敌人ID
bp 8e70	加载敌人场景颜色
bp 7BF18	BOSS战派兵基址
BP 7B354	3C派兵相关
bp 9639e	幻影影子载入  4C37C  4C684
bp 1173c	暴击血量分段
bp 7170     换小头像
9145c0	暴击样式细调  BA27C
914420	暴击样式细调  BA0DC

6FDEC ;白人动作相关表格;2BOSS?
9E41C ;白人动作相关表格;站立等
9EDFE ;白人动作相关表格;攻击
9F094 ;白人动作相关表格;受击
9F252 ;白人动作相关表格;投技
9EACC ;白人动作相关表格;持物
-----------------------------------------------------------------------------------------------------------------
163E徒手表 164E攻击表 165E被打表 166E抓人表 167E被抓表 168E持械表 A26FC道具B表 2C88E防御力表 11D220判定筐编号表？(FFFF4)=D0CF4图形基址?
2E68C 怪物被击总表 97150汽车动作表 9786E

9E41C老大徒手 9EACC老大持械 9EDFE老大攻击 9F094老大被打 9F252老大抓人 9F30E老大被抓 A270C老大道具B
A06AC女人徒手 A0E8C女人持械 A115A女人攻击 A13D8女人被打 A1596女人抓人 A1622女人被抓 A2ADC女人道具B
A16F0老四徒手 A1D32老四持械 A1FFC老四攻击 A232E老四被打 A24E0老四抓人 A25DA老四被抓 A2CBC老四道具B

9F414黄帽徒手
00-042原地	01-0B0走动	02-142跑动	03-1BC原地跳	04-1FA前翻跳	05-244后翻跳	06-28E跳落地	07-206原地翻跳
08-29C跑动跳	09-15A跑动	0A-2C2捡取	0B-2DC械跑下身	0C-250后翻跳	0D-33E跑动踢落地	0E-358胜利	0F-3BA摔投
10-3E0走动下身	11-472失败	12-480弹墙跳	13-4D6下蹲	14-4F0前翻跳	15-52E跑动拳	16-554下蹲	17-57A跑动
18-5F4迷跑下身	19-592跑动	1A-592		1B-656原地跳	1C-6AC跑动跳	1D-702开车上身	1E-71C跳飞腿落地	1F-736举箱子

9FB94黄帽持械
00-040手枪	01-04E步枪	02-05C轻机枪	03-06A重机枪	04-078散弹枪	05-086长棍	06-094举箱子	07-0A2步枪上身
08-0B0轻机枪上身	09-0BE重机枪上身	0A-0CC散弹枪上身	0B-0DA步枪开枪	0C-100重机枪开枪	0D-126手枪开枪	0E-140步枪开枪	0F-15A散弹枪开枪
10-174轻机枪开枪	11-19A出刀出短棍	12-1C0丢刀丢雷	13-1E6出长棍	14-218扔箱子	15-23E轻机枪上身	16-264跑丢刀上身	17-28A举箱子跳
18-2A4持枪跑上身	19-2B2 CAP?	1A-2C0持枪走上身	1B-2CE扔箱子	1C-2F4扔箱子	1D-31A举箱子落地	1E-328举箱子跳

9FECA黄帽攻击
00-022第一拳出拳	01-02E第一拳挥空	02-48第一拳击中	03-062第三拳出拳	04-094第四拳挥空	05-0D2第三拳击中	06-0EC第四拳击中	07-0A0第四拳挥空
08-112 AB	09-300跑动拳上身	0A-332跳飞腿	0B-34C跳踢	0C-37E跑动拳	0D-3A4跳踢	0E-3D6下上A	0F-444下上A收招

A0328黄帽被打
00-01A正面头被打	01-028正面肚被打	02-036正面仰面倒炸飞 03-074爬起	04-0CA晕眩	05-0FC被打倒靠墙	06-122背面腰被打	07-130背面被打倒
08-16E正面打肚倒	09-1AC趴着	0A-1BA趴下爬起	0B-1C8躺着

A04FE黄帽抓人 A0596黄帽被抓 A28EC黄帽道具B
00-00C抓人	01-01A抓人拳击	02-040抓人膝顶	03-066抓人摔投	04-066

438F2 Boss1动作
00-038站立	01-044移动	02-082跳跃	03-0A2落地?助跑?	04-0AE跑动	05-0D8被抓	06-0F8出拳准备	07-136出拳
08-156脚踩	09-176重拳	0A-1A0反下踢	0B-1B6跳踢	0C-1E0掏枪	0D-1EC鸣枪	0E-234开枪	0F-272持枪移动
10-2B0开枪	11-370防御?	12-386 ???	13-3A6跑动	14-3D0被抓?愤怒?	15-404站立发呆	16-096跳跃	17-46A跳跃		
18-480跳踢	19-4AA移动	1A-542跳跃

2FBE2 Boss1被打
00-018正面肚被打	01-018		02-062击仰倒	03-024击肚倒	04-0A2爬起	05-0CC晕眩	06-018贴墙	07-062炸飞
08-148摔投	09-186平死	0A-1B0仰死
-----------------------------------------------------------------------------------------------------------------
* B-Board 91635B-2 */
ROM_START( dino )
	ROM_REGION( CODE_SIZE, "maincpu", 0 )      /* 68000 code */
	ROM_LOAD16_WORD_SWAP( "cde_23a.8f", 0x000000, 0x80000, CRC(8f4e585e) SHA1(55ecba3652066cdafad140c4524b1fc81228e69b) )
	ROM_LOAD16_WORD_SWAP( "cde_22a.7f", 0x080000, 0x80000, CRC(9278aa12) SHA1(58cbbd53a98abe640ccb233f8dbd8ca6d63475e7) )
	ROM_LOAD16_WORD_SWAP( "cde_21a.6f", 0x100000, 0x80000, CRC(66d23de2) SHA1(19b8a365f630411d524d055459020f4c8cf930f1) )

	ROM_REGION( 0x400000, "gfx", 0 )
	ROMX_LOAD( "cd-1m.3a",  0x000000, 0x80000, CRC(8da4f917) SHA1(4f7b2304b7d9b545d6707d7ec921d3e28200699d) , ROM_GROUPWORD | ROM_SKIP(6) )
	ROMX_LOAD( "cd-3m.5a",  0x000002, 0x80000, CRC(6c40f603) SHA1(cdbd11dfcec08e87355d7e21e9fd39f7eacab016) , ROM_GROUPWORD | ROM_SKIP(6) )
	ROMX_LOAD( "cd-2m.4a",  0x000004, 0x80000, CRC(09c8fc2d) SHA1(d0c0a1258ec5dd484ab6ec1c5663425431f929ee) , ROM_GROUPWORD | ROM_SKIP(6) )
	ROMX_LOAD( "cd-4m.6a",  0x000006, 0x80000, CRC(637ff38f) SHA1(859926b33b9955b3ed67471c61faa442d42b9696) , ROM_GROUPWORD | ROM_SKIP(6) )
	ROMX_LOAD( "cd-5m.7a",  0x200000, 0x80000, CRC(470befee) SHA1(a42e38319e9b7424381352512f11bd8edf0bbb96) , ROM_GROUPWORD | ROM_SKIP(6) )
	ROMX_LOAD( "cd-7m.9a",  0x200002, 0x80000, CRC(22bfb7a3) SHA1(c44959bd3d42b9fc8ecb482dfaf63fbd469d2c3e) , ROM_GROUPWORD | ROM_SKIP(6) )
	ROMX_LOAD( "cd-6m.8a",  0x200004, 0x80000, CRC(e7599ac4) SHA1(0e788a38547a8701115d01190ddeaca64388db4d) , ROM_GROUPWORD | ROM_SKIP(6) )
	ROMX_LOAD( "cd-8m.10a", 0x200006, 0x80000, CRC(211b4b15) SHA1(374f6b185faa0f14f5c45b9b1d60d0772d93fb17) , ROM_GROUPWORD | ROM_SKIP(6) )

	ROM_REGION( 0x28000, "audiocpu", 0 ) /* QSound Z80 code */
	ROM_LOAD( "cd_q.5k",    0x00000, 0x08000, CRC(605fdb0b) SHA1(9da90ddc6513aaaf2260f0c69719c6b0e585ba8c) )
	ROM_CONTINUE(           0x10000, 0x18000 )

	ROM_REGION( 0x200000, "qsound", 0 ) /* QSound samples */
	ROM_LOAD( "cd-q1.1k",   0x000000, 0x80000, CRC(60927775) SHA1(f8599bc84c38573ebbe8685822c58b6a38b50462) )
	ROM_LOAD( "cd-q2.2k",   0x080000, 0x80000, CRC(770f4c47) SHA1(fec8ef00a6669d4d5e37787ecc7b58ee46709326) )
	ROM_LOAD( "cd-q3.3k",   0x100000, 0x80000, CRC(2f273ffc) SHA1(f0de462f6c4d251911258e0ebd886152c14d1586) )
	ROM_LOAD( "cd-q4.4k",   0x180000, 0x80000, CRC(2c67821d) SHA1(6e2528d0b22508300a6a142a796dd3bf53a66946) )

	ROM_REGION( 0x0200, "aboardplds", 0 )
	ROM_LOAD( "buf1",         0x0000, 0x0117, CRC(eb122de7) SHA1(b26b5bfe258e3e184f069719f9fd008d6b8f6b9b) )
	ROM_LOAD( "ioa1",         0x0000, 0x0117, CRC(59c7ee3b) SHA1(fbb887c5b4f5cb8df77cec710eaac2985bc482a6) )
	ROM_LOAD( "prg2",         0x0000, 0x0117, CRC(4386879a) SHA1(c36896d169d8c78393609acbbe4397931292a033) )
	ROM_LOAD( "rom1",         0x0000, 0x0117, CRC(41dc73b9) SHA1(7d4c9f1693c821fbf84e32dd6ef62ddf14967845) )

	ROM_REGION( 0x0200, "bboardplds", 0 )
	ROM_LOAD( "cd63b.1a",     0x0000, 0x0117, CRC(ef72e902) SHA1(82fea3f63869c245d0dce2809085208fe719b57a) )
	ROM_LOAD( "iob1.12d",     0x0000, 0x0117, CRC(3abc0700) SHA1(973043aa46ec6d5d1db20dc9d5937005a0f9f6ae) )
	ROM_LOAD( "bprg1.11d",    0x0000, 0x0117, CRC(31793da7) SHA1(400fa7ac517421c978c1ee7773c30b9ed0c5d3f3) )

	ROM_REGION( 0x0200, "cboardplds", 0 )
	ROM_LOAD( "ioc1.ic1",     0x0000, 0x0104, CRC(a399772d) SHA1(55471189db573dd61e3087d12c55564291672c77) )

	ROM_REGION( 0x0200, "dboardplds", 0 )
	ROM_LOAD( "d7l1.7l",      0x0000, 0x0117, CRC(27b7410d) SHA1(06d0cba0226850f100ff1f539bd7d5db0f90c730) )
	ROM_LOAD( "d8l1.8l",      0x0000, 0x0117, CRC(539fc7da) SHA1(cad5c91629c6247e49ccbbcbfe6b08229eafae07) )
	ROM_LOAD( "d9k2.9k",      0x0000, 0x0117, CRC(cd85a156) SHA1(a88f8939c5d93e65d7bcc0eb3ee5b6f4f1114e3a) )
	ROM_LOAD( "d10f1.10f",    0x0000, 0x0117, CRC(6619c494) SHA1(3aef656c07182a2186f810f30e0d854dd5bd8d18) )
ROM_END

/* B-Board 91635B-2 */
ROM_START( dinou )
	ROM_REGION( CODE_SIZE, "maincpu", 0 )      /* 68000 code */
	ROM_LOAD16_WORD_SWAP( "cdu_23a.8f", 0x000000, 0x80000, CRC(7c2543cd) SHA1(6b7a90392fe4c31b2d57620b0ddcb3412401efc3) )
	ROM_LOAD16_WORD_SWAP( "cdu_22a.7f", 0x080000, 0x80000, CRC(d19f981e) SHA1(acb951caba3867c21149286185b94beb37721bd2) )
	ROM_LOAD16_WORD_SWAP( "cdu_21a.6f", 0x100000, 0x80000, CRC(66d23de2) SHA1(19b8a365f630411d524d055459020f4c8cf930f1) )   // == cde_21a.6f

	ROM_REGION( 0x400000, "gfx", 0 )
	ROMX_LOAD( "cd-1m.3a",  0x000000, 0x80000, CRC(8da4f917) SHA1(4f7b2304b7d9b545d6707d7ec921d3e28200699d) , ROM_GROUPWORD | ROM_SKIP(6) )
	ROMX_LOAD( "cd-3m.5a",  0x000002, 0x80000, CRC(6c40f603) SHA1(cdbd11dfcec08e87355d7e21e9fd39f7eacab016) , ROM_GROUPWORD | ROM_SKIP(6) )
	ROMX_LOAD( "cd-2m.4a",  0x000004, 0x80000, CRC(09c8fc2d) SHA1(d0c0a1258ec5dd484ab6ec1c5663425431f929ee) , ROM_GROUPWORD | ROM_SKIP(6) )
	ROMX_LOAD( "cd-4m.6a",  0x000006, 0x80000, CRC(637ff38f) SHA1(859926b33b9955b3ed67471c61faa442d42b9696) , ROM_GROUPWORD | ROM_SKIP(6) )
	ROMX_LOAD( "cd-5m.7a",  0x200000, 0x80000, CRC(470befee) SHA1(a42e38319e9b7424381352512f11bd8edf0bbb96) , ROM_GROUPWORD | ROM_SKIP(6) )
	ROMX_LOAD( "cd-7m.9a",  0x200002, 0x80000, CRC(22bfb7a3) SHA1(c44959bd3d42b9fc8ecb482dfaf63fbd469d2c3e) , ROM_GROUPWORD | ROM_SKIP(6) )
	ROMX_LOAD( "cd-6m.8a",  0x200004, 0x80000, CRC(e7599ac4) SHA1(0e788a38547a8701115d01190ddeaca64388db4d) , ROM_GROUPWORD | ROM_SKIP(6) )
	ROMX_LOAD( "cd-8m.10a", 0x200006, 0x80000, CRC(211b4b15) SHA1(374f6b185faa0f14f5c45b9b1d60d0772d93fb17) , ROM_GROUPWORD | ROM_SKIP(6) )

	ROM_REGION( 0x28000, "audiocpu", 0 ) /* QSound Z80 code */
	ROM_LOAD( "cd_q.5k",    0x00000, 0x08000, CRC(605fdb0b) SHA1(9da90ddc6513aaaf2260f0c69719c6b0e585ba8c) )
	ROM_CONTINUE(           0x10000, 0x18000 )

	ROM_REGION( 0x200000, "qsound", 0 ) /* QSound samples */
	ROM_LOAD( "cd-q1.1k",   0x000000, 0x80000, CRC(60927775) SHA1(f8599bc84c38573ebbe8685822c58b6a38b50462) )
	ROM_LOAD( "cd-q2.2k",   0x080000, 0x80000, CRC(770f4c47) SHA1(fec8ef00a6669d4d5e37787ecc7b58ee46709326) )
	ROM_LOAD( "cd-q3.3k",   0x100000, 0x80000, CRC(2f273ffc) SHA1(f0de462f6c4d251911258e0ebd886152c14d1586) )
	ROM_LOAD( "cd-q4.4k",   0x180000, 0x80000, CRC(2c67821d) SHA1(6e2528d0b22508300a6a142a796dd3bf53a66946) )

	ROM_REGION( 0x0200, "aboardplds", 0 )
	ROM_LOAD( "buf1",         0x0000, 0x0117, CRC(eb122de7) SHA1(b26b5bfe258e3e184f069719f9fd008d6b8f6b9b) )
	ROM_LOAD( "ioa1",         0x0000, 0x0117, CRC(59c7ee3b) SHA1(fbb887c5b4f5cb8df77cec710eaac2985bc482a6) )
	ROM_LOAD( "prg2",         0x0000, 0x0117, CRC(4386879a) SHA1(c36896d169d8c78393609acbbe4397931292a033) )
	ROM_LOAD( "rom1",         0x0000, 0x0117, CRC(41dc73b9) SHA1(7d4c9f1693c821fbf84e32dd6ef62ddf14967845) )

	ROM_REGION( 0x0200, "bboardplds", 0 )
	ROM_LOAD( "cd63b.1a",     0x0000, 0x0117, CRC(ef72e902) SHA1(82fea3f63869c245d0dce2809085208fe719b57a) )
	ROM_LOAD( "iob1.12d",     0x0000, 0x0117, CRC(3abc0700) SHA1(973043aa46ec6d5d1db20dc9d5937005a0f9f6ae) )
	ROM_LOAD( "bprg1.11d",    0x0000, 0x0117, CRC(31793da7) SHA1(400fa7ac517421c978c1ee7773c30b9ed0c5d3f3) )

	ROM_REGION( 0x0200, "cboardplds", 0 )
	ROM_LOAD( "ioc1.ic1",     0x0000, 0x0104, CRC(a399772d) SHA1(55471189db573dd61e3087d12c55564291672c77) )

	ROM_REGION( 0x0200, "dboardplds", 0 )
	ROM_LOAD( "d7l1.7l",      0x0000, 0x0117, CRC(27b7410d) SHA1(06d0cba0226850f100ff1f539bd7d5db0f90c730) )
	ROM_LOAD( "d8l1.8l",      0x0000, 0x0117, CRC(539fc7da) SHA1(cad5c91629c6247e49ccbbcbfe6b08229eafae07) )
	ROM_LOAD( "d9k2.9k",      0x0000, 0x0117, CRC(cd85a156) SHA1(a88f8939c5d93e65d7bcc0eb3ee5b6f4f1114e3a) )
	ROM_LOAD( "d10f1.10f",    0x0000, 0x0117, CRC(6619c494) SHA1(3aef656c07182a2186f810f30e0d854dd5bd8d18) )
ROM_END