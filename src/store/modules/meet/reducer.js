import { produce } from 'immer';

const INITIAL_STATE = {
	loading: false,
	meets: [],
}

export default function meets(state=INITIAL_STATE, action) {
	switch (action.type) {
		case '@meet/INITIAL_REQUEST':
		return produce(state, draft=>{
			draft.loading = true;
		});
		case '@meet/SUCCESS_REQUEST':
			return produce(state, draft=> {
				draft.loading = false;
				draft.meets = action.payload.meets;
			});
		case '@meet/FAILURE_REQUEST':
			return  produce(state, draft=>{
				draft.loading = false;
			});
		default:
			return state;
	}
}

