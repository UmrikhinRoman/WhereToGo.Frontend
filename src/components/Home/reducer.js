const initialState = {
    profile: {}
};

export default function user(state = initialState, action) {
            return {
                ...state,
                profile: action.profile
            };
}