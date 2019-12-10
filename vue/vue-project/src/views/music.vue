<template>
  <div class="music">
    <van-tabs v-model="active" animated sticky :offset-top="96">
      <van-tab title="推荐">
        <div class="content">
          <div class="c">
            <div class="sp">
              <img
                src="https://i0.hdslb.com/bfs/archive/435331e6c5fdc07d777293de7bc556a20ab523a0.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">100万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">856</p>
              </div>
              <p class="title">【腾格尔】《丑八怪》我裂开了…</p>
            </div>
            <div class="sp">
              <img
                src="https://i0.hdslb.com/bfs/archive/5c149ed19db23996540c389c4525c6877527dc49.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">440.9万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">8.2万</p>
              </div>
              <p class="title">现场版流出？腾格尔香菜《恋爱循环》？？我裂开来！</p>
            </div>
            <div class="sp">
              <img
                src="https://i2.hdslb.com/bfs/archive/752d7671a353753b13014a0715e79628a957bb51.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">74.6万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">3699</p>
              </div>
              <p class="title">腾格尔演唱的《恋爱循环》竟被提前偷跑？！！【KBShinya】【模仿翻唱】</p>
            </div>
            <div class="sp">
              <img
                src="https://i2.hdslb.com/bfs/archive/c275b0df54742c532220a3f484923bc5117756ea.png"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">115.7万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">2477</p>
              </div>
              <p class="title">《2019天猫双11狂欢夜》花泽香菜演唱《恋爱循环》（超清版） 191110</p>
            </div>
            <div class="sp">
              <img
                src="https://i0.hdslb.com/bfs/archive/abf2361f9ba1f0908583dbfc471aa1aaebebd480.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">96.8万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">2638</p>
              </div>
              <p class="title">宫墙柳（超虐超长时长预警！/知乎小说《宫墙柳》同名原创曲/伪预告向真人剧情剪辑PV）【好看组原创】</p>
            </div>
            <div class="sp">
              <img
                src="https://i1.hdslb.com/bfs/archive/01e81ec30aa0191ec767d7027d3439bae01fe58f.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">173.3万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">3936</p>
              </div>
              <p class="title">【RADWIMPS】《天气之子》片中曲『グランドエスケープ』完整版 MV【中字】</p>
            </div>
            <div class="sp">
              <img
                src="https://i2.hdslb.com/bfs/archive/326b7d07c21a9246e5973fac818dba350d8ff612.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">173.3万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">3936</p>
              </div>
              <p class="title">你可曾听过吉他的咆哮！！！爆燃改编 林肯公园 Numb 吉他演奏指弹独奏 弦花</p>
            </div>
            <div class="sp">
              <img
                src="https://i0.hdslb.com/bfs/archive/e9a53948e3a1bb902ff077566d4aa6e820c5b156.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">173.3万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">3936</p>
              </div>
              <p class="title">【明日方舟】《罗德岛disco》魔鬼填词&沙雕演唱！每天三遍！告别许愿！</p>
            </div>
            <div class="sp">
              <img
                src="https://i2.hdslb.com/bfs/archive/e128bcd0efb63315af0be180ed619534eb0246be.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">173.3万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">3936</p>
              </div>
              <p class="title">【张艺兴】天猫双十一晚会《BOSS》+《HONEY》合集</p>
            </div>
            <div class="sp">
              <img
                src="https://i0.hdslb.com/bfs/archive/93fd210d1796b1b2e1c90f3206f88f4b4b271b4a.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">173.3万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">3936</p>
              </div>
              <p class="title">【官方】华晨宇《与火星的孩子对话》MV</p>
            </div>
            <div class="sp">
              <img
                src="https://i0.hdslb.com/bfs/archive/aef6dc906a1a518430425c05d488dcec46555d51.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">173.3万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">3936</p>
              </div>
              <p class="title">the real suger baby已知最高画质</p>
            </div>
            <div class="sp">
              <img
                src="https://i0.hdslb.com/bfs/archive/8365c6ec1f16e0cc88bafd017439d745ee73757d.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">173.3万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">3936</p>
              </div>
              <p class="title">【腾格尔】史上最全翻唱合集让你一次听个够！（持续更新）</p>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="原创音乐">
        <div class="content">
          <div class="c">
            <div class="sp">
              <img
                src="https://i2.hdslb.com/bfs/archive/c1a84559f47a5990ceedd4f71a8828e45a810ec8.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">150.5万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">3856</p>
              </div>
              <p class="title">【音阙诗听/赵方婧】今日立冬，超嗨间奏，蹦迪开启????</p>
            </div>
            <div class="sp">
              <img
                src="https://i1.hdslb.com/bfs/archive/ab841c42bd08357f0b3598a204fe27bea5c1ef13.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">1030万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">1856</p>
              </div>
              <p class="title">【银临】且笑红尘</p>
            </div>
            <div class="sp">
              <img
                src="https://i1.hdslb.com/bfs/archive/69aec957988b6637b6bbbaf4dea7127e9ac86d5b.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">1400万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">8526</p>
              </div>
              <p class="title">《十三州府》绝美高音与磁性低音疯狂轰炸双耳【凯玟桑xBraska】</p>
            </div>
            <div class="sp">
              <img
                src="https://i2.hdslb.com/bfs/archive/291aace599f027bda2a2798c06d44ecd77bdc2d3.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">1070万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">856</p>
              </div>
              <p class="title">B站up主原创RAP diss豫章书院</p>
            </div>
            <div class="sp">
              <img
                src="https://i0.hdslb.com/bfs/archive/974d6874f4bcac76c7cf0e8b4dee7f2558af30ea.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">100万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">8596</p>
              </div>
              <p class="title">【封茗囧菌】月凉画梦</p>
            </div>
            <div class="sp">
              <img
                src="https://i0.hdslb.com/bfs/archive/47e92fc5fb860f054801e57be0df498d7ad8b55f.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">70万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">856</p>
              </div>
              <p class="title">失眠福利！这是一首听了会淋雨会睡着的歌！【睡眠日记第一首】</p>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="翻唱">
        <div class="content">
          <div class="c">
            <div class="sp">
              <img
                src="https://i0.hdslb.com/bfs/archive/37af46d031cd11fa129c8eb8cdb824f6e5192175.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">115.7万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">2477</p>
              </div>
              <p class="title">【英雄联盟】官方音乐短片：真实伤害-《巨人》</p>
            </div>
            <div class="sp">
              <img
                src="https://i2.hdslb.com/bfs/archive/f0dc624e8cff4686d9a809d22a9ca40add3c77f5.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">96.8万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">2638</p>
              </div>
              <p class="title">这样的预告片，我可以去找拳头公司催电影么？</p>
            </div>
            <div class="sp">
              <img
                src="https://i2.hdslb.com/bfs/archive/9e5f4c551b97298d3f9f45f97548752263d7cf23.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">173.3万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">3936</p>
              </div>
              <p class="title">康辉的第一支Vlog：要出趟远门了</p>
            </div>
            <div class="sp">
              <img
                src="https://i0.hdslb.com/bfs/archive/a8782337cf8437ae754b13a59dbd54c53229a616.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">77.1万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">3877</p>
              </div>
              <p class="title">消防员版野狼Disco来了！网友：整挺好</p>
            </div>
            <div class="sp">
              <img
                src="https://i1.hdslb.com/bfs/archive/c7b631f5b4a8028a80adaab709baeb5d58329c7d.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">79.0万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">679</p>
              </div>
              <p class="title">当你用另外一台设备登录你的账号</p>
            </div>
            <div class="sp">
              <img
                src="https://i0.hdslb.com/bfs/archive/16a0c061bc1caa4d8e11d95b49ed04ac7881ac79.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">38万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">2872</p>
              </div>
              <p class="title">《天气の子》的片中曲居然是中文歌？</p>
            </div>
            <div class="sp">
              <img
                src="https://i2.hdslb.com/bfs/archive/78e2a4b9291422ca6fd0ce57a898b86d79dff058.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">150.5万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">3856</p>
              </div>
              <p class="title">小伙逃课去上网，不慎掉入茅厕</p>
            </div>
            <div class="sp">
              <img
                src="https://i2.hdslb.com/bfs/archive/46234f1200ac8d065e9d6abb67cf265a3abe41af.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">1030万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">1856</p>
              </div>
              <p class="title">前方高能！只需10s！我将从你手中抢走硬币！</p>
            </div>
            <div class="sp">
              <img
                src="https://i0.hdslb.com/bfs/archive/435331e6c5fdc07d777293de7bc556a20ab523a0.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">1400万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">8526</p>
              </div>
              <p class="title">【腾格尔】《丑八怪》我裂开了…</p>
            </div>
            <div class="sp">
              <img
                src="https://i0.hdslb.com/bfs/archive/ffdf7be015b4d30d6f0fb838fed533c9fe3bdcb6.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">1070万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">856</p>
              </div>
              <p class="title">FPX世界冠军，兑现FLAG挑战一分钟吃完一大罐儿酸黄瓜！</p>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="电音">
        <div class="content">
          <div class="c">
            <div class="sp">
              <img
                src="https://i0.hdslb.com/bfs/archive/40f7643f3f5957ff6ebc4ab7c18f3d387eab0306.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">74.6万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">3699</p>
              </div>
              <p class="title">【抖腿抖不停】【两个小时重磅献上】Trap Nation - 2019 Best Trap Music</p>
            </div>
            <div class="sp">
              <img
                src="https://i0.hdslb.com/bfs/archive/ae257b74a74fb78db2e6fb245272470254d6614b.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">115.7万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">2477</p>
              </div>
              <p class="title">【天气之子/电音Remix】三浦透子-グランドエスケープ（LeNO3 Remix）</p>
            </div>
            <div class="sp">
              <img
                src="https://i2.hdslb.com/bfs/archive/006e9ec0999b3d6016663b0241ca4f41846a8fb3.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">96.8万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">2638</p>
              </div>
              <p class="title">【Undertale AU音乐】Underverse OST-Booyah![Fresh!Ink'sTheme]</p>
            </div>
            <div class="sp">
              <img
                src="https://i0.hdslb.com/bfs/archive/dd9c5bde44855dbf15a12c8fddb53e4c6f779ab2.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">173.3万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">3936</p>
              </div>
              <p class="title">Remix之主：爱河的若干种remix方式</p>
            </div>
            <div class="sp">
              <img
                src="https://i2.hdslb.com/bfs/archive/4507798ec52799902adb53d73677f42d065520f8.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">77.1万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">3877</p>
              </div>
              <p class="title">2019世界百大DJ排行榜（#51-#1）</p>
            </div>
            <div class="sp">
              <img
                src="https://i0.hdslb.com/bfs/archive/1d236d3f96659feef90984c2c792810904e6118a.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">79.0万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">679</p>
              </div>
              <p class="title">爱河-DJ甜蜜版FL工程走带【Remix/Trance】</p>
            </div>
            <div class="sp">
              <img
                src="https://i0.hdslb.com/bfs/archive/16a0c061bc1caa4d8e11d95b49ed04ac7881ac79.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">38万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">2872</p>
              </div>
              <p class="title">【自制Remix】天气之子 - グランドエスケープ (Seele Remix)</p>
            </div>
            <div class="sp">
              <img
                src="https://i2.hdslb.com/bfs/archive/6c277ba6468d5262ae224e3809d71e6cc6a78ba4.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">150.5万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">3856</p>
              </div>
              <p class="title">百大DJ的耳机里听的是什么？打碟到底是在做什么呢？</p>
            </div>
            <div class="sp">
              <img
                src="https://i2.hdslb.com/bfs/archive/46234f1200ac8d065e9d6abb67cf265a3abe41af.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">1030万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">1856</p>
              </div>
              <p class="title">【这歌烫嘴】把吴亦凡的中国风新曲重新改编成欧美电子？(贰叁 kllll2 Remix)</p>
            </div>
            <div class="sp">
              <img
                src="https://i2.hdslb.com/bfs/archive/72ec022495f134f613fd4404056ac1658594ac8a.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">1400万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">8526</p>
              </div>
              <p class="title">【中文翻译】把你的drop变得更有力量更硬（FL studio教程）</p>
            </div>
            <div class="sp">
              <img
                src="https://i0.hdslb.com/bfs/archive/ffdf7be015b4d30d6f0fb838fed533c9fe3bdcb6.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">1070万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">856</p>
              </div>
              <p class="title">【灵魂改编】我把《天气之子》主题曲做成一首电音（完整版）【附带工程文件下载】</p>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="音乐现场">
        <div class="content">
          <div class="c">
            <div class="sp">
              <img
                src="https://i0.hdslb.com/bfs/archive/740a25fac1251f9a9488d082ea6d7bcb67f8b951.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">74.6万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">3699</p>
              </div>
              <p class="title">48岁那年…儿子把我送进了豫章医院？</p>
            </div>
            <div class="sp">
              <img
                src="https://i0.hdslb.com/bfs/archive/37af46d031cd11fa129c8eb8cdb824f6e5192175.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">115.7万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">2477</p>
              </div>
              <p class="title">【英雄联盟】官方音乐短片：真实伤害-《巨人》</p>
            </div>
            <div class="sp">
              <img
                src="https://i2.hdslb.com/bfs/archive/f0dc624e8cff4686d9a809d22a9ca40add3c77f5.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">96.8万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">2638</p>
              </div>
              <p class="title">这样的预告片，我可以去找拳头公司催电影么？</p>
            </div>
            <div class="sp">
              <img
                src="https://i2.hdslb.com/bfs/archive/9e5f4c551b97298d3f9f45f97548752263d7cf23.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">173.3万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">3936</p>
              </div>
              <p class="title">康辉的第一支Vlog：要出趟远门了</p>
            </div>
            <div class="sp">
              <img
                src="https://i0.hdslb.com/bfs/archive/a8782337cf8437ae754b13a59dbd54c53229a616.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">77.1万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">3877</p>
              </div>
              <p class="title">消防员版野狼Disco来了！网友：整挺好</p>
            </div>
            <div class="sp">
              <img
                src="https://i1.hdslb.com/bfs/archive/c7b631f5b4a8028a80adaab709baeb5d58329c7d.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">79.0万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">679</p>
              </div>
              <p class="title">当你用另外一台设备登录你的账号</p>
            </div>
            <div class="sp">
              <img
                src="https://i0.hdslb.com/bfs/archive/16a0c061bc1caa4d8e11d95b49ed04ac7881ac79.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">38万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">2872</p>
              </div>
              <p class="title">《天气の子》的片中曲居然是中文歌？</p>
            </div>
            <div class="sp">
              <img
                src="https://i2.hdslb.com/bfs/archive/78e2a4b9291422ca6fd0ce57a898b86d79dff058.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">150.5万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">3856</p>
              </div>
              <p class="title">小伙逃课去上网，不慎掉入茅厕</p>
            </div>
            <div class="sp">
              <img
                src="https://i2.hdslb.com/bfs/archive/46234f1200ac8d065e9d6abb67cf265a3abe41af.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">1030万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">1856</p>
              </div>
              <p class="title">前方高能！只需10s！我将从你手中抢走硬币！</p>
            </div>
            <div class="sp">
              <img
                src="https://i0.hdslb.com/bfs/archive/435331e6c5fdc07d777293de7bc556a20ab523a0.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">1400万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">8526</p>
              </div>
              <p class="title">【腾格尔】《丑八怪》我裂开了…</p>
            </div>
            <div class="sp">
              <img
                src="https://i0.hdslb.com/bfs/archive/ffdf7be015b4d30d6f0fb838fed533c9fe3bdcb6.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">1070万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">856</p>
              </div>
              <p class="title">FPX世界冠军，兑现FLAG挑战一分钟吃完一大罐儿酸黄瓜！</p>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="音乐综合">
        <div class="content">
          <div class="c">
            <div class="sp">
              <img
                src="https://i1.hdslb.com/bfs/archive/aaa544cc3da5417cd6e91b312f00d9c39f1c987e.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">74.6万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">3699</p>
              </div>
              <p class="title">48岁那年…儿子把我送进了豫章医院？</p>
            </div>
            <div class="sp">
              <img
                src="https://i0.hdslb.com/bfs/archive/37af46d031cd11fa129c8eb8cdb824f6e5192175.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">115.7万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">2477</p>
              </div>
              <p class="title">【英雄联盟】官方音乐短片：真实伤害-《巨人》</p>
            </div>
            <div class="sp">
              <img
                src="https://i2.hdslb.com/bfs/archive/f0dc624e8cff4686d9a809d22a9ca40add3c77f5.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">96.8万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">2638</p>
              </div>
              <p class="title">这样的预告片，我可以去找拳头公司催电影么？</p>
            </div>
            <div class="sp">
              <img
                src="https://i2.hdslb.com/bfs/archive/9e5f4c551b97298d3f9f45f97548752263d7cf23.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">173.3万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">3936</p>
              </div>
              <p class="title">康辉的第一支Vlog：要出趟远门了</p>
            </div>
            <div class="sp">
              <img
                src="https://i0.hdslb.com/bfs/archive/a8782337cf8437ae754b13a59dbd54c53229a616.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">77.1万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">3877</p>
              </div>
              <p class="title">消防员版野狼Disco来了！网友：整挺好</p>
            </div>
            <div class="sp">
              <img
                src="https://i1.hdslb.com/bfs/archive/c7b631f5b4a8028a80adaab709baeb5d58329c7d.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">79.0万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">679</p>
              </div>
              <p class="title">当你用另外一台设备登录你的账号</p>
            </div>
            <div class="sp">
              <img
                src="https://i0.hdslb.com/bfs/archive/16a0c061bc1caa4d8e11d95b49ed04ac7881ac79.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">38万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">2872</p>
              </div>
              <p class="title">《天气の子》的片中曲居然是中文歌？</p>
            </div>
            <div class="sp">
              <img
                src="https://i2.hdslb.com/bfs/archive/78e2a4b9291422ca6fd0ce57a898b86d79dff058.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">150.5万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">3856</p>
              </div>
              <p class="title">小伙逃课去上网，不慎掉入茅厕</p>
            </div>
            <div class="sp">
              <img
                src="https://i2.hdslb.com/bfs/archive/46234f1200ac8d065e9d6abb67cf265a3abe41af.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">1030万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">1856</p>
              </div>
              <p class="title">前方高能！只需10s！我将从你手中抢走硬币！</p>
            </div>
            <div class="sp">
              <img
                src="https://i0.hdslb.com/bfs/archive/435331e6c5fdc07d777293de7bc556a20ab523a0.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">1400万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">8526</p>
              </div>
              <p class="title">【腾格尔】《丑八怪》我裂开了…</p>
            </div>
            <div class="sp">
              <img
                src="https://i0.hdslb.com/bfs/archive/ffdf7be015b4d30d6f0fb838fed533c9fe3bdcb6.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">1070万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">856</p>
              </div>
              <p class="title">FPX世界冠军，兑现FLAG挑战一分钟吃完一大罐儿酸黄瓜！</p>
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
    data() {
    return {
      active: 0
    };
  }
};
</script>


<style scoped>
.van-tab {
  width: 100%;
}
.content {
  width: 100%;
  padding-top: 20px;
}
.c {
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
}
.sp {
  width: 50%;
  float: left;
  margin-bottom: 25px;
  position: relative;
  box-sizing: border-box;
}
.c div img {
  width: 170px;
  height: 106px;
  display: block;
  border-radius: 5px;
  margin: 0 auto;
}
.num {
  width: 100%;
  height: 16px;
  position: absolute;
  bottom: 25px;
  left: 5px;
  margin-left: 10px;
}
.title {
  width: 90%;
  height: 20px;
  font-size: 13px;
  line-height: 20px;
  /* position: absolute; */
  bottom: 0;
  left: 0;
  color: black;
  margin-left: 10px;
}
.bf {
  float: left;
  margin-left: 3px;
  color: aliceblue;
  line-height: 16px;
}
.b {
  float: left;
}
.dm {
  float: left;
  margin-left: 30px;
}
</style>