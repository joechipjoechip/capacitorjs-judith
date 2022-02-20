const mqMobile = "(max-width: 414px)";
const mqDesktop = "(min-width: 415px)";
const mqDesktopLarge = "(min-width: 1921px)";

export const state = () => ({
	mqMobile,
	mqDesktop,
	mqDesktopLarge,
	isMobile: false,
	isMobileNavOpen: false,
});

export const mutations = {

	updateIsMobile(state) {

		state.isMobile = window.matchMedia(state.mqMobile).matches;
	
	},

	setMobileNavOpen(state, newState) {

		state.isMobileNavOpen = newState;
		
	}

};
