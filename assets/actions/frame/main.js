export const INITIAL_CONTENT_HEIGHT = "INITIAL_CONTENT_HEIGHT"

export function initContentHeight( height ){
	return {
		type : INITIAL_CONTENT_HEIGHT,
		height
	}
}