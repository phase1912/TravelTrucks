export type Filters = {
    location: string
    form: string
    transmission: string
    features: {
        AC: boolean
        automatic: boolean
        kitchen: boolean
        TV: boolean
        //radio: boolean
        //refrigerator: boolean
        //microwave: boolean
        //gas: boolean
        //water: boolean
        bathroom: boolean
    }
}