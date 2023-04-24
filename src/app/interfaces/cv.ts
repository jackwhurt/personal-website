export interface CvSection {
    title: string;
    cvItems: CvItem[];
}

export interface CvItem {
    title?: string;
    location?: string;
    duration?: string;
    description?: string;
    bulletPoints?: string[];
    list?: string[];
    modal?: boolean;
}
