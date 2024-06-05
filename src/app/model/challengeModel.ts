
interface Segment{
    id: number;
    name: string;
}

export interface Challenge{
    id: number;
    name: string;
    segments: Segment[];
}