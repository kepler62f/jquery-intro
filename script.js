$(document).ready(function() {
    // var h1 = document.querySelector('h1')
    // var $h1 = $('h1')
    //     // console.log('h1', h1)
    //     // returns html node
    //     // console.log('$h1', $h1)
    //     // return jQ object
    //     // target the odd element of li
    // var allLi = document.querySelectorAll('.list-item')
    // var $allLi = $('.list-item-jq')
    // for (var i = 0; i < allLi.length; i++) {
    //     allLi[i].addEventListener('click', clickDom)


    var $button = $('button')
    var $lunch = $('.lunch')
    var $eat = $('.eat')

    $eat.on('click', function() {
        //var $lastLunch = $('.lunch li').last()
console.log($lunch.last());
        // new way, no need to create one by one
        $lunch.remove($lunch.last())
    })

})
