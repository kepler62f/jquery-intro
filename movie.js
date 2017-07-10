//https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher
//kepler62f API Key: b06bcb01135eded6d2a7c04e224f31ad


$(document).ready(function() {
    // run ajax now
    // 2 methods = GET and POST
    var discover_movie_url = 'https://api.themoviedb.org/3/search/movie?api_key=b06bcb01135eded6d2a7c04e224f31ad&query='
    var image_url = 'https://image.tmdb.org/t/p/w300'
    var $ul = $('ul')
    var $keyword = $('input')

    initMovieList()
    $keyword.on('keyup', filterMovieList)

    //console.log($keyword);

    function initMovieList (initSearchStr) {
      getList('"a"') // Set default list as starting with a
    }

    function getList (searchStr) {

      console.log(discover_movie_url+searchStr);
      $.get(discover_movie_url+searchStr).done(function(data) {
              var movie_arr = data.results
              console.log(movie_arr);
              movie_arr.forEach(function(movie) {
                  var $createdList = createList(movie)
                  $ul.append($createdList)
              })
              console.log($ul);
          })
          // input: obj
          // Desired output: jquery object
          // jquery object => <li> <img src=""> </li>
      function createList(obj) {
          var $newLi = $('<li>')
          var $newImg = $('<img>')
          $newImg.attr({
              src: image_url + obj.poster_path,
              alt: obj.title
          })
          $newLi.append($newImg)
          return $newLi
      }
    }

    function clearHTMLList () {
      $ul.empty()
    }

    function filterMovieList () {
      var searchKeyword = $(this).val()
      clearHTMLList()
      if (searchKeyword === '') {
        console.log('empty!');
        initMovieList()
      } else {
        console.log(searchKeyword)
        console.log('"'+searchKeyword+'"');
        getList ('"'+searchKeyword+'"')
      }
    }




})
