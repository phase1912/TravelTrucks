
export type CampersQuery = {
    page?: number
    limit?: number
    location?: string
    form?: string
    transmission?: string
    // feature flags:
    AC?: boolean
    kitchen?: boolean
    bathroom?: boolean
    TV?: boolean
    radio?: boolean
    refrigerator?: boolean
    microwave?: boolean
    gas?: boolean
    water?: boolean
}