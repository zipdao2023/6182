module.exports = (Plugin, Api, Vendor) => {
	if (typeof BDFDB !== "object") global.BDFDB = {$: Vendor.$, BDv2Api: Api};
	
	const {$} = Vendor;

	return class extends Plugin {
		initConstructor () {
			this.types = {
				"message1":				{implemented:true,	name:"New Chatmessage",					src:"/assets/dd920c06a01e5bb8b09678581e29d56f.mp3"},
				"dm":					{implemented:true,	name:"Direct Message",					src:"/assets/84c9fa3d07da865278bd77c97d952db4.mp3"},
				"mentioned":			{implemented:true,	name:"Mention Ping",					src:"/assets/a5f42064e8120e381528b14fd3188b72.mp3"},
				"deafen":				{implemented:true,	name:"Voicechat Deafen",				src:"/assets/e4d539271704b87764dc465b1a061abd.mp3"},
				"mute":					{implemented:true,	name:"Voicechat Mute",					src:"/assets/429d09ee3b86e81a75b5e06d3fb482be.mp3"},
				"disconnect":			{implemented:true,	name:"Voicechat Disconnect",			src:"/assets/7e125dc075ec6e5ae796e4c3ab83abb3.mp3"},
				"undeafen":				{implemented:true,	name:"Voicechat Undeafen",				src:"/assets/5a000a0d4dff083d12a1d4fc2c7cbf66.mp3"},
				"unmute":				{implemented:true,	name:"Voicechat Unmute",				src:"/assets/43805b9dd757ac4f6b9b58c1a8ee5f0d.mp3"},
				"user_join":			{implemented:true,	name:"Voicechat User Joined",			src:"/assets/5dd43c946894005258d85770f0d10cff.mp3"},
				"user_leave":			{implemented:true,	name:"Voicechat User Left",				src:"/assets/4fcfeb2cba26459c4750e60f626cebdc.mp3"},
				"user_moved":			{implemented:true,	name:"Voicechat User Moved",			src:"/assets/e81d11590762728c1b811eadfa5be766.mp3"},
				"ptt_start":			{implemented:true,	name:"Push2Talk Start",					src:"/assets/8b63833c8d252fedba6b9c4f2517c705.mp3"},
				"ptt_stop":				{implemented:true,	name:"Push2Talk Stop",					src:"/assets/74ab980d6890a0fa6aa0336182f9f620.mp3"},
				"call_calling":			{implemented:true,	name:"Outgoing Call",					src:"/assets/c6e92752668dde4eee5923d70441579f.mp3"},
				"call_ringing":			{implemented:true,	name:"Incoming Call",					src:"/assets/84a1b4e11d634dbfa1e5dd97a96de3ad.mp3"},
				"call_ringing_beat":	{implemented:false,	name:"Incoming Call Beat",				src:"/assets/b9411af07f154a6fef543e7e442e4da9.mp3"},
				"ddr-down":				{implemented:true,	name:"HotKeys Window Down",				src:"/assets/71f048f8aa7d4b24bf4268a87cbbb192.mp3"},
				"ddr-left":				{implemented:true,	name:"HotKeys Window Left",				src:"/assets/1de04408e62b5d52ae3ebbb91e9e1978.mp3"},
				"ddr-right":			{implemented:true,	name:"HotKeys Window Right",			src:"/assets/2c0433f93db8449e4a82b76dc520cb29.mp3"},
				"ddr-up":				{implemented:true,	name:"HotKeys Window Up",				src:"/assets/68472713f7a62c7c37e0a6a5d5a1faeb.mp3"},
				"human_man":			{implemented:false,	name:"Human Man Voice",					src:"/assets/a37dcd6272ae41cf49295d58c9806fe3.mp3"},
				"mention1":				{implemented:false,	name:"Mention Ping 1",					src:"/assets/fa4d62c3cbc80733bf1f01b9c6f181de.mp3"},
				"mention2":				{implemented:false,	name:"Mention Ping 2",					src:"/assets/a5f42064e8120e381528b14fd3188b72.mp3"},
				"mention3":				{implemented:false,	name:"Mention Ping 3",					src:"/assets/84c9fa3d07da865278bd77c97d952db4.mp3"},
				"message2":				{implemented:false,	name:"New Chatmessage 2",				src:"/assets/15fe810f6cfab609c7fcda61652b9b34.mp3"},
				"message3":				{implemented:false,	name:"New Chatmessage 3",				src:"/assets/53ce6a92d3c233e8b4ac529d34d374e4.mp3"},
				"overlayunlock":		{implemented:false,	name:"Overlay Unlocked",				src:"/assets/ad322ffe0a88436296158a80d5d11baa.mp3"},
				"reconnect":			{implemented:false,	name:"Voicechat Reconnect",				src:"/assets/471cfd0005b112ff857705e894bf41a6.mp3"},
				"robot_man":			{implemented:false,	name:"Robot Man Voice",					src:"/assets/66598bea6e59eb8acdf32cf2d9d75ba9.mp3"}
			};
			
			this.defaults = {
				"---": {
					"---":						null
				},
				"Default": {
					"Communication Channel": 	"https://notificationsounds.com/soundfiles/63538fe6ef330c13a05a3ed7e599d5f7/file-sounds-917-communication-channel.wav",
					"Isn't it": 				"https://notificationsounds.com/soundfiles/ba2fd310dcaa8781a9a652a31baf3c68/file-sounds-969-isnt-it.wav",
					"Job Done": 				"https://notificationsounds.com/soundfiles/5b69b9cb83065d403869739ae7f0995e/file-sounds-937-job-done.wav",
					"Served": 					"https://notificationsounds.com/soundfiles/b337e84de8752b27eda3a12363109e80/file-sounds-913-served.wav",
					"Solemn": 					"https://notificationsounds.com/soundfiles/53fde96fcc4b4ce72d7739202324cd49/file-sounds-882-solemn.wav",
					"System Fault": 			"https://notificationsounds.com/soundfiles/ebd9629fc3ae5e9f6611e2ee05a31cef/file-sounds-990-system-fault.wav",
					"You wouldn't believe": 	"https://notificationsounds.com/soundfiles/087408522c31eeb1f982bc0eaf81d35f/file-sounds-949-you-wouldnt-believe.wav"
				},
				"Discord": {
					"HotKeys Window Down":		"/assets/71f048f8aa7d4b24bf4268a87cbbb192.mp3",
					"HotKeys Window Left":		"/assets/1de04408e62b5d52ae3ebbb91e9e1978.mp3",
					"HotKeys Window Right":		"/assets/2c0433f93db8449e4a82b76dc520cb29.mp3",
					"HotKeys Window Up":		"/assets/68472713f7a62c7c37e0a6a5d5a1faeb.mp3",
					"Human Man Voice":			"/assets/a37dcd6272ae41cf49295d58c9806fe3.mp3",
					"Incoming Call":			"/assets/84a1b4e11d634dbfa1e5dd97a96de3ad.mp3",
					"Incoming Call Beat":		"/assets/b9411af07f154a6fef543e7e442e4da9.mp3",
					"Mention Ping 1":			"/assets/fa4d62c3cbc80733bf1f01b9c6f181de.mp3",
					"Mention Ping 2":			"/assets/a5f42064e8120e381528b14fd3188b72.mp3",
					"Mention Ping 3":			"/assets/84c9fa3d07da865278bd77c97d952db4.mp3",
					"New Chatmessage 1":		"/assets/dd920c06a01e5bb8b09678581e29d56f.mp3",
					"New Chatmessage 2":		"/assets/15fe810f6cfab609c7fcda61652b9b34.mp3",
					"New Chatmessage 3":		"/assets/53ce6a92d3c233e8b4ac529d34d374e4.mp3",
					"Outgoing Call":			"/assets/c6e92752668dde4eee5923d70441579f.mp3",
					"Overlay Unlocked":			"/assets/ad322ffe0a88436296158a80d5d11baa.mp3",
					"Push2Talk Start":			"/assets/8b63833c8d252fedba6b9c4f2517c705.mp3",
					"Push2Talk Stop":			"/assets/74ab980d6890a0fa6aa0336182f9f620.mp3",
					"Robot Man Voice":			"/assets/66598bea6e59eb8acdf32cf2d9d75ba9.mp3",
					"Voicechat Deafen":			"/assets/e4d539271704b87764dc465b1a061abd.mp3",
					"Voicechat Disconnect":		"/assets/7e125dc075ec6e5ae796e4c3ab83abb3.mp3",
					"Voicechat Mute":			"/assets/429d09ee3b86e81a75b5e06d3fb482be.mp3",
					"Voicechat Undeafen":		"/assets/5a000a0d4dff083d12a1d4fc2c7cbf66.mp3",
					"Voicechat Unmute":			"/assets/43805b9dd757ac4f6b9b58c1a8ee5f0d.mp3",
					"Voicechat User Joined":	"/assets/5dd43c946894005258d85770f0d10cff.mp3",
					"Voicechat User Left":		"/assets/4fcfeb2cba26459c4750e60f626cebdc.mp3",
					"Voicechat User Moved":		"/assets/e81d11590762728c1b811eadfa5be766.mp3",
					"Voicechat Reconnect":		"/assets/471cfd0005b112ff857705e894bf41a6.mp3"
				}
			};
			
			this.audios = {};
			
			this.choices = [];
			
			this.oldmentions = {};
			
			this.firedEvents = {};

			this.hasPatchedOutgoing = false;
		}

		onStart () {
			var libraryScript = null;
			if (typeof BDFDB !== "object" || typeof BDFDB.isLibraryOutdated !== "function" || BDFDB.isLibraryOutdated()) {
				libraryScript = document.querySelector('head script[src="https://mwittrien.github.io/BetterDiscordAddons/Plugins/BDFDB.js"]');
				if (libraryScript) libraryScript.remove();
				libraryScript = document.createElement("script");
				libraryScript.setAttribute("type", "text/javascript");
				libraryScript.setAttribute("src", "https://mwittrien.github.io/BetterDiscordAddons/Plugins/BDFDB.js");
				document.head.appendChild(libraryScript);
			}
			this.startTimeout = setTimeout(() => {this.initialize();}, 30000);
			if (typeof BDFDB === "object" && typeof BDFDB.isLibraryOutdated === "function") this.initialize();
			else libraryScript.addEventListener("load", () => {this.initialize();});
			return true;
		}

		initialize () {
			if (typeof BDFDB === "object") {
				BDFDB.loadMessage(this);
				
				this.SoundUtils = BDFDB.WebModules.findByProperties("playSound");
				
				this.patchCancel = BDFDB.WebModules.monkeyPatch(this.SoundUtils, "playSound", {instead: (e) => {
					setImmediate(() => {
						var type = e.methodArguments[0];
						if (type == "message1") {
							if (this.firedEvents["dm"]) {
								type = "dm";
								this.firedEvents["dm"] = false;
							}
							else if (this.firedEvents["mentioned"]) {
								type = "mentioned";
								this.firedEvents["mentioned"] = false;
							}
						}
						this.playAudio(type);
					});
				}});
			
				var incomingCallAudio = new Audio();
				this.incomingCallOwnerInstance = BDFDB.getOwnerInstance({"node":document.querySelector(BDFDB.dotCN.callcontainer), "props":["startRinging","stopRinging"], "up":true});
				this.oldStartRining = this.incomingCallOwnerInstance.startRinging;
				this.oldStopRining = this.incomingCallOwnerInstance.stopRinging;
				this.incomingCallOwnerInstance.startRinging = () => {
					incomingCallAudio.pause();
					incomingCallAudio.loop = true;
					incomingCallAudio.src = this.choices["call_ringing"].src;
					incomingCallAudio.volume = this.choices["call_ringing"].volume/100;
					incomingCallAudio.play();
				};
				this.incomingCallOwnerInstance.stopRinging = () => {incomingCallAudio.pause();};
				
				this.loadAudios();
				this.loadChoices();
				
				var observer = null;

				observer = new MutationObserver((changes, _) => {
					this.fireEvent("dm");
				});
				BDFDB.addObserver(this, null, {name:"dmBadgeObserver",instance:observer,multi:true}, {characterData: true, subtree: true});
				
				observer = new MutationObserver((changes, _) => {
					this.fireEvent("mentioned");
				});
				BDFDB.addObserver(this, null, {name:"mentionBadgeObserver",instance:observer,multi:true}, {characterData: true, subtree: true});
				
				observer = new MutationObserver((changes, _) => {
					changes.forEach(
						(change, i) => {
							if (change.addedNodes) {
								change.addedNodes.forEach((node) => {
									BDFDB.addObserver(this, node, {name:"dmBadgeObserver",multi:true}, {characterData: true, subtree: true});
									this.fireEvent("dm");
								});
							}
						}
					);
				});
				BDFDB.addObserver(this, BDFDB.dotCN.dms, {name:"dmObserver",instance:observer}, {childList: true});
				
				observer = new MutationObserver((changes, _) => {
					changes.forEach(
						(change, i) => {
							if (change.addedNodes) {
								change.addedNodes.forEach((node) => {
									if (node && node.className === BDFDB.disCN.badge) {
										var data = BDFDB.getKeyInformation({"node":node.parentElement,"key":"guild"});
										if (data) {
											BDFDB.addObserver(this, node, {name:"mentionBadgeObserver",multi:true}, {characterData: true, subtree: true});
											if (this.oldmentions && this.oldmentions[data.id] == 0) this.fireEvent("mentioned");
										}
									}
									if (node && node.classList && node.classList.contains(BDFDB.disCN.guild) && !node.classList.contains(BDFDB.disCN.guildsadd) && !document.querySelector(BDFDB.dotCN.dms).contains(node)) {
										BDFDB.addObserver(this, node, {name:"mentionBadgeObserver",multi:true}, {characterData: true, subtree: true});
									}
								});
							}
							if (change.removedNodes) {
								change.removedNodes.forEach((node) => {
									if (node && node.className === BDFDB.disCN.badge) {
										this.oldmentions = BDFDB.getKeyInformation({"node":document.querySelector(BDFDB.dotCN.layers),"key":"mentionCounts"});
									}
								});
							}
						}
					);
				});
				BDFDB.addObserver(this, BDFDB.dotCN.guilds, {name:"mentionObserver",instance:observer}, {childList: true, subtree:true});
				
				observer = new MutationObserver((changes, _) => {
					changes.forEach(
						(change, i) => {
							if (change.addedNodes) {
								change.addedNodes.forEach((node) => {
									if (node.classList && node.classList.contains(BDFDB.dotCN.channeliconspacing) && $(node).find(BDFDB.dotCN.channelbadge).length > 0) {
										BDFDB.addObserver(this, node, {name:"mentionBadgeObserver",multi:true}, {characterData: true, subtree: true});
										this.fireEvent("mentioned");
										this.oldmentions = BDFDB.getKeyInformation({"node":$(BDFDB.dotCN.channelswrap).parent()[0],"key":"mentionCounts"});
									}
								});
							}
							if (change.removedNodes) {
								change.removedNodes.forEach((node) => {
									if (node.classList && node.classList.contains(BDFDB.dotCN.channeliconspacing) && $(node).find(BDFDB.dotCN.channelbadge).length > 0) {
										this.oldmentions = BDFDB.getKeyInformation({"node":$(BDFDB.dotCN.channelswrap).parent()[0],"key":"mentionCounts"});
									}
								});
							}
						}
					);
				});
				BDFDB.addObserver(this, BDFDB.dotCN.channels, {name:"channelListObserver",instance:observer}, {childList: true, subtree: true});
				
				observer = new MutationObserver((changes, _) => {
					changes.forEach(
						(change, i) => {
							if (change.addedNodes) {
								change.addedNodes.forEach((node) => {
									if (node && node.tagName && node.classList.contains(BDFDB.disCN.callcurrentcontainer)) {
										if (!this.hasPatchedOutgoing) {
											var outgoingCallAudio = new Audio();
											let play = () => {
												outgoingCallAudio.loop = true;
												outgoingCallAudio.src = this.choices["call_calling"].src;
												outgoingCallAudio.volume = this.choices["call_calling"].volume/100;
												outgoingCallAudio.play();
											};

											let stop = () => {outgoingCallAudio.pause();}

											var outgoingCallOwnerInstance = BDFDB.getOwnerInstance({"node":node, "props":["startRinging"], "up":true});
											outgoingCallOwnerInstance.stopRinging();
											outgoingCallOwnerInstance.startRinging = play;
											outgoingCallOwnerInstance.stopRinging = stop;

											let CallingWrap = outgoingCallOwnerInstance._reactInternalFiber.type;
											this.cancelOutgoingStart = BDFDB.WebModules.monkeyPatch(CallingWrap.prototype, "startRinging", {instead: play});
											this.cancelOutgoingStop = BDFDB.WebModules.monkeyPatch(CallingWrap.prototype, "stopRinging", {instead: stop});

											this.hasPatchedOutgoing = true;
										}
									}
								});
							}
						}
					);
				});
				BDFDB.addObserver(this, BDFDB.dotCNS.chat, {name:"chatObserver",instance:observer}, {childList:true});
				
				BDFDB.readServerList().forEach((serverObj) => {
					var badge = serverObj.div.querySelector(BDFDB.dotCN.badge);
					if (badge) {
						BDFDB.addObserver(this, badge, {name:"mentionBadgeObserver",multi:true}, {characterData: true, subtree: true});
					}
				});
				
				BDFDB.readDmList().forEach((dmObj) => {
					var badge = dmObj.div.querySelector(BDFDB.dotCN.badge);
					if (badge) {
						BDFDB.addObserver(this, badge, {name:"dmBadgeObserver",multi:true}, {characterData: true, subtree: true});
					}
				});
				
				return true;
			}
			else {
				console.error(`%c[${this.name}]%c`, 'color: #3a71c1; font-weight: 700;', '', 'Fatal Error: Could not load BD functions!');
				return false;
			}
		}


		onStop () {
			if (typeof BDFDB === "object") {
				if (typeof this.patchCancel === "function") this.patchCancel();
				if (typeof this.cancelOutgoingStart === "function") this.cancelOutgoingStart();
				if (typeof this.cancelOutgoingStop === "function") this.cancelOutgoingStop();
			
				this.incomingCallOwnerInstance.startRinging = this.oldStartRining;
				this.incomingCallOwnerInstance.stopRinging = this.oldStopRining;
				
				BDFDB.unloadMessage(this);
				return true;
			}
			else {
				return false;
			}
		}

		onSwitch () {
			if (typeof BDFDB === "object") {
				if (!this.hasPatchedOutgoing) BDFDB.addObserver(this, BDFDB.dotCNS.chat, {name:"chatObserver"}, {childList:true});
			}
		}

		
		// begin of own functions
		
		resetAll (settingspanel) {
			if (confirm("Are you sure you want to delete all added songs?")) {
				BDFDB.removeAllData(this, "choices");
				BDFDB.removeAllData(this, "audios");
				this.loadAudios();
				this.loadChoices();
				settingspanel.querySelectorAll(BDFDB.dotCN.select).forEach((wrap) => {
					wrap.setAttribute("value", "---");
					wrap.querySelector(BDFDB.dotCN.title).innerText = "---";
				});
				settingspanel.querySelectorAll(BDFDB.dotCN.slidergrabber).forEach((grabber) => {
					grabber.style.left = "100%";
				});
				settingspanel.querySelectorAll(BDFDB.dotCN.sliderbarfill).forEach((bar) => {
					bar.style.width = "100%";
				});
				settingspanel.querySelectorAll(".volumeInput").forEach((input) => {
					input.value = 100;
				});
			}
		}
		
		openDropdownMenu (settingspanel, e) {
			var selectControl = e.currentTarget;
			var selectWrap = selectControl.parentElement;
			
			if (selectWrap.classList.contains(BDFDB.disCN.selectisopen)) return;
			
			selectWrap.classList.add(BDFDB.disCN.selectisopen);
			
			var type = selectWrap.getAttribute("type");
			var option = selectWrap.getAttribute("option");
			var categorySelect = settingspanel.querySelector(`${BDFDB.dotCN.select}[type="${type}"][option="category"]`);
			var songSelect = settingspanel.querySelector(`${BDFDB.dotCN.select}[type="${type}"][option="song"]`);
			
			var category = categorySelect.getAttribute("value");
			var song = songSelect.getAttribute("value");
			
			var selectMenu = this.createDropdownMenu({type, option, category, song});
			selectWrap.appendChild(selectMenu);
			
			$(selectMenu).on("mousedown." + this.name, BDFDB.dotCN.selectoption, (e2) => {
				var choice = BDFDB.loadData(type, this, "choices");
				var selection = e2.currentTarget.textContent;
				selectWrap.setAttribute("value", selection);
				selectControl.querySelector(BDFDB.dotCN.title).innerText = selection;
				choice[option] = selection;
				if (option == "category") {
					choice.song = Object.keys(this.audios[selection])[0];
					songSelect.outerHTML = `<div type="${type}" option="song" value="${choice.song}" class="${BDFDB.disCNS.select + BDFDB.disCNS.selectsingle + BDFDB.disCN.selecthasvalue}"><div class="${BDFDB.disCN.selectcontrol}"><div class="${BDFDB.disCNS.flex + BDFDB.disCNS.flex2 + BDFDB.disCNS.horizontal + BDFDB.disCNS.horizontal2 + BDFDB.disCNS.directionrow + BDFDB.disCNS.justifystart + BDFDB.disCNS.alignbaseline + BDFDB.disCNS.nowrap + BDFDB.disCN.selectvalue}" style="flex: 1 1 auto;"><div class="${BDFDB.disCNS.title + BDFDB.disCNS.medium + BDFDB.disCNS.size16 + BDFDB.disCNS.height20 + BDFDB.disCNS.primary + BDFDB.disCN.weightnormal}" style="padding:0;">${choice.song}</div></div><span class="${BDFDB.disCN.selectarrowzone}"><span class="${BDFDB.disCN.selectarrow}"></span></span></div></div>`;
				}
				choice.src = this.audios[choice.category][choice.song];
				choice.src = choice.src ? choice.src : this.types[type].src;
				choice.volume = settingspanel.querySelector(`.${type}-volume`).value;
				this.saveChoice(type, choice, true);
			});
			$(document).on("mousedown.select" + this.name, (e2) => {
				if (e2.target.parentElement == selectMenu) return;
				$(document).off("mousedown.select" + this.name);
				selectMenu.remove()
				setTimeout(() => {selectWrap.classList.remove(BDFDB.disCN.selectisopen);},100);
			});
		}
		
		createDropdownMenu ({type, option, category, song} = data) {
			var choice = BDFDB.loadData(type, this, "choices");
			var eles = option == "song" ? this.audios[category] : this.audios;
			var menuhtml = `<div class="${BDFDB.disCN.selectmenuouter}"><div class="${BDFDB.disCN.selectmenu}">`;
			for (var ele in eles) {
				var isSelected = choice[option] == ele ? ` ${BDFDB.disCN.selectselected}` : ``;
				menuhtml += `<div class="${BDFDB.disCNS.flex + BDFDB.disCNS.flex2 + BDFDB.disCNS.horizontal + BDFDB.disCNS.horizontal2 + BDFDB.disCNS.directionrow + BDFDB.disCNS.justifystart + BDFDB.disCNS.alignbaseline + BDFDB.disCNS.nowrap + BDFDB.disCN.selectoption + isSelected}" style="flex: 1 1 auto;"><div class="${BDFDB.disCNS.title + BDFDB.disCNS.medium + BDFDB.disCNS.size16 + BDFDB.disCNS.height20 + BDFDB.disCNS.primary + BDFDB.disCN.weightnormal}">${ele}</div></div>`
			}
			menuhtml += `</div></div>`;
			return $(menuhtml)[0];
		}
		
		dragSlider (settingspanel, e) {
			var grabber = e.target;
			var track = grabber.parentNode;
			var slider = track.parentNode;
			var input = slider.querySelector(".volumeInput");
			var bar = slider.querySelector(BDFDB.dotCN.sliderbarfill);
			
			var disableTextSelectionCSS = `
				* {
					user-select: none !important;
				}`;
				
			BDFDB.appendLocalStyle("disableTextSelection", disableTextSelectionCSS);
			
			var volume = 0;
			var sY = 0;
			var sHalfW = grabber.offsetWidth/2;
			var sMinX = $(track).offset().left;
			var sMaxX = sMinX + track.offsetWidth;
			$(document)
				.off("mouseup.slider" + this.name).off("mousemove.slider" + this.name)
				.on("mouseup.slider" + this.name, () => {
					$(document).off("mouseup.slider" + this.name).off("mousemove.slider" + this.name);
					BDFDB.removeLocalStyle("disableTextSelection");
					var type = slider.getAttribute("type");
					var choice = this.choices[type];
					choice.volume = volume;
					this.saveChoice(type, choice, true);
				})
				.on("mousemove.slider" + this.name, (e2) => {
					sY = e2.clientX > sMaxX ? sMaxX - sHalfW : (e2.clientX < sMinX ? sMinX - sHalfW : e2.clientX - sHalfW);
					volume = BDFDB.mapRange([sMinX - sHalfW, sMaxX - sHalfW], [0, 100], sY);
					grabber.style.left = volume + "%";
					bar.style.width = volume + "%";
					input.value = volume;
				});
		}
		
		loadAudios () {
			this.audios = BDFDB.loadAllData(this, "audios");
			if (BDFDB.isObjectEmpty(this.audios)) this.audios = this.defaults;
			BDFDB.saveAllData(this.audios, this, "audios");
		}
		
		saveAudio (settingspanel) {
			var valid = true;
			var inputs = settingspanel.querySelectorAll(".songInput");
			inputs.forEach((input) => {
				if (!input.value || input.value.length == 0 || input.value.trim().length == 0) valid = false;
			});
			if (valid) {
				var successSavedAudio;
				var category = settingspanel.querySelector("#input-category").value;
				var song = settingspanel.querySelector("#input-song").value;
				var url = settingspanel.querySelector("#input-url").value;
				if (url.indexOf("http") == 0) {
					require("request")(url, (error, response, result) => {
						if (response) {
							var type = response.headers["content-type"];
							if (type && (type.indexOf("octet-stream") > -1 || type.indexOf("audio") > -1 || type.indexOf("video") > -1)) {
								successSavedAudio();
								return;
							}
						}
						BDFDB.showToast("Use a valid direct link to a video or audio source. They usually end on something like .mp3, .mp4 or .wav.", {type:"danger"});
					});
				}
				else {
					require("fs").readFile(url, (error, response) => {
						if (error) {
							BDFDB.showToast("Could not fetch file. Please make sure the file exists.", {type:"danger"});
						}
						else {
							url = `data:audio/mpeg;base64,${response.toString("base64")}`;
							successSavedAudio();
						}
					});
				}
				
				successSavedAudio = () => {
					BDFDB.showToast(`Song ${song} was added to category ${category}.`, {type:"success"});
					if (!this.audios[category]) this.audios[category] = {};
					this.audios[category][song] = url;
					BDFDB.saveAllData(this.audios, this, "audios");
					inputs.forEach((input) => {
						input.value = "";
					});
				};
			}
			else {
				BDFDB.showToast("Fill out all fields to add a new song.", {type:"danger"});
			}
		}
		
		loadChoices () {
			for (var type in this.types) {
				var choice = BDFDB.loadData(type, this, "choices");
				choice = choice ? choice : {};
				
				var songFound = false;
				for (var category in this.audios) {
					if (choice.category == category) {
						for (var song in this.audios[category]) {
							if (choice.song == song) {
								songFound = true;
								break;
							}
						}
					}
				}
				if (!songFound) choice = {"category":"---","song":"---","volume":100,"src":this.types[type].src};
				this.saveChoice(type, choice, false);
			}
		}
		
		saveChoice (type, choice, play) {
			BDFDB.saveData(type, choice, this, "choices");
			this.choices[type] = choice;
			if (play) this.playAudio(type);
		}
		
		playAudio (type) {
			this.audio.pause();
			this.audio.src = this.choices[type].src;
			this.audio.volume = this.choices[type].volume/100;
			this.audio.play();
		}
		
		fireEvent (type) {
			this.firedEvents[type] = true;
			setTimeout(() => {this.firedEvents[type] = false;},3000);
		}
		
		getSettingsPanel () {			
			var fields = ["category","song"];
			
			var settingshtml = `<div class="DevilBro-settings ${this.name}-settings">`;
			
			settingshtml += `<div class="add-new-song-settings"><div class="${BDFDB.disCNS.flex + BDFDB.disCNS.flex2 + BDFDB.disCNS.horizontal + BDFDB.disCNS.horizontal2 + BDFDB.disCNS.directionrow + BDFDB.disCNS.justifystart + BDFDB.disCNS.aligncenter + BDFDB.disCNS.nowrap + BDFDB.disCN.marginbottom8}" style="flex: 1 1 auto;"><h3 class="${BDFDB.disCNS.titledefault + BDFDB.disCNS.title + BDFDB.disCNS.marginreset + BDFDB.disCNS.weightmedium + BDFDB.disCNS.size16 + BDFDB.disCNS.height24 + BDFDB.disCN.flexchild}" style="flex: 0 0 auto;">Add New Song:</h3></div>`;
			settingshtml += `<div class="${BDFDB.disCNS.flex + BDFDB.disCNS.flex2 + BDFDB.disCNS.horizontal + BDFDB.disCNS.horizontal2 + BDFDB.disCNS.directionrow + BDFDB.disCNS.justifystart + BDFDB.disCNS.aligncenter + BDFDB.disCNS.nowrap + BDFDB.disCN.marginbottom8}" style="flex: 1 1 auto;">`;
			settingshtml += `<div class="${BDFDB.disCN.flexchild}" style="flex: 1 1 50%;"><h5 class="${BDFDB.disCNS.h5 + BDFDB.disCNS.title + BDFDB.disCNS.size12 + BDFDB.disCNS.height16 + BDFDB.disCNS.weightsemibold + BDFDB.disCNS.h5defaultmargin + BDFDB.disCN.marginbottom4}">Categoryname:</h5><div class="${BDFDB.disCNS.inputwrapper + BDFDB.disCNS.vertical + BDFDB.disCNS.flex + BDFDB.disCNS.directioncolumn + BDFDB.disCN.flexchild}" style="flex: 1 1 auto;"><input type="text" placeholder="Category" class="${BDFDB.disCNS.inputdefault + BDFDB.disCNS.input + BDFDB.disCN.size16} songInput" id="input-category"></div></div>`;
			settingshtml += `<div class="${BDFDB.disCN.flexchild}" style="flex: 1 1 50%;"><h5 class="${BDFDB.disCNS.h5 + BDFDB.disCNS.title + BDFDB.disCNS.size12 + BDFDB.disCNS.height16 + BDFDB.disCNS.weightsemibold + BDFDB.disCNS.h5defaultmargin + BDFDB.disCN.marginbottom4}">Songname:</h5><div class="${BDFDB.disCNS.inputwrapper + BDFDB.disCNS.vertical + BDFDB.disCNS.flex + BDFDB.disCNS.directioncolumn + BDFDB.disCN.flexchild}" style="flex: 1 1 auto;"><input type="text" placeholder="Name" class="${BDFDB.disCNS.inputdefault + BDFDB.disCNS.input + BDFDB.disCN.size16} songInput" id="input-song"></div></div>`;
			settingshtml += `</div>`;
			settingshtml += `<div class="${BDFDB.disCNS.flex + BDFDB.disCNS.flex2 + BDFDB.disCNS.horizontal + BDFDB.disCNS.horizontal2 + BDFDB.disCNS.directionrow + BDFDB.disCNS.justifystart + BDFDB.disCNS.aligncenter + BDFDB.disCNS.nowrap + BDFDB.disCN.marginbottom8}" style="flex: 1 1 auto;">`;
			settingshtml += `<div class="${BDFDB.disCN.flexchild}" style="flex: 1 1 auto;"><h5 class="${BDFDB.disCNS.h5 + BDFDB.disCNS.title + BDFDB.disCNS.size12 + BDFDB.disCNS.height16 + BDFDB.disCNS.weightsemibold + BDFDB.disCNS.h5defaultmargin + BDFDB.disCN.marginbottom4}">File:</h5><div class="${BDFDB.disCNS.flex + BDFDB.disCNS.flex2 + BDFDB.disCNS.horizontal + BDFDB.disCNS.horizontal2 + BDFDB.disCNS.directionrow + BDFDB.disCNS.justifystart + BDFDB.disCNS.aligncenter + BDFDB.disCN.nowrap}" style="flex: 1 1 auto;"><div class="${BDFDB.disCNS.inputwrapper + BDFDB.disCNS.vertical + BDFDB.disCNS.flex + BDFDB.disCNS.directioncolumn + BDFDB.disCN.flexchild}"  style="flex: 1 1 auto;"><input type="text" placeholder="Url or Filepath" class="${BDFDB.disCNS.inputdefault + BDFDB.disCNS.input + BDFDB.disCN.size16} songInput" id="input-url"></div><button type="button" class="${BDFDB.disCNS.flexchild + BDFDB.disCNS.button + BDFDB.disCNS.buttonlookfilled + BDFDB.disCNS.buttoncolorbrand + BDFDB.disCNS.buttonsizemedium + BDFDB.disCN.buttongrow} file-navigator" id="input-file" style="flex: 0 0 auto;"><div class="${BDFDB.disCN.buttoncontents}"></div><input type="file" accept="audio/*,video/*" style="display:none!important;"></button><button type="button" class="${BDFDB.disCNS.flexchild + BDFDB.disCNS.button + BDFDB.disCNS.buttonlookfilled + BDFDB.disCNS.buttoncolorbrand + BDFDB.disCNS.buttonsizemedium + BDFDB.disCN.buttongrow} btn-add btn-addsong" style="flex: 0 0 auto;"><div class="${BDFDB.disCN.buttoncontents}"></div></button></div></div>`;
			settingshtml += `</div>`;
			settingshtml += `</div>`;
			
			for (var type in this.types) {
				var choice = BDFDB.loadData(type, this, "choices");
				var unimplemented = this.types[type].implemented ? "" : " unimplemented";
				settingshtml += `<div class="${type}-song-settings ${unimplemented}"><div class="${BDFDB.disCNS.flex + BDFDB.disCNS.flex2 + BDFDB.disCNS.horizontal + BDFDB.disCNS.horizontal2 + BDFDB.disCNS.directionrow + BDFDB.disCNS.justifystart + BDFDB.disCNS.aligncenter + BDFDB.disCNS.nowrap + BDFDB.disCN.marginbottom8}" style="flex: 1 1 auto;"><h3 class="${BDFDB.disCNS.titledefault + BDFDB.disCNS.title + BDFDB.disCNS.marginreset + BDFDB.disCNS.weightmedium + BDFDB.disCNS.size16 + BDFDB.disCNS.height24 + BDFDB.disCN.flexchild}" style="flex: 0 0 auto;">${this.types[type].name}:</h3></div><div class="${BDFDB.disCNS.flex + BDFDB.disCNS.flex2 + BDFDB.disCNS.horizontal + BDFDB.disCNS.horizontal2 + BDFDB.disCNS.directionrow + BDFDB.disCNS.justifystart + BDFDB.disCNS.aligncenter + BDFDB.disCNS.nowrap + BDFDB.disCN.marginbottom8}" style="flex: 1 1 auto;">`;
				for (var key of fields) {
					settingshtml += `<div class="${BDFDB.disCN.flexchild}" style="flex: 1 1 33%;"><h5 class="${BDFDB.disCNS.h5 + BDFDB.disCNS.title + BDFDB.disCNS.size12 + BDFDB.disCNS.height16 + BDFDB.disCNS.weightsemibold + BDFDB.disCNS.h5defaultmargin + BDFDB.disCN.marginbottom4}">${key}:</h5><div class="${BDFDB.disCN.selectwrap}"><div type="${type}" option="${key}" value="${choice[key]}" class="${BDFDB.disCNS.select + BDFDB.disCNS.selectsingle + BDFDB.disCN.selecthasvalue}"><div class="${BDFDB.disCN.selectcontrol}"><div class="${BDFDB.disCNS.flex + BDFDB.disCNS.flex2 + BDFDB.disCNS.horizontal + BDFDB.disCNS.horizontal2 + BDFDB.disCNS.directionrow + BDFDB.disCNS.justifystart + BDFDB.disCNS.alignbaseline + BDFDB.disCNS.nowrap + BDFDB.disCN.selectvalue}" style="flex: 1 1 auto;"><div class="${BDFDB.disCNS.title + BDFDB.disCNS.medium + BDFDB.disCNS.size16 + BDFDB.disCNS.height20 + BDFDB.disCNS.primary + BDFDB.disCN.weightnormal}" style="padding:0;">${choice[key]}</div></div><span class="${BDFDB.disCN.selectarrowzone}"><span class="${BDFDB.disCN.selectarrow}"></span></span></div></div></div></div>`;
				}
				settingshtml += `<div class="${BDFDB.disCN.flexchild}" style="flex: 1 1 33%;"><h5 class="${BDFDB.disCNS.h5 + BDFDB.disCNS.title + BDFDB.disCNS.size12 + BDFDB.disCNS.height16 + BDFDB.disCNS.weightsemibold + BDFDB.disCNS.h5defaultmargin + BDFDB.disCN.marginbottom4}">volume:</h5><div type="${type}" class="${BDFDB.disCN.slider}"><input type="number" class="${type}-volume ${BDFDB.disCN.sliderinput} volumeInput" value="${choice.volume}" readonly=""><div class="${BDFDB.disCN.sliderbar}"><div class="${BDFDB.disCN.sliderbarfill}" style="width: ${choice.volume}%;"></div></div><div class="${BDFDB.disCN.slidertrack}"><div class="${BDFDB.disCN.slidergrabber} marginTop" style="left: ${choice.volume}%;"></div></div></div></div>`;
				settingshtml += `</div></div>`;
			}
			settingshtml += `<div class="${BDFDB.disCNS.flex + BDFDB.disCNS.flex2 + BDFDB.disCNS.horizontal + BDFDB.disCNS.horizontal2 + BDFDB.disCNS.directionrow + BDFDB.disCNS.justifystart + BDFDB.disCNS.aligncenter + BDFDB.disCNS.nowrap + BDFDB.disCN.marginbottom8}" style="flex: 1 1 auto;"><h3 class="${BDFDB.disCNS.titledefault + BDFDB.disCNS.title + BDFDB.disCNS.marginreset + BDFDB.disCNS.weightmedium + BDFDB.disCNS.size16 + BDFDB.disCNS.height24 + BDFDB.disCN.flexchild}" style="flex: 1 1 auto;">Show unimplemented Sounds</h3><div class="${BDFDB.disCNS.flexchild + BDFDB.disCNS.switchenabled + BDFDB.disCNS.switch + BDFDB.disCNS.switchvalue + BDFDB.disCNS.switchsizedefault + BDFDB.disCNS.switchsize + BDFDB.disCN.switchthemedefault}" style="flex: 0 0 auto;"><input type="checkbox" class="${BDFDB.disCNS.switchinnerenabled + BDFDB.disCN.switchinner}" id="input-unimplemented"></div></div>`;
			settingshtml += `<div class="${BDFDB.disCNS.flex + BDFDB.disCNS.flex2 + BDFDB.disCNS.horizontal + BDFDB.disCNS.horizontal2 + BDFDB.disCNS.directionrow + BDFDB.disCNS.justifystart + BDFDB.disCNS.aligncenter + BDFDB.disCNS.nowrap + BDFDB.disCN.marginbottom20}" style="flex: 0 0 auto;"><h3 class="${BDFDB.disCNS.titledefault + BDFDB.disCNS.title + BDFDB.disCNS.marginreset + BDFDB.disCNS.weightmedium + BDFDB.disCNS.size16 + BDFDB.disCNS.height24 + BDFDB.disCN.flexchild}" style="flex: 1 1 auto;">Remove all added songs.</h3><button type="button" class="${BDFDB.disCNS.flexchild + BDFDB.disCNS.button + BDFDB.disCNS.buttonlookfilled + BDFDB.disCNS.buttoncolorred + BDFDB.disCNS.buttonsizemedium + BDFDB.disCN.buttongrow} reset-button" style="flex: 0 0 auto;"><div class="${BDFDB.disCN.buttoncontents}">Reset</div></button></div>`;
			settingshtml += `</div>`;
			
			var settingspanel = $(settingshtml)[0];

			$(settingspanel)
				.on("click", BDFDB.dotCN.selectcontrol, (e) => {this.openDropdownMenu(settingspanel, e);})
				.on("click", ".btn-addsong", (e) => {this.saveAudio(settingspanel);})
				.on("keyup", ".songInput", (e) => {if (e.which == 13) this.saveAudio(settingspanel);})
				.on("click", ".reset-button", () => {this.resetAll(settingspanel);})
				.on("click", "#input-unimplemented", (e) => {
					$(settingspanel).find(".unimplemented").toggle(e.currentTarget.checked);
				})
				.on("mousedown", BDFDB.dotCN.slidergrabber, (e) => {this.dragSlider(settingspanel,e);})
				.find(".unimplemented").hide();
				
			return settingspanel;
		}
	}
};
