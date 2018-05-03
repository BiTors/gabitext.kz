/*! Cloud Pricing Slider | (c) 1014 QsThemes.com
// Licensed Under codecanyon license aggrement. // http://codecanyon.net/licensess
*/

(function($) {

	$.fn.extend({
	qsSlider: function(options) {

		var defaults = {
			//Set Your own Pricing if want use in whmcs pricing should be must same as per whmcs configuration option pricing
			// PriceBase	: '0',		// base price should be as per this calcution (1 CPU Core + 256MB RAM + 50GB HDD)
			PriceCPU	: '1',		// per month per unit
			PriceRAM	: '3000',		// per month per 1024 MB
			// PriceHDD 	: '0',		// per month per 10 GB


			//Maximum Slider values
			MaxCPU	: '16',		// Maximum CPU
			MaxRAM	: '14',		// Maximum RAM //It should be + 2 like if you want maximum RAM 16 GB then make it 18 etc..
			MaxHDD	: '0',		// Maximum HDD //Its for 500 GB HDD Storage maximum, if want to change it make 100 for 1000 GB, 150 For 1500GB and so on..

			//Set BuyNow Link
			BuyNowLink	: '',

			//IDs get from WHMCS configuration Options
			cpuID	: '',
			ramID	: '',
			hddID	: '',
			cpID	: '',

			//Contorl Panel value configuration options IDs
			cpYesID	: '',
			cpNoID	: '',

			cPanelPrice	: '10',

			//Disocunt on annually billing i.e. 0.10 for 10% so no..
			discount	: '0.0',

			//Tooltips Contents
			TipsXS	: '',
			TipsS	: '',
			TipsM	: '',
			TipsL	: '',
			TipsXL	: '',

			//Default Preset Configuration
			defaultPreset : 's'
		};

		var o = $.extend(defaults, options);

		this.each(function(){

			$(function() {
				// Create the qsSlider controller class, so its specs can be used
				// to create the controls.
				var ISpec = new qsSlider;

				$("div#qsSlider #QsControls div.slider").each(
					function(i, control) {
						var id = $(control).attr('id');

						$(control).slider({
							orientation: "horizontal",
							range:       "min",
							min:         parseFloat(ISpec.specification[id].min),
							max:         parseFloat(ISpec.specification[id].max),
							step:        parseFloat(ISpec.specification[id].step),
							slide: function(event, ui) {

								if (id == 'cpu') {
									ISpec.setCPU( ui.value );

								} else if (id == 'ram') {
									ISpec.setRAM( ui.value );

								} else if (id == 'hdd') {
									ISpec.setHDD( ui.value );
								}
								ISpec.updatePrice();
							}
						});

					}
				);

				// For useability add a click link for the cPanel addon.
				$("div#qsSlider #panelstext").on('click', function(e) {
					e.preventDefault();
					$("div#qsSlider #panel").slider("option", "value", "1");
				});

				// Add the yes/no selector switch.
				$("div#qsSlider #panel").slider({
					orientation: "vertical",
					min:         parseFloat(0),
					max:         parseFloat(1),
					step:        parseFloat(1),
					change: function(event, ui) {
						ISpec.updatePrice();
					}
				});

				// For useability add a click link to the offertext.
				$("div#qsSlider #offerstext").on('click', function(e) {
					e.preventDefault();
					$("div#qsSlider #period").slider("option", "value", "1");
				});

				// Add the month/year selector switch.
				$("div#qsSlider #period").slider({
					orientation: "vertical",
					min:         parseFloat(0),
					max:         parseFloat(1),
					step:        parseFloat(1),
					change: function(event, ui) {
						ISpec.updatePrice();
					}
				});

				// Add the preset buttons
				var presetNames    = new Array;
					presetNames[0] = "Instagram";
					presetNames[1] = "Вконтакте";
					presetNames[2] = "Facebook";
					// presetNames[3] = "l";
					// presetNames[4] = "xl";

				//Add tootip contents
				var presetTips   = new Array;
					presetTips[0] = o.TipsXS
					presetTips[1] = o.TipsS
					presetTips[2] = o.TipsM
					presetTips[3] = o.TipsL
					presetTips[4] = o.TipsXL

				for (var i = 0; i < presetNames.length; i++) {
					var id = presetNames[i]
					var presetClass = "product preset" + id.toLowerCase();

					$("div#presetss").append(
						$('<div>').addClass(presetClass).append(
							$("<button type='button' class='btn btn-sm'>").text(id).on('click', function(e) {
									e.preventDefault();
									ISpec.selectPreset( $(this).text() );
								}
							)
							.hover(
								function(e) {
								// Find the tip for this preset
									var toolTip;
									var presetText = $(this).text();
										for (var j = 0; j < presetNames.length; j++) {
									if (presetNames[j] == presetText) {
										toolTip = presetTips[j];
									}
								}

								if ( toolTip != undefined
										&& toolTip != "") {
										var offsetTop = $(this).offset().top - $("div#qsSlider").offset().top;
										$("div#tooltip div.text").text(toolTip);
										$("div#tooltip").fadeIn();
									}
								},
								function(e) {
									$("div#tooltip").hide();
								}
							)
						)
					);
				};

				// Preset the slider to default
				ISpec.selectPreset(o.defaultPreset);
			});


			
			var qsSlider = function() {

				// Tweak slider steps
				var cpuslider = {
					min:     1,                     // Slider min value
					max:     o.MaxCPU,              // Slider max value
					step:    1                      // Slider increments
				};

				var ramslider = {
					min:     1,                     // Slider min value
					max:     o.MaxRAM,              // Slider max value
					step:    1                      // Slider increments
				};

				var hddslider = {
					min:     1,                     // Slider min value
					max:     o.MaxHDD,              // Slider max value
					step:    1                      // Slider increments
				};

				// Presets buttons - numbers reference the number of slider steps.
				var presetspec = {
					xs:  { cpu: "3",  ram: "15",  hdd: "1"   },
					s:   { cpu: "3",  ram: "15",  hdd: "1"   },
					m:   { cpu: "3",  ram: "15",  hdd: "1"  },
					l:   { cpu: "3",  ram: "15", hdd: "1"  },
					xl:  { cpu: "3",  ram: "15",  hdd: "1" }
				};

				// Exported spec.
				this.specification = {
					cpu: cpuslider,
					ram: ramslider,
					hdd: hddslider
				};

				// Getting priceing
				var pricespec = {
					baseprice:  o.PriceBase,
					cpu_ghz_mo: o.PriceCPU,
					ram_gb_mo:  o.PriceRAM,
					hdd_gb_mo:  o.PriceHDD
				};


				// Functions //

				// Sets the number of CPU.
				this.setCPU = function(sliderStep) {

					var units =' мес';
					var sTotal = sliderStep + " " + units;

					// And the Text box.
					$("div.values div#cpuvalueads").text(sTotal);

					// And update the slider (if we were called by preset, this will actually change the slider, if we're called by the slider nothing will happen.
					$("div#qsSlider div#QsControls div#cpu").slider("value", sliderStep);
				}


				// Sets the number of RAM.
				this.setRAM = function(sliderStep) {

					// And the Text box. Now there's a little specialness here, as we want
					// bump the first 2 steps to a named value, then subtract 2 from the
					// rest. Ie. 256 / 512 / 1 / 2 ...
					var value = sliderStep  ;
					
					var units  ;
					if (value == 1 || value == 21 || value == 31 || value == 41 || value == 51 || value == 61 || value == 71 || value == 81 || value == 91 ) 
					{ units = ' Пост' }
					else if (value == 2 || value == 3 || value == 4 || value == 22 || value == 23 || value == 24 || value == 32 || value == 33 ||  value == 34 || value == 42 || value == 43 || value == 44 || value == 52 || value == 53 || value == 54 || value == 62 || value == 63 || value == 64 || value == 72 || value == 73 || value == 74 || value == 82 || value == 83 || value == 84 || value == 92 || value == 93 || value == 94 )
					 {units =' Поста'} 
					 else {units =' Постов'};
					var sTotal = value + " " + units;

					// And the indicator text.
					$("div.values div#ramvalueads").text(sTotal);

					// And update the slider (if we were called by preset, this will actually change the slider, if we're called by the slider nothing will happen.
					$("div#qsSlider div#QsControls div#ram").slider("value", sliderStep);
				}

				// Sets the number of GB HDD Storage.
				this.setHDD = function(sliderStep) {

					var units ='GB';

					// And the Text box.
					var value = (sliderStep * 10) + 0;
					var sTotal = value + " " + units;

					// $("div.values div#hddvalue").text(sTotal);

					// And update the slider (if we were called by preset, this will actually change the slider, if we're called by the slider nothing will happen.
					$("div#qsSlider div#QsControls div#hdd").slider("value", parseFloat(sliderStep) );
				}


				this.selectPreset = function(presetName) {
					var presetData = $(presetspec).attr(presetName);
					this.setCPU(presetData.cpu);
					this.setRAM(presetData.ram);
					this.setHDD(presetData.hdd);
					this.updatePrice();
				};

			
				// Updates the price container with the current price and updates the "buynow" button CTA URL.  Also fires the check to see if
				// the sliders are at a preset value, and updates the preset button state if it is.

				this.updatePrice = function() {
					var price = calculatePrice();
				
					$("div#QsPrice span#doller").text(price.doller);
				
					// $("div#QsPrice span#cents").text("." + price.cents);

					$("div#QsPrice div#btn-buynow").on('click', function (e) {
						e.preventDefault();
						window.location = buyURL();
						}
					);

					checkValueForPreset();
				};


				// Work out the price.

				var calculatePrice = function() {
					var price = parseFloat(pricespec.baseprice);
					var cpu = parseInt( $("div.values div#cpuvalueads").text() );
					var ram = parseInt( $("div.values div#ramvalueads").text() );
					// var hdd = parseInt( $("div.values div#hddvalue").text() );
					var panel_is_nocp = parseInt( $("div#panelselector div#panel").slider("value") );
					var period_is_year = parseInt( $("div#periodselector div#period").slider("value") );

					// // Calculate the CPU extra cost - CPU - the inital 1GB
					// var price1GHz = parseFloat(pricespec.cpu_ghz_mo);
					// // if (cpu == 1) {
					// // 	price += 0;
					// // } else {
					// // 	price += ( price1GHz * cpu ) - price1GHz;
					// // }

					// Calculate the RAM extra cost - RAM - the initial 256MB
					var price256 = parseFloat(pricespec.ram_gb_mo) / 4;
					if (cpu >= 3 && cpu < 6 )
					 	{
						price += ( parseFloat(pricespec.ram_gb_mo) * ram ) * cpu - ( parseFloat(pricespec.ram_gb_mo) * ram ) * cpu * 0.05 ;
						} 
						else if  (cpu >= 6 && cpu < 12  )
						{
						price += ( parseFloat(pricespec.ram_gb_mo) * ram ) * cpu - ( parseFloat(pricespec.ram_gb_mo) * ram ) * cpu * 0.1 ;
						}
						else if  (cpu == 12 )
						{
							price += ( parseFloat(pricespec.ram_gb_mo) * ram ) * cpu - ( parseFloat(pricespec.ram_gb_mo) * ram ) * cpu * 0.2 
						}
						else {price += ( parseFloat(pricespec.ram_gb_mo) * ram ) * cpu;};



					

							if (cpu >= 3 && cpu < 6) 
							{
								$("div#QsPrice div#sales").html('Скидка: <span class="sales-p">5%</span>');
								$("div#QsPrice div#saless").html('Экономия:'+'<span class="sales-c">'+(parseFloat(pricespec.ram_gb_mo) * ram ) * cpu * 0.05+'</span>' );	
							}
							else if(cpu >= 6 && cpu < 12)
							{	 	
							$("div#QsPrice div#sales").html('Скидка: <span class="sales-p">10%</span>')
							$("div#QsPrice div#saless").html('Экономия:'+'<span class="sales-c">'+(parseFloat(pricespec.ram_gb_mo) * ram ) * cpu * 0.1+'</span>' );
							}
							else if(cpu == 12)
							{	 	$("div#QsPrice div#sales").html('Скидка: <span class="sales-p">20%</span>')
									$("div#QsPrice div#saless").html('Экономия:'+'<span class="sales-c">'+(parseFloat(pricespec.ram_gb_mo) * ram ) * cpu * 0.2+'</span>' );
							}
						
							else 
							{	 	
								$("div#QsPrice div#sales").html(" ")
								$("div#QsPrice div#saless").html(" ");
							};



					// Check the price, if its a cpanel selected
					if (panel_is_nocp) {
						price -= o.cPanelPrice;
					}

					// Check the period, if its a year then multiply by 12
					if (period_is_year) {
						price *= 12;
					}

					// Discount on annually billing?
					// do that too.
					if (period_is_year) {
						price = price - ( price * o.discount );
						price = price = ( price / 12 );
					}

					// now split the price and return an object.
					var priceParts = price.toFixed(2).toString().split(".");
					return {
						"doller": priceParts[0],
						"cents":  priceParts[1],
						"price":  price
						
					}
				};

				// Let's work for buy now url values
				var buyURL = function() {

					// Getting RAM value numaric only
					var ramAmount = $("div.values div#ramvalue").text().replace(/[^0-9]/gi, '');

					// Calculation for RAM to convert GB to MB for > then 512MB
					if (ramAmount < 256) {
					ramAmount *= 1024;
					} else {
						ramAmount
					}

					// Getting CPU and HDD values numaric only
					var cpuAmount = $("div.values div#cpuvalue").text().replace(/[^0-9]/gi, '');
					// var hddSize = $("div.values div#hddvalue").text().replace(/[^0-9]/gi, '');

					// Returns the URL that will set the cart

					// URL can use any CURL options // example is for whmcs cart/order from
					var bterms = ( $("#qsSlider #period").slider("value") ) ? "annually" : "monthly" // Biling Terms Annually or Monthly
					var nocp = ( $("#qsSlider #panel").slider("value") ) ? o.cpYesID : o.cpNoID  // ids are only for example, please collect them from your whmcs Configuration options

					// &configoption[id]  are only for example, please collect them from your whmcs admin >> Configuration options
					var url = o.BuyNowLink
						+ o.cpuID  + cpuAmount
						+ o.ramID  + ramAmount
						// + o.hddID  + hddSize
						+ o.cpID  + nocp
						+ "&billingcycle=" + bterms;
					return url;
				};


				// Checks the position of the sliders to see if they are at a preset. if they are, then sets that preset button selected.
				var checkValueForPreset = function() {
					// Remove the classes first.
					$("div#presets div.product .btn").removeClass('btn-primary');
					// If one is a preset... make it selected.
					for (i in presetspec) {
						var presetData = presetspec[i];
						var sliderCPU  = $("div#QsControls div#cpu").slider("value");
						var sliderRAM  = $("div#QsControls div#ram").slider("value");
						var sliderHDD  = $("div#QsControls div#hdd").slider("value");
						if ( presetData.cpu == sliderCPU
							&& presetData.ram == sliderRAM
							&& presetData.hdd == sliderHDD ) {
							var presetClass = "preset" + i.toLowerCase();
							$("div#presets div.product .btn").removeClass('btn-primary');
							$("div#presets div."+presetClass+" .btn").addClass('btn-primary');
						}
					}
				};
			};
		});

			// maintain chainability
			return this;
		}
	});

	$.fn.extend({
		qsSlider: $.fn.qsSlider
	});

})(jQuery);