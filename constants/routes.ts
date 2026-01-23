const ROUTE = {
    HOME: '/',
    SIGN_IN: '/sign-in',
    SIGN_UP: '/sign-up',
    ASK_QUESTION: '/ask-question',
    PROFILE: (id: string) => `/profile/${id}`,
    TAGS: (id: string) => `/tags/${id}`,
} as const;

export default ROUTE;