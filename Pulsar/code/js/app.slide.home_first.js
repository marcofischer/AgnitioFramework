document.addEventListener("presentationInit",function(){var t=["Button not clicked","Button not clicked","Button not clicked"],n=app.slide.home_first={elements:{aboutBtn:"#aboutus",philBtn:"#philosophy",insBtn:"#insight"},onEnter:function(t){$("#menu").hide(),app.addEvent("tap",n.takemetoAbout,n.element.aboutBtn),app.addEvent("tap",n.takemetoPhil,n.element.philBtn),app.addEvent("tap",n.takemetoIns,n.element.insBtn)},onExit:function(n){$("#menu .hasChildren").next().slideUp(),ag.submit.event({unique:!0,category:"Video Stats",label:"Video duration",value:t,path:app.getPath()})},takemetoAbout:function(n){t[0]="About button used",app.goTo("pulsar","about","about_first")},takemetoPhil:function(n){t[1]="Philosophy button used",app.goTo("pulsar","philosophy","philosophy_first")},takemetoIns:function(n){t[2]="Insight button used",app.goTo("pulsar","insight","insight_first")}}});