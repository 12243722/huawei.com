import './library/jquery.js';
import { baseUrl } from './library/config.js';
import cookie from './library/cookie.js';

(function() {
    let id = location.search.split('=')[1]; //获得商品id
    console.log(id);

    $.ajax({
        type: "get",
        url: `${baseUrl}/product/getItem`,
        data: { id: id },
        dataType: "json",
        success: function(res) {
            console.log(res);
            res = res[0];
            let picture = JSON.parse(res.picture);

            let template = `
                <!-- 头部 -->
                <div class="head-top">
                    <div class="wrapper clearfix">
                        <!-- 左边 -->
                        <div class="left">
                            <ul class="head-top-ul ">
                                <li class="nobefore"><a href="#">首页</a></li>
                                <li><a href="#">华为官网</a></li>
                                <li><a href="#">荣耀官网</a></li>
                                <li><a href="#">花粉俱乐部</a></li>
                                <li><a href="#">V码（优购码）</a></li>
                                <li><a href="#">企业购</a></li>
                                <li><a href="#">Select Region</a></li>
                                <li class="top-nav-list more-top">
                                    <p><span>更多精彩</span></p>
                                    <div class="head-top-subnav more">
                                        <ul>
                                            <li>
                                                <a href="#">EMUI</a>
                                                <a href="#">应用市场</a>
                                                <a href="#">华为终端云空间</a>
                                                <a href="#">开发者联盟</a>
                                             </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <!-- 右边 -->
                        <div class="right">
                            <ul class="head-top-ul">
                                <li class="nobefore"><a href="#">请登录</a></li>
                                <li><a href="#">注册</a></li>
                                <li><a href="#">我的订单</a></li>
                                <li class="top-nav-list">
                                    <p><span>客户服务</span></p>
                                    <div class="head-top-subnav customer-service">
                                        <ul>
                                            <li><a href="#">服务中心</a></li>
                                            <li><a href="#">联系客服</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="top-nav-list">
                                    <p><span>网站导航</span></p>
                                    <div class="head-top-subnav webset-nav"></div>
                                </li>
                                <li class="top-nav-list">
                                    <p><span>手机版 </span></p>
                                    <div class="head-top-subnav app"></div>
                                </li>
                                <li class="shopCar">
                                    <P><span>购物车(<em>0</em>)</span></P>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- 下导航 -->
                <div style="box-shadow:0 1px 3px  pink  ;" class="head">
                    <div class="wrapper clearfix">
                        <!-- logo -->
                        <h1 class="left">
                            <a href="#">
                                <img src="../img/SXppnESYv4K11DBxDFc2.png" alt="">
                            </a>
                        </h1>
                        <!-- nav -->
                        <div class="left nav">
                            <ul>
                                <li>
                                    <a href="#"><img src="../img/AHwTUFRpDSQyuIZ7tLJz.png" alt=""></a>
                                </li>
                                <li>
                                    <a href="#"><img src="../img/GrguiqzHENWVYHYWyHBM.png" alt=""></a>
                                </li>
                                <li><a href="#">华为 P40 系列</a></li>
                                <li><a href="#">荣耀30</a></li>
                                <li><a href="#">安心居家</a></li>
                            </ul>
                        </div>
                        <!-- 搜索框 -->
                        <form action="" class="right">
                            <input type="text" name="" class="txt">
                            <i class="btn iconfont">&#xe62b;</i>
                            <a href="#" style="left:66px">MateBookX</a>
                            <a href="#" style="left:134px">荣耀30</a>
                        </form>
                    </div>
                </div>
                <!-- 版心主页 -->
                <div class="wrapper clearfix">
                    <div class="yuat">
                        <div class="boxsmall">
                            <ul>
                                <li><a href="">首页 ></a></li>
                                <li><a href="">手机 ></a></li>
                                <li><a href="">HUAWEI Mate系列 > </a></li>
                                <li>
                                    <p>HUAWEI Mate 40 Pro 5G 全网通 8GB+256GB（亮黑色</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- 商品详情 -->
                    <div class="page">
                        <div class="left commodity">
                            <i><img src="${picture[1].src}" alt=""></i>
                            <div class="glary-nav">
                                <span class="span-1"></span>
                                <span class="span-2"></span>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <img src="../img/glary-1.png" alt=""></a>
                                    </li>
                                    <li>
                                        <a href="#"><img src="../img/glary-2.png" alt=""></a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="../img/glary-3.png" alt=""></a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="../img/glary-4.png" alt=""></a>
                                    </li>
                                    <li>
                                        <a href="#"><img src="../img/glary-5.png" alt=""></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="right information">
                            <div class="product-mate">
                                <p>${res.title}</p>
                                <span>【10:08限量开售】①赠手机摄影课程，抽国内机票 ②以旧换新最高补贴1111元</span>
                            </div>
                            <div class="product-info">
                                <div class="product-price">
                                    <div>价&nbsp&nbsp&nbsp&nbsp&nbsp格</div>
                                    <p>￥<span>${res.price}</span></p>
                                </div>
                                <div class="product-ite">
                                    <div class="item-1">
                                        促&nbsp&nbsp&nbsp&nbsp&nbsp销
                                    </div>
                                    <div class="item-2"><a href="#">商品赠劵</a> 赠华为手机摄影课程</div>
                                </div>
                                <div class="product-prome"><a href="#">赠送积分</a>购买即赠商城积分，积分可抵现~</div>
                            </div>
                            <div class="server">
                                <div class="explain">服务说明</div>
                                <div class="condition">
                                    <ul>
                                        <li>已满48元已免运费</li>
                                        <li>由华为商城负责发货</li>
                                        <li>并提供售后服务</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="number">
                                <div class="isue-1">商品编码</div>
                                <div class="isue-2">2601010234001</div>
                            </div>
                            <div class="top-frame">
                            </div>
                            <div class="style">
                                <div class="style-color">选择颜色</div>
                                <div class="style-elegant">
                                    <ul>
                                        <li><a href="#"><i><img src="../img/style-1.png" alt=""></i><span>亮黑色</span></a></li>
                                        <li><a href="#"><i><img src="../img/style-2.png" alt=""></i><span>釉白色</span></a></li>
                                        <li><a href="#"><i><img src="../img/style-3.png" alt=""></i><span>秘银色</span></a></li>
                                        <li><a href="#"><i><img src="../img/style-4.png" alt=""></i><span>夏日胡杨</span></a></li>
                                        <li><a href="#"><i><img src="../img/style-5.png" alt=""></i><span>秋日胡杨</span></a></li>
            
                                    </ul>
                                </div>
                            </div>
                            <div class="vision">
                                <div class="chose-vision">选择版本</div>
                                <div class="vision-phone">
                                    <ul>
                                        <li><a href="#"><span>5G全网通8G+256GB</span></a></li>
                                        <li><a href="#"><span>5G全网通8G+512GB</span></a></li>
                                        <li><a href="#"><span>5G全网通8G+128GB</span></a></li>
            
                                    </ul>
                                </div>
                            </div>
                            <div class="vision">
                                <div class="chose-vision">选择版本</div>
                                <div class="vision-phone">
                                    <ul>
                                        <li><a href="#"><span>官方标配</span></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="server-product">
                                <div class="server-mete">服务保障</div>
                                <div class="server-style">
                                    <ul>
                                        <li><a href="#"><span>华为无忧服务￥1299</span></a></li>
                                        <li><a href="#"><span>碎屏服务宝一年￥499</span></a></li>
                                        <li><a href="#"><span>延长服务宝一年￥368</span></a></li>
            
                                    </ul>
                                </div>
                            </div>
                            <div class="introduce">
                                <div class="mete">推&nbsp&nbsp&nbsp&nbsp&nbsp荐</div>
                                <div class="introduce-style">
                                    <ul>
                                        <li><a href="#"><span>HUAWEI Mate 40 Pro+</span></a></li>
                                        <li><a href="#"><span>HUAWEI Mate 30E Pro</span></a></li>
                                        <li><a href="#"><span>HUAWEI Mate 40 RS保时捷设计</span></a></li>
                                        <li class="last-li"><a href="#"><span>HUAWEI P40 Pro</span></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="havechose">
                                <div class="product">已选择商品:</div>
                                <div class="show">
                                    <ul>
                                        <li><a href="#"><span>亮黑色 / 5G全网通 8GB+256GB / 官方标配</span></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="addshop">
                                <div class="p-num">库存数量:${res.num}</div>
                                <div class="number"><a class="a-1" href="#">+</a><a class="a-2" href="#">-</a><input type="number" value="1" min="1" max="${res.num}" id="num"></div>
                                <div class="car">
                                    <input type="button" value="加入购物车" id="additem">
                                </div>
                                <div class="free">立即下单</div>
                            </div>
                        </div>
                    </div>
            
                </div>
                <div class="product-menu">
                    <div class="center">
                        <ul>
                            <li><a class="one-1" href="">商品详情</a></li>
                            <li><a href="">规格参数</a></li>
                            <li><a href="">包装与售后</a></li>
                            <li><a href="">用户评价(3万+)</a></li>
                        </ul>
                    </div>
                </div>                        
                `;
            $('body').append(template).find('#additem').on('click', function() {
                addItem(res.id, $('#num').val());
            });
        }
    });

    function additem(id, num) {
        let shop = cookie.get('shop'); //从cookie中获得shop数据

        let products = {
            id: id,
            num: num
        }
        if (shop) { //判断是否存在有购物车数据
            shop = JSON.parse(shop); //将取出的cookie数据转成对象

            //判断cookie中的购物车数据 是否已存在在本条数据的id
            //如果本条数据的id已存在 修改数量
            if (shop.some(elm => elm.id == id)) {
                shop.forEach(el => {
                    el.id === id ? el.num = num : null;
                });
            } else {
                shop.push(product);
            }


            shop.push(products);
        } else { //cookie中不存在shop数据
            shop = []; //设置一个按钮
            shop.push(products); //将当前商品存入数组
        }

        cookie.set('shop', JSON.stringify(shop), 1);
    }
})();