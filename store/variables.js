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

		// console.log("mutation for $store.state.variables.isMobile has been triggered, this value is now : ", state.isMobile);
	
	},

	setMobileNavOpen(state, newState) {
		state.isMobileNavOpen = newState;
	}

};
