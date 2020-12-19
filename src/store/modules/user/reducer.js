import { produce } from 'immer';
const  INITIAL_STATE={
	success: false,
	failure: false,
};


export default function user(state=INITIAL_STATE, action){
	switch (action.type) {
		case '@user/SUCCESS_REQUEST':
			return produce(state, draft=>{
				draft.success = true;
				draft.failure = false;
			});
		case '@user/FAILURE_REQUEST':
			return produce(state, draft=> {
				draft.success = false;
				draft.failure = true;
			})
		default:
		return state;
	}
}