// a sanity schema needs a name
export default{
    name:'product',
    title:'Product',
    type:'document',
    fields: [
        {
            name:'image',
            title:'Image',
            type:'array',
            of:[{type:'image'}],
            options:{
                hotsport:true , // allows what portions of image is to be cropped or not
            }
        },
        {
            name:'name',
            title:'Name',
            type:'string'
        },
        {
            name:'slug', // url
            title:'Slug',
            type:'slug',
            options:{
                source:'name',
                maxLength:90,
            }
        },
        {
            name:'size',
            title:'Size',
            type:'string',
        },
        {
            name:'price',
            title:'Price',
            type:'number',
        },
        {
            name:'details',
            title:'Details',
            type:'string'
        }
    ]
}