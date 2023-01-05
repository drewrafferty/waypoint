
    
     
        var input = document.getElementById("search_bar");
        input.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                document.getElementById("search_btn").click();
            }
        });
        
        
    function toggleColor () {
        var x = document.getElementById("color_block");
         if (x.style.visibility === "visible") {
            x.style.visibility = "hidden";      
          } else {
            x.style.visibility = "visible";
          }
    }
        
    function toggleList () {
        
        var x = document.getElementById("popup");
        var y = document.getElementById("lg_container");
        
          if (x.style.visibility === "visible") {
            x.style.visibility = "hidden";
          y.style.opacity="1";
              
          } else {
            x.style.visibility = "visible";
                y.style.opacity="0.05";
          
          }
    };
    
        function saveBrowser() {
            
        var g1 = document.querySelector('input[name=browser]:checked').value;
        localStorage.setItem("g1", g1);
            
        };
    
        function showBrowser() {
            var current = localStorage.getItem('g1');
    
            if (current == "Google") {
                 var current = localStorage.getItem('g1');
                document.getElementById("show").innerHTML = "Current Browser: " + current;
            }
            if (current == "Bing") {
                 var current = localStorage.getItem('g1');
                document.getElementById("show").innerHTML = "Current Browser: " + current;
            }
            if (current == "Yahoo") {
                 var current = localStorage.getItem('g1');
                document.getElementById("show").innerHTML = "Current Browser: " + current;
            }
            if (current == "DuckDuckGo") {
                 var current = localStorage.getItem('g1');
                document.getElementById("show").innerHTML = "Current Browser: " + current;
            }
        };
    
        function redirectSearch() {
            var current = localStorage.getItem('g1');
            var entry = document.getElementById("search_bar").value;
            
            if (current == "Google") {
                window.location.href = "https://www.google.com/search?q=" + entry;
            }
            else if (current == "Bing") {
                window.location.href = "https://www.bing.com/search?q=" + entry;
            }
            else if (current == "Yahoo") {
                window.location.href = "https://search.yahoo.com/search?p=" + entry;
            }
            else if (current == "DuckDuckGo") {
                window.location.href = "https://duckduckgo.com/?q=" + entry;
            }
            else {
                window.location.href = "https://www.google.com/search?q=" + entry;
            }
        };
        
      
const r = document.querySelector(':root');
const rs = getComputedStyle(r);
        
        function changeOne() {
            var background = "#202124";
            localStorage.setItem("background", background);
            r.style.setProperty('--theme', background);   
        };
        
        function changeTwo() {
            var background = "#ff6347";
            localStorage.setItem("background", background);
            r.style.setProperty('--theme', background);   
        };
        
        function changeThree() {
            var background = "#3c78d8";
            localStorage.setItem("background", background);
            r.style.setProperty('--theme', background);  
        };
        function changeFour() {
            var background = "#00A36C";
            localStorage.setItem("background", background);
            r.style.setProperty('--theme', background);  
        
        };
          
        function closeColor() {
            var z = document.getElementById("color_block");
             z.style.visibility = "hidden";
        }
        
        
        function getBG() {
            var n_color = localStorage.getItem('background');
             r.style.setProperty('--theme', n_color);  
        }
    
