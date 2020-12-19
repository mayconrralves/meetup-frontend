export function requestMeetups(){
	return {
		type: '@meet/INITIAL_REQUEST',
	}
}

export function successRequest(meets){
	return {
		type: '@meet/SUCCESS_REQUEST',
		payload: { meets }
	}
}

export function failureRequest(){
	return {
		type: '@meet/FAILURE_REQUEST'
	}
}

export function updateMeetRequest(id, meet, image){
	return {
		type: '@meet/REQUEST_UPDATE',
		payload: { id, meet, image}
	}
}
export function saveMeetRequest(meet, image){
	return {
		type: '@meet/REQUEST_CREATE',
		payload: { 
			meet,
			image
		}
	}
}
