const initialState = [
    {
        id: 'd926rplp', 
        title: 'FIRST_LIST',
        items: [
            {
                id: 0, 
                name: 'teapot',
                image: 'https://cdn-images.farfetch-contents.com/14/71/87/71/14718771_23513510_1000.jpg',
                link: 'https://www.farfetch.com/ge/shopping/men/gucci-herbarium-teapot-item-14718771.aspx?size=17&storeid=12614&utm_source=google&utm_medium=cpc&utm_campaign=9569574123&utm_keywordid=&utm_term=&utm_content=99960050778&pid=google&af_channel=search&c=9569574123&af_c_id=9569574123&af_siteid=&af_keywords=pla-884903397969&af_adset_id=99960050778&af_ad_id=423627559331&af_sub1=&af_click_lookback=7d&is_retargeting=true&gclid=CjwKCAjw7cGUBhA9EiwArBAvouadFqAGlJUKLi8ge_B-orUfHnL7rw6lBDhzsU63wPWSrHELtS9P3hoC2iQQAvD_BwE',
                price: 588, 
                description: 'Having friends over for tea is now even better. With a hand-painted floral print, this teapot from Gucci will let everyone know you mean business when it comes to your tableware. Such cuteness. Featuring a polished finish and a hand-painted floral design.'
            },{
                id: 1, 
                name: 'also teapot',
                image: 'https://cdn-images.farfetch-contents.com/14/71/87/71/14718771_23513510_1000.jpg',
                link: 'https://www.farfetch.com/ge/shopping/men/gucci-herbarium-teapot-item-14718771.aspx?size=17&storeid=12614&utm_source=google&utm_medium=cpc&utm_campaign=9569574123&utm_keywordid=&utm_term=&utm_content=99960050778&pid=google&af_channel=search&c=9569574123&af_c_id=9569574123&af_siteid=&af_keywords=pla-884903397969&af_adset_id=99960050778&af_ad_id=423627559331&af_sub1=&af_click_lookback=7d&is_retargeting=true&gclid=CjwKCAjw7cGUBhA9EiwArBAvouadFqAGlJUKLi8ge_B-orUfHnL7rw6lBDhzsU63wPWSrHELtS9P3hoC2iQQAvD_BwE',
                price: 588, 
                description: 'Having friends over for tea is now even better. With a hand-painted floral print, this teapot from Gucci will let everyone know you mean business when it comes to your tableware. Such cuteness. Featuring a polished finish and a hand-painted floral design.Having friends over for tea is now even better. With a hand-painted floral print, this teapot from Gucci will let everyone know you mean business when it comes to your tableware. Such cuteness. Featuring a polished finish and a hand-painted floral design.'
            }
        ]
    },{
        id: 'itw2x3r4', 
        title: 'SECOND_LIST',
        items: [
            {
                id: 0, 
                name: 'teapot',
                image: 'https://cdn-images.farfetch-contents.com/14/71/87/71/14718771_23513510_1000.jpg',
                link: 'https://www.farfetch.com/ge/shopping/men/gucci-herbarium-teapot-item-14718771.aspx?size=17&storeid=12614&utm_source=google&utm_medium=cpc&utm_campaign=9569574123&utm_keywordid=&utm_term=&utm_content=99960050778&pid=google&af_channel=search&c=9569574123&af_c_id=9569574123&af_siteid=&af_keywords=pla-884903397969&af_adset_id=99960050778&af_ad_id=423627559331&af_sub1=&af_click_lookback=7d&is_retargeting=true&gclid=CjwKCAjw7cGUBhA9EiwArBAvouadFqAGlJUKLi8ge_B-orUfHnL7rw6lBDhzsU63wPWSrHELtS9P3hoC2iQQAvD_BwE',
                price: 588, 
                description: 'Having friends over for tea is now even better. With a hand-painted floral print, this teapot from Gucci will let everyone know you mean business when it comes to your tableware. Such cuteness. Featuring a polished finish and a hand-painted floral design.'
            }
        ]
    }
];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_LIST':
            return [...state, action.payload]
        case 'EDIT_LIST':
            return [ 
                ...state.slice(0, state.findIndex(obj => obj.id === action.payload.id)),
                action.payload, 
                ...state.slice(state.findIndex(obj => obj.id === action.payload.id) + 1)
            ]
        case 'REMOVE_LIST':
            return [ 
                ...state.slice(0, state.findIndex(obj => obj.id === action.payload)), 
                ...state.slice(state.findIndex(obj => obj.id === action.payload) + 1)
            ]
        default:
            return state
    }
};

export default reducer;