document.addEventListener("presentationInit",function(){var n="#philosophy_first",o=app.slide.philosophy_first={elements:{toggleMenuButton:"#toggleMenu",goHome:"#goHome",loadWindow:"#text",closeWindow:"#closeWindow"},onEnter:function(n){app.addEvent("tap",o.windowLoader,o.element.loadWindow),app.addEvent("tap",o.windowCloser,o.element.closeWindow),$("#menu").hide()},onExit:function(o){$(n+" #menu .hasChildren").next().slideUp()},windowLoader:function(o){$(n+" #info_window").show(),$(n+" #info_window .container").show(),$(n+" #info_window .container img").show()},windowCloser:function(o){$(n+" #info_window").hide()}}});