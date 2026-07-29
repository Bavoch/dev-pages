/* 导航条时钟：导航 markup 与样式已静态内嵌于各页面（site-nav.css），
   此脚本仅负责时钟走字，不产生任何布局变化，加载时机不影响渲染 */
(function () {
  function tick() {
    var el = document.getElementById('sn-clock');
    if (el) el.textContent = new Date().toLocaleTimeString('zh-CN', { hour12: false });
  }
  tick();
  setInterval(tick, 1000);
})();
