const ADD_TO_CART = "market/ADD_TO_CART";
const REMOVE_FROM_CART = "market/REMOVE_FROM_CART";

const initialState = {
    cartItemsNumber: 0,
    products: [
        {
            id: 1,
            name: "American Crew",
            weight: 85,
            img: "http://image-cdn.symphonycommerce.com/images/sites/americancrew/1555963229888_5002820550649767562.850w.jpg",
            title: "Глина Для Волос American Crew Molding Clay 85Гр Сильной Фиксации",
            description: "Моделирующая глина для волос American Crew Molding Clay в удобной компактной упаковке" +
                " идеально подходит для тех, кто заботится о здоровье и красоте своих волос." +
                " Благодаря натуральным экстрактам, моделирующая глина не только помогает создать" +
                " необходимую прическу — она ​​обладает антисептическими и кондиционирующими свойствами." +
                " Особенно эта глина подходит спортсменам и людям с повышенным потоотделением." +
                " Она освежает, не оставляет неприятного блеска и ощущения липкости.",
            price: 388,
            addedToCart: false
        },
        {
            id: 2,
            name: "Uppercut",
            weight: 60,
            img: "https://pomadeshop.com/media/image/07/eb/8a/Uppercut_Matte_Clay_PomadeShop_450x450.png",
            title: "Матовая моделирующая глина для волос Uppercut Deluxe Matt Clay 60 г",
            description: "Это продукт, который станет любимчиком с первого применения! Матовая моделирующая" +
                " глина для укладки волос Uppercut Deluxe без особых усилий формирует любой стиль, захватывая" +
                " одинаково хорошо как слишком короткие, так и достаточно длинные волосы." +
                " Глина для укладки волос Uppercut Deluxe — отправит в «нок-аут» каждого, кто однажды попробует" +
                " ею пользоваться! Мягкая текстура, с приятным ароматом, а главное — без особых усилий вкладывает" +
                " волосы любой длины. Рекомендовано для стилизации коротких текстурированных причесок или для укладки" +
                " длинных волос, так как здесь нужен особый контроль и точность." +
                " Глина создана на основе нефтепродуктов, придает волосам матового эффекта.",
            price: 520,
            addedToCart: false
        },
        {
            id: 3,
            name: "The Bluebeards Revenge",
            weight: 100,
            img: "https://zarva.com.ua/image/cache/catalog/BBR/Hair/glina-dlya-ukladki-volos-the-bluebeards-revenge-matt-clay-zarva-01-1000x1000.png",
            title: "Укладочная Глина The Bluebeards Revenge Matt Clay 100 Мл",
            description: "Матовая глина для укладки волос. Легкая но эффективная защита. Подходит для текстурирования" +
                " волос, геометрических укладок. Забудьте о непослушности волос! С этой глиной для укладки, Ваши" +
                " волосы обретут форму мечты. Глина удобна для придания особой текстуры, создания геометрических" +
                " укладок и простой фиксации прически. Благодаря своей матовой, легкой консистенции, она не" +
                " придает волосам слишком навязчивого глянца и не утяжеляет их. Выбор брутальных мужчин!" +
                " Фиксация держится на протяжении всего дня.",
            price: 328,
            addedToCart: false
        }
    ]
};

const marketReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            return {
                ...state,
                products: state.products.map(p => {
                    if (p.id === action.id) {
                        return {
                            ...p,
                            addedToCart: true
                        };
                    }
                    return p;
                }),
                cartItemsNumber: state.cartItemsNumber + 1
            }
        }
        case REMOVE_FROM_CART: {
            return {
                ...state,
                products: state.products.map(p => {
                    if (p.id === action.id) {
                        return {
                            ...p,
                            addedToCart: false
                        };
                    }
                    return p;
                }),
                cartItemsNumber: state.cartItemsNumber - 1
            }
        }
        default:
            return state;
    }
};

export const addToCartAC = (id) => ({
    type: ADD_TO_CART,
    id
});

export const removeFromCartAC = (id) => ({
    type: REMOVE_FROM_CART,
    id
});

export default marketReducer;