const mqMobile = "(max-width: 412px)";
const mqDesktop = "(max-width: 1920px)";
const mqDesktopLarge = "(min-width: 1921px)";

export const state = () => ({
	mqMobile,
	mqDesktop,
	mqDesktopLarge,
	isMobile: false
});

  
export const mutations = {

	updateIsMobile(state) {

		
		state.isMobile = window.matchMedia(state.mqMobile).matches;

		console.log("mutation triggered : ", state.isMobile);
	
	}

};
