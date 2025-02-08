

export default{
    name:'order',
    title:'Order',
    type:'document',
    fields:[
        {
            name:'FirstName',
            title:'First Name',
            type:'string',

        },
        {
            name:'LastName',
            title:'Last Name',
            type:'string',

        },
        {
            name:'email',
            title:'email',
            type:'email',
        },
        {
            name:'phone',
            title:'Phone',
            type:'string',
        },
        {
            name:'address',
            title:'address',
            type:'string',
        },
        {
            name:'items',
            title:'items',
            type:'array',
            of:[{type:'reference',to:{type:'product'}}]
                
        },
        
        {
            name:'total',
            title:"Total",
            type:'number',

        },
        {
            name:"status",
            title:"Status",
            type:'string',
            options:{
                list:[
                    {title:'Pending', value:'Pending'},
                    {title:'Delivered', value:'Delivered'},
                    {title:'Cancelled', value:'Cancelled'},
                ],
                layout: "radio",
            },
            initialValue:'Pending',

        }
    ]

}