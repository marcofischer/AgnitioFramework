document.addEventListener('presentationInit', function() {

    var formfull = [],
        slide = app.slide.about_first = {
    
    elements: {
       pdfOpen : ".pdf_Form",
       pdfSend : ".pdf_Send",
       pdfClose : ".pdf_close"
    },

    onEnter: function(ele) {
        $('#menu').hide();

        app.addEvent('tap', slide.pdfSendSetup, slide.element.pdfOpen);
        app.addEvent('tap', slide.pdfCloseForm, slide.element.pdfClose);
        app.addEvent('tap', slide.pdfSendSubmit, slide.element.pdfSend);
    },

    onExit: function(ele) {
        $('#menu .hasChildren').next().slideUp();

    },
    pdfSendSetup : function(e){
        $('#pdf_Form').show();
    },
    pdfSendSubmit : function(e){

        $('#state_message').removeAttr('class');
        
        if( !slide.validEmail( $('.email').val() ) ) {  
             $('.email').addClass('error');
             formfull[0] = '';
        } else {
            $('.email').removeClass('error');
            formfull[0] = $('.email').val();
        }

        if( $('.subject').val() < 3 ) {  
             $('.subject').addClass('error');
             formfull[1] = ''; 
        } else { 
            $('.subject').removeClass('error');
            formfull[1] = $('.subject').val(); 
        }

        if( $('.body').val() < 3 ) {  
             $('.body').addClass('error');
             formfull[2] = ''; 
        } else { 
            $('.body').removeClass('error');
            formfull[2] = $('.body').val(); 
        }

        formfull[3] = $('.attachment_item').val();
        formfull[4] = $('.attachment_image').val();

        if( formfull[0] != '' && formfull[1] != '' && formfull[2] != ''  ){
               
            var address = formfull[0],
                subject = formfull[1],
                body = formfull[2],
                attachments = [formfull[3], formfull[4]];

                ag.sendMail(address, subject, body, attachments);

            $('.pdf_Send').hide();
        } else {
            $('#state_message').show().addClass('error');
        }

    },
    pdfCloseForm: function(e){
        $('#pdf_Form').hide();
    },
    validEmail : function (emailAddress) {
        var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        return pattern.test(emailAddress);
    }

  };


}); 


