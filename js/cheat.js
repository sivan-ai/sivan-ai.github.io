<!--崩溃欺骗-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/js/src/TEP.ico");
         document.title = '你浏览的页面碎裂了！快回来';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/js/src/favicon.ico");
         document.title = '没想到吧，我骗你的！' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });