const solace         = document.getElementById('solace');
const shaggys        = document.getElementById('shaggys');
const dailySentry    = document.getElementById('daily-sentry');
const overlay        = document.getElementById('overlay');
const closeModal     = document.getElementById('close-modal');
const mobileSwitch   = document.getElementById('check-mobile');
const darkModeSwitch = document.getElementById('check-dark-mode');
const modalImage     = document.getElementById('modal-image');
const viewInBrowser  = document.getElementById('view-in-browser');

let isSettingsVisible = false;

const emailSource = {
	dailySentry: {
		url:          "html/newsletter.html",
		mobileDark:   "images/daily-sentry/mobile-dark.jpg",
		mobileLight:  "images/daily-sentry/mobile-light.jpg",
		desktopDark:  "images/daily-sentry/desktop-dark.jpg",
		desktopLight: "images/daily-sentry/desktop-light.jpg",
	},
	shaggys: {
		url:          "html/promotional.html",
		mobileDark:   "images/shaggys/mobile-dark.jpg",
		mobileLight:  "images/shaggys/mobile-light.jpg",
		desktopDark:  "images/shaggys/desktop-dark.jpg",
		desktopLight: "images/shaggys/desktop-light.jpg",
	},
	solace: {
		url:          "html/donation-request.html",
		mobileDark:   "images/solace/mobile-dark.jpg",
		mobileLight:  "images/solace/mobile-light.jpg",
		desktopDark:  "images/solace/desktop-dark.jpg",
		desktopLight: "images/solace/desktop-light.jpg",
	},
	paths: {
		mobileDark:   "",
		mobileLight:  "",
		desktopDark:  "",
		desktopLight: "",
	},
	setImagesPath: function(project) {
		if(project === "daily-sentry") {
			this.paths.mobileDark   = this.dailySentry.mobileDark;
			this.paths.mobileLight  = this.dailySentry.mobileLight;
			this.paths.desktopDark  = this.dailySentry.desktopDark;
			this.paths.desktopLight = this.dailySentry.desktopLight;
		} else if (project === "shaggys") {
			this.paths.mobileDark   = this.shaggys.mobileDark;
			this.paths.mobileLight  = this.shaggys.mobileLight;
			this.paths.desktopDark  = this.shaggys.desktopDark;
			this.paths.desktopLight = this.shaggys.desktopLight;
		}
		 else if (project === "solace") {
			this.paths.mobileDark   = this.solace.mobileDark;
			this.paths.mobileLight  = this.solace.mobileLight;
			this.paths.desktopDark  = this.solace.desktopDark;
			this.paths.desktopLight = this.solace.desktopLight;
		}
	}
}

function resetInputs() {
	mobileSwitch.checked   = false;
	darkModeSwitch.checked = true;
}

closeModal.addEventListener('click', function() {
	overlay.style.display = "none";
	modalImage.style.maxWidth = "600px";
	document.body.style.overflow = "initial";
});

overlay.addEventListener('click', function(event) {
    if (isSettingsVisible && event.target.classList.contains("overlay")) {
        overlay.style.display = "none";
        isSettingsVisible = false;
		document.body.style.overflow = "initial";
    }
});

dailySentry.addEventListener('click', function() {
	document.body.style.overflow = "hidden";
	isSettingsVisible = true;
	resetInputs();
	overlay.style.display = "flex";
	modalImage.src = emailSource.dailySentry.desktopDark;
	darkModeSwitch.checked = true;
	emailSource.setImagesPath("daily-sentry");
	viewInBrowser.href = emailSource.dailySentry.url;
});

shaggys.addEventListener('click', function() {
	document.body.style.overflow = "hidden";
	isSettingsVisible = true;
	resetInputs();
	overlay.style.display = "flex";
	modalImage.src = emailSource.shaggys.desktopDark;
	darkModeSwitch.checked = true;
	emailSource.setImagesPath("shaggys");
	viewInBrowser.href = emailSource.shaggys.url;
});

solace.addEventListener('click', function() {
	document.body.style.overflow = "hidden";
	isSettingsVisible = true;
	resetInputs();
	overlay.style.display = "flex";
	modalImage.src = emailSource.solace.desktopDark;
	darkModeSwitch.checked = true;
	emailSource.setImagesPath("solace");
	viewInBrowser.href = emailSource.solace.url;
});

darkModeSwitch.addEventListener('change', function() {
	if(mobileSwitch.checked && darkModeSwitch.checked) {
		modalImage.src = emailSource.paths.mobileDark;
	} else if( mobileSwitch.checked && !darkModeSwitch.checked ) {
		modalImage.src = emailSource.paths.mobileLight;
	} else if (!mobileSwitch.checked && !darkModeSwitch.checked) {
		modalImage.style.maxWidth = "600px";
		modalImage.src = emailSource.paths.desktopLight;
	} else if (!mobileSwitch.checked && darkModeSwitch.checked) {
		modalImage.style.maxWidth = "600px";
		modalImage.src = emailSource.paths.desktopDark;
	}
});

mobileSwitch.addEventListener('change', function() {
	if( mobileSwitch.checked && !darkModeSwitch.checked ) {
		modalImage.style.maxWidth = "375px";
		modalImage.src = emailSource.paths.mobileLight;
	} else if (!mobileSwitch.checked && darkModeSwitch.checked) {
		modalImage.style.maxWidth = "600px";
		modalImage.src = emailSource.paths.desktopDark;
	} else if (mobileSwitch.checked && darkModeSwitch.checked) {
		modalImage.style.maxWidth = "375px";
		modalImage.src = emailSource.paths.mobileDark;
	} else if (!mobileSwitch.checked && !darkModeSwitch.checked) {
		modalImage.style.maxWidth = "600px";
		modalImage.src = emailSource.paths.desktopLight;
	}
});