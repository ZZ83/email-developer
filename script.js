const mobileSwitch   = document.getElementById('check-mobile');
const darkModeSwitch = document.getElementById('check-dark-mode');
const modalImage     = document.getElementById('modal-image');

const dailySentry = document.getElementById('daily-sentry');
const solace      = document.getElementById('solace');

const overlay       = document.getElementById('overlay');
const closeModal    = document.getElementById('close-modal');


const emailSource = {
	dailySentry: {
		mobileDark:   "images/daily-sentry/mobile-dark.jpg",
		mobileLight:  "images/daily-sentry/mobile-light.jpg",
		desktopDark:  "images/daily-sentry/desktop-dark.jpg",
		desktopLight: "images/daily-sentry/desktop-light.jpg",
	},
	solace: {
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
		} else if (project === "solace") {
			this.paths.mobileDark   = this.solace.mobileDark;
			this.paths.mobileLight  = this.solace.mobileLight;
			this.paths.desktopDark  = this.solace.desktopDark;
			this.paths.desktopLight = this.solace.desktopLight;
		}
	}
}

closeModal.addEventListener('click', function() {
	overlay.style.display = "none";
});


dailySentry.addEventListener('click', function() {
	overlay.style.display = "flex";
	modalImage.src = emailSource.dailySentry.desktopDark;
	darkModeSwitch.checked = true;
	emailSource.setImagesPath("daily-sentry");
});

solace.addEventListener('click', function() {
	overlay.style.display = "flex";
	modalImage.src = emailSource.solace.desktopDark;
	darkModeSwitch.checked = true;
	emailSource.setImagesPath("solace");
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