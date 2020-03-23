//在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。
function ajax(content) {
    console.log('ajax request ' + content)
}

function debounce(fun, delay) {
    return function (args) {
        let that = this
        let _args = args
        clearTimeout(fun.id)
        fun.id = setTimeout(function () {
            fun.call(that, _args)
        }, delay)
    }
}

let inputb = document.getElementById('debounce')

let debounceAjax = debounce(ajax, 500)

inputb.addEventListener('keyup', function (e) {
    debounceAjax(e.target.value)
})
//防抖  频繁输入不会执行函数 当一定时间内没有输入时会执行函数  场景：search搜索联想；window触发resize的时候

//节流  每间隔时间会执行一次函数   delay=1000 每间隔1s执行一次函数 鼠标不断点击触发，mousedown(单位时间内只触发一次)   ； 监听滚动事件，比如是否滑到底部自动加载更多，用throttle来判断