export interface ICourse {
    hash: string;
    badge: boolean;
    rating: number;
    votes: number;
    poster: string;
    duration: number;
    views: number;
    description: string;
    technologies: string;
    createdBy: string;
    price: number;
    info: {
        requirements: string[];
        descriptions: string[];
        benefits: string[];
        descriptionSummary: string;
    },
    created: string;
}
