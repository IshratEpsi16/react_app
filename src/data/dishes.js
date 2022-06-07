const DISHES = [
    {
        id: 0,
        name: 'Ginger Burger',
        image: 'assets/images/0burger.jpg',
        category: 'meal',
        label: 'Hot',
        price: '199',
        description: 'A unique combination with sizzling petty',
        comments: [
            {
                id: 0,
                ratings: 5,
                comment: "Juicy",
                author: 'Sadab',
                date: '2022-06-06'
            },
            {
                id: 1,
                ratings: 4.5,
                comment: "Best",
                author: 'Samin',
                date: '2022-06-06'
            },
        ]
    },
    {
        id: 1,
        name: 'Pizza',
        image: 'assets/images/1pizza.jpeg',
        category: 'meal',
        label: 'Hot',
        price: '999',
        description: 'A unique combination with sizzling toppings',
        comments: [
            {
                id: 0,
                ratings: 5,
                comment: "Spicy",
                author: 'Esha',
                date: '2022-06-06'
            },
            {
                id: 1,
                ratings: 4.5,
                comment: "Best",
                author: 'Riya',
                date: '2022-06-06'
            },
        ]
    }

]
export default DISHES;