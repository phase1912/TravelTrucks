export type Camper = {
    id: string
    name: string
    price: number
    location: string
    description?: string
    rating?: number
    reviews?: { reviewer_name: string; reviewer_email?: string; comment: string; rating: number; date?: string }[]
    gallery?: { thumb: string, original: string }[]
    // specs
    form?: string
    length?: string
    width?: string
    height?: string
    tank?: string
    consumption?: string
    transmission?: string
    engine?: string
    AC?: boolean
    bathroom?: boolean
    kitchen?: boolean
    TV?: boolean
    radio?: boolean
    refrigerator?: boolean
    microwave?: boolean
    gas?: boolean
    water?: boolean
}