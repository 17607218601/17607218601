<template>
  <div class="china">
    <van-tabs v-model="active" animated sticky :offset-top="96">
      <van-tab title="推荐">
        <div class="content">
          <div class="c">
            <div class="sp">
              <img
                src="https://i2.hdslb.com/bfs/archive/a6760f38f7e435029690299ca22f8ab6bc03fb49.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">82.3万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">2856</p>
              </div>
              <p class="title">20年B站竟有那么多国漫大作？保证让你爽！8分钟带你看明年国漫新作！</p>
            </div>
            <div class="sp">
              <img
                src="https://i1.hdslb.com/bfs/archive/b09c966d2eb181d19f14bb6c2ce21147a3de9e15.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">62.9万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">1.0万</p>
              </div>
              <p class="title">为啥90后童年百花齐放，00后童年只有喜羊羊？【国动万象】</p>
            </div>
            <div class="sp">
              <img
                src="https://i2.hdslb.com/bfs/archive/2e5b53874e600344c61b187ecd70c9cb55e592bc.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">74.6万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">3699</p>
              </div>
              <p class="title">国产动画不止于此！点亮国创未来的星星之火！【2019小宇宙新星计划】</p>
            </div>
            <div class="sp">
              <img
                src="https://i0.hdslb.com/bfs/archive/8f6fdf05f3af9fa42464d5f767b8ff2bd5d52aef.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">115.7万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">2477</p>
              </div>
              <p class="title">这才是中国文化特色的国产动画！能虐哭你的文化输出！【国漫槽推荐13】</p>
            </div>
            <div class="sp">
              <img
                src="https://i2.hdslb.com/bfs/archive/5473b50355274981bea95fbb08bcb2e8aca197d6.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">96.8万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">2638</p>
              </div>
              <p class="title">【白蛇缘起】小青 - 试镜</p>
            </div>
            <div class="sp">
              <img
                src="https://i0.hdslb.com/bfs/archive/07db0d63121efc0cb81cd455d25e704898ede5e2.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">173.3万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">3936</p>
              </div>
              <p class="title">遮天：最特别的大帝，逆天翻盘证道为帝，其他帝姿级人物都得靠边</p>
            </div>
            <div class="sp">
              <img
                src="https://i0.hdslb.com/bfs/archive/b23f35c113ecd48b78e03fa91e2b7077224658af.png"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">173.3万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">3936</p>
              </div>
              <p class="title">【刺客伍六七】梅花十三的千层套路</p>
            </div>
            <div class="sp">
              <img
                src="https://i0.hdslb.com/bfs/archive/a35b6ba481eccc399dd586c1f018781c37cc6449.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">173.3万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">3936</p>
              </div>
              <p class="title">无限大人燃到极致帅到起飞的战斗混剪</p>
            </div>
            <div class="sp">
              <img
                src="https://i1.hdslb.com/bfs/archive/68e3bc53197a06ee81e5d8d58ec0ee143305016b.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">173.3万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">3936</p>
              </div>
              <p class="title">《刺客伍六七》×《野狼disco》：跟着画龙就完事儿了！</p>
            </div>
            <div class="sp">
              <img
                src="https://i0.hdslb.com/bfs/archive/64f231bfbec37c5c8d1010f081f05e7fb8aa10be.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">173.3万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">3936</p>
              </div>
              <p class="title">灰太狼：我颠覆了整个世界，只为换你一次回眸</p>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="国产动画">
        <div class="content">
          <div class="c">
            <div class="sp">
              <img
                src="https://i2.hdslb.com/bfs/archive/73e8aec4e318ba92e4dcd7151917cec163717261.png"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">150.5万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">3856</p>
              </div>
              <p class="title">我琢磨了两个半月 最终发现了《哪吒之魔童降世》的正确打开方式</p>
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
              <p class="title">当事人告诉你豫章书院事件的完整始末！</p>
            </div>
            <div class="sp">
              <img
                src="https://i2.hdslb.com/bfs/archive/b58f9eee6c234032c3989dbd2513336303f112ff.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">70万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">856</p>
              </div>
              <p class="title">纹身有讲究：朋友刚纹完关公出门就被车撞死了</p>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="国产原创相关">
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
      <van-tab title="布袋戏">
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
      <van-tab title="资讯">
        <div class="content">
          <div class="c">
            <div class="sp">
              <img
                src="https://i2.hdslb.com/bfs/archive/7a52221d5d6d95ef6f81e1ede1a8b9483164fdd0.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">74.6万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">3699</p>
              </div>
              <p class="title">叶罗丽精灵梦第七季第16集预告：庞尊将会对高泰明做什么呢？</p>
            </div>
            <div class="sp">
              <img
                src="https://i0.hdslb.com/bfs/archive/933abd2da53e081104a489171075b136c64ae50c.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">115.7万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">2477</p>
              </div>
              <p class="title">计算机二级 要不要选择二级证书直邮由你决定，但这些细节你一定要知道哦，比小心心✨</p>
            </div>
            <div class="sp">
              <img
                src="https://i0.hdslb.com/bfs/archive/193f539006bb01118e8581c3a9e9667d8d9785e5.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">96.8万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">2638</p>
              </div>
              <p class="title">怅秋风、连营画角，故宫离黍，一组故宫汉服姐妹照。</p>
            </div>
            <div class="sp">
              <img
                src="https://i1.hdslb.com/bfs/archive/d8bab607c7749dcaa4a417b7a485aa65619a96d4.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">173.3万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">3936</p>
              </div>
              <p class="title">杭萧钢构企业宣传片</p>
            </div>
            <div class="sp">
              <img
                src="https://i0.hdslb.com/bfs/archive/928c69345ae8910bff45a02c040d1199553e9511.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">77.1万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">3877</p>
              </div>
              <p class="title">【刺客伍六七主创访谈】刺客伍六七主创团队爆笑做客斗鱼｛何小疯/邹沙沙/宝木中阳/晴子｝（删减清晰版）</p>
            </div>
            <div class="sp">
              <img
                src="https://i2.hdslb.com/bfs/archive/565f958bf7a54d51767594d0878fe3cf50d28f64.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">79.0万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">679</p>
              </div>
              <p class="title">搞笑斗破</p>
            </div>
            <div class="sp">
              <img
                src="https://i2.hdslb.com/bfs/archive/ce1abfe35373a526f9759282484bdf1cbcdeec59.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">38万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">2872</p>
              </div>
              <p class="title">不一样的斗破苍穹10</p>
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
              <p class="title">不一样的斗破苍穹9</p>
            </div>
            <div class="sp">
              <img
                src="https://i1.hdslb.com/bfs/archive/b65a5805ff45a6ab7ffdba5f85bc64153f94edf1.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">1030万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">1856</p>
              </div>
              <p class="title">不一样的斗破苍穹7</p>
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
              <p class="title">不一样的斗破苍穹6</p>
            </div>
            <div class="sp">
              <img
                src="https://i2.hdslb.com/bfs/archive/c8713164f8cb9d215ed5206a798e272f27e8f4c6.jpg"
                alt
              />
              <div class="num">
                <van-icon name="play-circle-o" size="17px" color="#fff" class="b" />
                <p class="bf">1070万</p>
                <van-icon name="notes-o" size="17px" color="#fff" class="dm" />
                <p class="bf">856</p>
              </div>
              <p class="title">不一样的斗破苍穹5</p>
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