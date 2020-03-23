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
