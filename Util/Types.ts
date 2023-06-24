export type PlaceList = {
    slug: string,
    faq: any,
    breadcrumbs: any,
    description: any,
    seo_details: any,
    items: string[],
    item_element_list: any,
    page: number,
    page_count: number,
    title: string,
    tags: any,
    filters: any
}

export type Field={
    type: string,
    value: string,
    icon: string,
    text?: string
}

export type PlaceInfo = {
    id: number,
    token: string,
    name: string,
    seo_details: any,
    category: string,
    rating: number | null,
    geometry: {
        type: string,
        coordinates: number[]
    },
    fields: Field[],
    description: any,
    phone_link: string,
    reviews: any,
    top_extra_fields: any,
    middle_extra_fields: any,
    bottom_extra_fields: any,
    traits: any,
    images: any,
    currency: any,
    main_traits: any,
    menu: any,
    price_range: any
}

export type Contact={
    token:string,
    name:string,
    phone:string[]
}