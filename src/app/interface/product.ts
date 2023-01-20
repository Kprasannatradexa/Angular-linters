export interface Product {
    id: string;
    name: string;
    price: number
}

export const myProducts: Product[] = [
    {
        id: 'dtdg567',
        name: 'Mobile',
        price: 16999
    },
    {
        id: 'dtdg567',
        name: 'TV',
        price: 29999
    },
    {
        id: 'dtdg567',
        name: 'Fan',
        price: 7999
    }
]

// export const monthlySales = [
//     [
//         {
//             item: 'TV',
//             price: 1000
//         },
//         {
//             item: 'Phone',
//             price: 1000
//         }
//     ],
//     [
//         {
//             item: 'TV',
//             price: 1000
//         },
//         {
//             item: 'Phone',
//             price: 1000
//         },
//         {
//             item: 'iPhone',
//             price: 100000
//         }
//     ]


// ]



export const monthlySales = [
    {
        month: 'January',
        productDetails: [
            {
                item: 'TV',
                price: 1000
            },
            {
                item: 'Phone',
                price: 1000
            }
        ]
    },
    {
        month: 'February',
        productDetails: [
            {
                item: 'TV',
                price: 1000
            },
            {
                item: 'Phone',
                price: 1000
            },
            {
                item: 'iPhone',
                price: 100000
            }
        ]
    }
]

