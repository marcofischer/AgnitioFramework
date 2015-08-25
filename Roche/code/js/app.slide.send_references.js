document.addEventListener('presentationInit', function() {
  var slide = app.slide.send_references = {
    elements: {
      sendBtn: "#send_button",
      email: "#select_email",
      pdfLink: "#pdfLinks"
    },
    onEnter: function(ele) {
        app.addEvent('tap', slide.sendEmail, slide.element.sendBtn);
        app.addEvent('tap', slide.openDocument, slide.element.pdfLink);
        slide.ele = ele;
    },
    onExit: function(ele) {
    },
    sendEmail:function(e){
        slide.element.pdfDocument = slide.ele.querySelector("#checkboxes_email input[type='radio']:checked");
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        slide.element.pdfDocument = slide.element.pdfDocument.value;
        
        if (!filter.test(slide.element.email.value)) {
            alert("Please input correct e-mail address.");
            return ;
        }
        else{
            ag.sendMail(slide.element.email.value, 'Placebo presentation', "", [slide.element.pdfDocument]);
        }
    },
    openDocument:function(e){
        var ele = e.target;
        var link;
        if (ele.nodeType === 3) {
            ele = ele.parentNode;
        }
        link = ele.getAttribute('data-pdf');
        if (link) {
            ag.openPDF(link, link);
        }
    }
  };  
}); 