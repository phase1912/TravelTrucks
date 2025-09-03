import { Camper } from '@/models/camper';

export type State = {
    items: Camper[]
    page: number
    hasMore: boolean
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
    error?: string
    selected?: Camper
    lastQueryKey?: string
    lastPage?: number
    activeRequestId?: string
    totalItems: number
}