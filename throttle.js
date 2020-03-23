function throttle(fn, delay) {
    let timer, lastTime;
    return function() {
      const now = Date.now();
      const space = now - lastTime; // 间隔时间
      if( lastTime && space < delay ) { // 为了响应用户最后一次操作
        // 非首次，还未到时间，清除掉计时器，重新计时。
        timer && clearTimeout(timer);
        // 重新设置定时器
        timer = setTimeout(() => {
          lastTime = Date.now(); // 不要忘了记录时间
          fn.apply(this, arguments);
        }, delay);
        return;
      }
      // 首次或到时间了
      lastTime = now;
      fn.apply(this, arguments);
    };
  }
  
  const throttleAjax = throttle(ajax, 100);
  
  window.addEventListener('scroll', function() {
    const top = document.body.scrollTop || document.documentElement.scrollTop;
    throttleAjax('scrollTop: ' + top);
  });
