 import './library/jquery.js';
 import './library/jquery.lazyload.min.js';
 import { baseUrl } from './library/config.js';

 //渲染主页
 (function() {
     $.ajax({
         type: "get",
         url: `${baseUrl}/product/getProducts`,
         dataType: "json",
         success: function(res) {
             //获得数据后进行字符串拼接
             let tempLi = '';
             res.forEach((elm, i) => {

                 let picture = JSON.parse(elm.picture);
                 //  console.log(picture);
                 tempLi += ` <li>
                            <a href="./html/xiangqin.html?id=${elm.id}"><img src="${picture[0].src}" alt=""></a>
                          </li> `;
             });
             $('#wlist').append(tempLi);
         }
     });
 })();



 /* 懒加载图片 */

 $('.lazy').lazyload({
     effect: "fadeIn",
     placehoder: "../img/loading.gif"
 });

 /* 右边固定导航楼梯效果 */
 $('#list>li>a').on('click', function() {
     // console.log(1);
     // 获得 被点击的a元素对应的div元素距离页面顶部的高度
     let top = $(`#${$(this).attr('title')}`).offset().top;
     $('html').animate({
         scrollTop: top
     }, 600);
 });
 $(window).on('scroll', function() {
     // console.log(1);
     // 当前文档距离顶部的高度
     let top = $(document).scrollTop();
     // console.log(top);

     let index = Math.round(top / 600);
     $('#list>li>a').removeClass('active').eq(index).addClass('active');
 });