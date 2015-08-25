document.addEventListener('presentationInit', function() {
	var slide = app.slide.send_shopping_cart = {
		elements: {
			ageSliderId: "send_shopping_cart",
			sendBtn: "sendMail"
		},
		onEnter: function(){
			var sendBtn = document.getElementById(slide.elements.sendBtn),
				topicsEl = document.getElementById('topics'),
				email, body, topics = app.slide.next_topic.topics, i, buffer = "";
			for(i = 0; i < topics.length; i++){
							if(topics[i]){
								buffer += "<li>" + topics[i] + "</li>";
							}
						}
				topicsEl.innerHTML = buffer;
			app.addEvent('click', function(){
				email = document.getElementById('email').value;
				if(doctorsName !== ''){
					body = "Hello " + document.getElementById('doctorsName').value + '<br /><br />Topics for next time:<br />' || '';
				}else{
					body = "Hello<br />Topics for next time:<br />" || '';
				}
				if(email !== "My email address" && topics){
					for(i = 0; i < topics.length; i++){
						if(topics[i]){
							body += topics[i] + '<br />';
						}
					}
					sendMail(email,'Placebo Shopping Cart',body,'');
				}
			}, sendBtn)
		},
		onExit: function(){
			var doctorsName = document.getElementById('doctorsName'),
				email = document.getElementById('email');
			doctorsName.blur();
			email.blur();
		}
	};
}); 