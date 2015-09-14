document.addEventListener("presentationInit",function(){
    var e = "#pathways_first",
        n = app.slide.pathways_first = {
        elements:{
            submitButton:"#submit"
        },
        onEnter:function(e){
            $("#menu").hide(),
            app.addEvent('tap', n.whichPathway, n.element.submitButton)
        },
        onExit:function(n){
            $("#menu .hasChildren").next().slideUp()
            
        },
        medium: function(e){
        },
        whichPathway: function(e){
            //array for checked items
            var outCome = [];
            //check all inputs for value
            $('#pathways_first input[type="radio"]:checked').each(function(){
                //add checked items to array
                outCome.push($(this).val());
                console.log(outCome); 
            });
            //submit to agnitio tracking
            ag.submit.event({
                unique: true,
                category: 'Pathways',
                label: "Patient outcome pathways",
                value: outCome,
                path: app.getPath()
            });
        }
    }
});