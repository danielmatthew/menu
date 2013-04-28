(function() {
    'use strict';

    window.addEventListener('load', windowLoadHandler, false);

    function windowLoadHandler() {
        loadFood();
    }

      function loadFood() {
          ajax('menu.json', function(data){
              var fragment = document.createElement('dl');
              var template = document.getElementById('menuTpl').innerHTML;
              var html = Mustache.to_html(template, data);

              fragment.innerHTML = html;

              insertAfter(header, fragment);

          }); 
      }

      function ajax(url, callback) {
          var xhr = new XMLHttpRequest();
          xhr.onreadystatechange = function() {
              if (xhr.readyState === 4) {
                  if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
                      callback(JSON.parse(xhr.responseText));
                      console.log("Request to " + url + " succeeded");
                  }
                  else {
                      console.log("Request to " + url + " failed.");
                  }
              }
          };
          xhr.open("GET", url, true);
          xhr.send();
      }

      function insertAfter(referenceNode, newNode) {
          referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
      }
})();
