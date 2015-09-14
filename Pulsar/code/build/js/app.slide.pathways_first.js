document.addEventListener("presentationInit",function(){
    var e = "#pathways_first",
        slide = app.slide.pathways_first = {
        elements:{
            submitButton:"#submit"
        },
        onEnter:function(ele){
            $("#menu").hide(),
            app.addEvent('tap', slide.whichPathway, slide.element.submitButton)
        },
        onExit:function(ele){
            $("#menu .hasChildren").next().slideUp()
            
        },
        medium: function(e){
        },
        whichPathway: function(e){
            //array for checked items
            var outCome = [];
            //check all inputs for value
            $('#pathways_first input[type="radio"]:checked').each(function(i, e){
                //add checked items to array
                outCome.push($(this).val()); 
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