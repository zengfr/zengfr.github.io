"use strict";(self.webpackChunkvuepress_deploy=self.webpackChunkvuepress_deploy||[]).push([[479],{962:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-8617f9d4",path:"/ffight.html",title:"ffight",lang:"zh-CN",frontmatter:{title:"ffight"},excerpt:"",headers:[{level:2,title:"ffight hack rom data",slug:"ffight-hack-rom-data",children:[]}],filePathRelative:"ffight.md",git:{updatedTime:1618378209e3,contributors:[]}}},874:(n,s,a)=>{a.r(s),a.d(s,{default:()=>r});const e=(0,a(252).uE)('<h1 id="ffight" tabindex="-1"><a class="header-anchor" href="#ffight" aria-hidden="true">#</a> ffight</h1><h2 id="ffight-hack-rom-data" tabindex="-1"><a class="header-anchor" href="#ffight-hack-rom-data" aria-hidden="true">#</a> ffight hack rom data</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Top Secret Series-Important Address-Treasure Collection(Organize zengfr).txt\ngithub:https://github.com/zengfr/romhack\nhttps://gitee.com/zengfr/romhack\n\nhttps://github.com/zengfr/arcade_game_romhacking_sourcecode_top_secret_data/dino/trace\n\n---------------------------------------------------------------------------------------------------------------------\n快打旋风\ndbg mode:wp ff8084,1,rw,1,{pb@ff8084=1;g}\n$3bec ; Random\n5e7b6 reset\n14C2 17DC draw_string/hide_string\n126c 打印字符串\n165C8 900000\nFF8129 (b)过关 4d40 Gameplay demo switch,sublevel outro (00 = not in demo, 01 = in demo, FF = signal demo end?)\n90B014\t- First visible tile of leftmost dynamite scene portrait, SCROLL2\n{address = 0xFF8568, number = 0x0F, space = 0xC0, hp = 0x18}, --players and enemies\n\t\t{address = 0xFF90A8, number = 0x06, space = 0xC0, projectile = true}, --weapons\n\t\t{address = 0xFF9528, number = 0x08, space = 0xC0, hp = 0x18}, --bosses and enemies\n\t\tFF9B28-FFB2E7 ,number = 0x1f, space = 0xC0\n\t\t{address = 0xFFB2E8, number = 0x10, space = 0xC0, hp = 0x18, projectile = true}, --containers\n\t\t{address = 0xFFBEE8, number = 0x0A, space = 0xC0, projectile = true}, --items\nFF86e8 to Ff90a7 Enemy memory regions, c0 bytes each, 13 slots\nFF90a8 to FF9527 Weapons, c0 bytes each, 6 slots\nFF9528 to FF9B27 Boss memory, c0 bytes each, 8 slots ff9a68\nFF8568 P1\n0x00E6D0;Intro demos\n0x00CBF6;Middle demos\n0x00F4F8;Outro demos\nwp 908610,2,w 血条\nFF8581(18) P1 Infinite Energy\nFF85C9(61) P1 Invincibility无敌 r:32cc,a79e,a7a4 w:79d4被打\nFF85E8(80)(b) lives\nFF85EA(82)(b) 1P Input\nFF860B(a3)(b) 00 02 04 06 动作组合\nFF8590(28)(b)=01 Action Speed Up\nFF9a68 boss 79c0,3ce4敌兵减血\nffb1e8 xx基址 bp 5b0a 5b76\nff1150,ff1152 bp 3bec\nbp 79c0,1,{printf &quot;%8x %8x %8x %8x &quot;,frame,pc,a3,pb@FF85C9;pb@FF85C9=0x28;g}\nbp 79d4,1,{printf &quot;%8x %8x %8x %8x &quot;,frame,pc,a3,pb@FF85C9;pb@FF85C9=0x28;g}\nbp 5ea8,1,{printf &quot;db1 %8x %8x %8x %8x %8x %8x %8x %8x&quot;,frame,pc,a4,a3,pd@(a3+0),pd@(a3+4),pd@(a3+8),pw@(a3+c);g}\nbp 6210,1,{printf &quot;db2 %8x %8x %8x %8x %8x %8x %8x %8x&quot;,frame,pc,a4,a3,pd@(a3+0),pd@(a3+4),pd@(a3+8),pw@(a3+c);g}\nbp 1faf2,1,{printf &quot;db3 %8x %8x %8x %8x %8x %8x&quot;,frame,pc,a4,a0,a2,pd@(a0+0),pd@(a2+0);g}\n($12,A4)         ;entity class ID 0 2 敌兵 4 6 8 敌兵 a 物品箱子  080f门\n($13,A4)\t\t; player ID \n($15,A4)\t\t; 敌兵掉物 \n($18,A4)\t\t; hp\n($2F,A4)\t\t; palette ID色板\n($2e,A6)        ;1P Direction facing 00 = right, 01 = left\n($36,A6)        ;Movement direction\n($3f,A6)        ;\n($60,A6)        ;\n($62,A6)        ; \n($70,A6)        ;\n($6,A2)   ; X position  FF856e\n($a,A2)   ; y position  FF8572\n($20,A2)  ; Head x position\n\n\n($412,A5)  ; Level scroll x\n($416,A5)  ; Level scroll y\n$31A8(a5) $31e8(a5) ;场景 出兵指针\nbp 3a12 敌兵死清内存\nbp 61ba 5ea8 1faf2 敌兵分配内存\na5956 箱子打破掉物\n354ba 敌兵掉武器\n6d0ca 大箱子\n6ec1a\n108c投币1134减币进入选人\ndb1:5EA74,5EA7C,414,A2C6,9ACA,61C0,3A12,5EAE,A5CC,9F8C,,,,,\ndb2:3D13A,5A95C,\ndb4:595AC\ndb5:5A924,\n \n---------------------------------------------------------------------------------------------------------------------</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br></div></div>',3),r={render:function(n,s){return e}}}}]);