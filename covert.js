// First Method
var test = document.getElementById("text");
test.innerHTML = `<small>POP</small>`;

// Second Method
var compatable = (function () {
        if (!window.DOMParser) return false;
        var parser = new DOMParser();
        console.log(parser.parseFromString("x", "text/html"));
        try {
          parser.parseFromString("x", "text/html");
        } catch (err) {
          return false;
        }
        return true;
      })();

      var textToHTML = function (data) {
        // check for DOMParser compatable
        if (compatable) {
          var parser = new DOMParser();
          // use the html parser
          var doc = parser.parseFromString(data, "text/html");
          return doc.body.innerHTML;
        }

        // Otherwise, create div and append HTML
        var dom = document.createElement("div");
        dom.innerHTML = str;
        return dom;
      };

document.getElementById("text").innerHTML= textToHTML(`<h1>Hello</h1><p>This is from the p tag</p><button>Subscribe</button>`);
