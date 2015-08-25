document.addEventListener('presentationInit', function() {
	var slide = app.slide.calculator = {
		elements: {
			ageSliderId: "#ageSlider",
			weightSliderId: "#weightSlider",
			creatinineSliderId: "#creatinineSlider"
		},
		values:{
			ageSlider:{},
			weightSlider:{},
			creatinineSlider:{},
			isGander:true,
			isTwittering:true,
			ageSliderValue:80,
			weightSliderValue:80,
			creatinineSliderValue:0.5,
			walkerMan:{age:68, weight:95, creatinine:1.1, gender:true, twittering:false, checkbox:["maleGender","femaleMigraine"]},
			knittingGrandma:{age:75, weight:80, creatinine:0.9, gender:false, twittering:false, checkbox:["femaleGender","femaleMigraine","exercise"]},
			sittingGrandma:{age:69, weight:90, creatinine:0.8, gender:false, twittering:true, checkbox:["femaleGender","femaleMigraine","twittering","greenTea"]},
			manWithDog:{age:72, weight:105, creatinine:1.3, gender:true, twittering:false, checkbox:["maleGender","femaleMigraine"]},
			walkerManStick:{age:80, weight:90, creatinine:1.3, gender:true, twittering:false, checkbox:["maleGender","maleMigraine"]},
			manStick:{age:82, weight:90, creatinine:2.9, gender:true, twittering:false, checkbox:["maleGender","femaleMigraine","toothPaste","cupcakes","flamenco"]},
			grandmaInWheelchair:{age:66, weight:65, creatinine:0.7, gender:false, twittering:false, checkbox:["femaleGender","femaleMigraine","greenTea"]},
			walkerGrandma:{age:84, weight:75, creatinine:1.6, gender:true, twittering:false, checkbox:["maleGender","femaleMigraine"]}
		},
		onEnter: function(ele){
			var currentAge = document.getElementById('currentAge'),
				currentWeight = document.getElementById('currentWeight'),
				currentCreatinine = document.getElementById('currentCreatinine'),
				maleGender = document.getElementById('maleGender'),
				femaleGender = document.getElementById('femaleGender'),
				maleMigraine = document.getElementById('maleMigraine'),
				femaleMigraine = document.getElementById('femaleMigraine'),
				twittering = document.getElementById('twittering'),
				value, calculator = document.getElementById('calculator'),
				inputs = document.querySelectorAll('.sliders-group input'),
				inputsCheck = document.querySelectorAll('.check-box input');
			ageSlider = new Slider(slide.elements.ageSliderId, {min:20});
			weightSlider = new Slider(slide.elements.weightSliderId, {min:0, max:200});
			creatinineSlider = new Slider(slide.elements.creatinineSliderId, {min:0.0, max:10.0, round:1});
			ageSlider.setValue(79);
			weightSlider.setValue(86);
			creatinineSlider.setValue(1.8);
			app.addEvent('click', function(){
				this.setAttribute('checked','available');
				femaleMigraine.removeAttribute('checked');
				slide.removeSelecting();
			}, maleMigraine);
			app.addEvent('click', function(){
				this.setAttribute('checked','available');
				maleMigraine.removeAttribute('checked');
				slide.removeSelecting();
			}, femaleMigraine);
			app.addEvent('click', function(){
				this.setAttribute('checked','available');
				femaleGender.removeAttribute('checked');
				slide.removeSelecting();
				slide.values.isGander = true;
				slide.result({gander:true});
			}, maleGender);
			app.addEvent('click', function(){
				this.setAttribute('checked','available');
				maleGender.removeAttribute('checked');
				slide.removeSelecting();
				slide.values.isGander = false;
				slide.result({gander:false});
			}, femaleGender);
			
			ageSlider.onfinalchange = function(){
				slide.removeSelecting();
			}
			weightSlider.onfinalchange = function(){
				slide.removeSelecting();
			}
			creatinineSlider.onfinalchange = function(){
				slide.removeSelecting();
			}
			ageSlider.onchange = function(){
				currentAge.innerHTML = slide.values.ageSliderValue = this.value;
				slide.result({ageSlider:this.value});
			}
			weightSlider.onchange = function(){
				currentWeight.innerHTML = slide.values.weightSliderValue = this.value;
				slide.result({weightSlider:this.value});
			}
			creatinineSlider.onchange = function(){
				currentCreatinine.innerHTML = this.value + " mg/dl";
				slide.values.creatinineSliderValue = this.value;
				slide.result({creatinineSlider:this.value});
			}
			if(inputs){
				inputs.forEach(function(element){
					app.addEvent('click',function(){
						slide.removeSelecting();
						element.setAttribute('checked','available');
						slide.setValues(slide.values[element.getAttribute('id')]);
					},element);
				});
			}
			if(inputsCheck){
				inputsCheck.forEach(function(element){
					app.addEvent('click',function(){
						slide.removeSelecting();
						if(element.hasAttribute('checked')){
							element.removeAttribute('checked');
							if(element.getAttribute('id') === "twittering"){
								slide.values.isTwittering = false;
								slide.result({twittering:false});
							}
						}else{
							element.setAttribute('checked','available');
							if(element.getAttribute('id') === "twittering"){
								slide.values.isTwittering = true;
								slide.result({twittering:true});
							}
						}
					},element);
				});
			}
		},
		onExit: function(){
		},
		result:function(values){
			var creatine = document.getElementById('creatine'),
				dosingPlacebo = document.getElementById('dosingPlacebo'),
				gander, age, weight, creatinine, value, twittering;

			gander = values.gander || slide.values.isGander;
			age = values.ageSlider || slide.values.ageSliderValue;
			twittering = values.twittering || slide.values.isTwittering;
			weight = values.weightSlider || slide.values.weightSliderValue;
			creatinine = values.creatinineSlider || slide.values.creatinineSliderValue;
			if(gander === true){
				value = (((140 - age) * weight) / (72 * creatinine)).toFixed(1);
			}else{
				value = ((0.85 * (140 - age) * weight) / (72 * creatinine)).toFixed(1);
			}
			if(value <= 30){
				dosingPlacebo.innerHTML =  'half pill daily';
			}else if(age < 80){
				dosingPlacebo.innerHTML =  '2 pills daily';
			}
			if(age >= 80 || twittering){
				dosingPlacebo.innerHTML =  '1 pill daily';
			}
			if(value <= 30){
				dosingPlacebo.innerHTML =  'half pill daily';
			}

			if(value === "Infinity"){
				creatine.innerHTML = ">3400 ml/min";
			}else{
				creatine.innerHTML = value + ' ml/min';
			}
		},
		setValues:function(values){
			var age, weight, creatinine, twittering, gender, i,
				inputs = document.querySelectorAll('.check-area input');
			inputs.forEach(function(element){
				element.removeAttribute('checked');
			})
			if(values.twittering){
				slide.values.isTwittering = true;
			}else{
				slide.values.isTwittering = false;
			}
			if(values.gender){
				slide.values.isGander = true;
			}else{
				slide.values.isGander = false;
			}
			ageSlider.setValue(values.age);
			weightSlider.setValue(values.weight);
			creatinineSlider.setValue(values.creatinine);
			if(values.checkbox){
				for(i = 0; i <= values.checkbox.length; i++){
					if(values.checkbox[i]){
						document.getElementById(values.checkbox[i]).setAttribute('checked','available');
					}
				}

			}

		},
		removeSelecting:function(){
			var inputs = document.querySelectorAll('.sliders-group input');
			inputs.forEach(function(element){
				element.removeAttribute('checked');
			})
		}
	};
}); 