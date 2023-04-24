export interface CvSection {
    title: string;
    cvItems: CvItem[];
}

export interface ModalContent {
    title?: string;
    body?: string;
    link?: string;
    picture?: string;
}

export interface Point {
    title: string;
    modal?: ModalContent;
}

export interface CvItem {
    title?: string;
    location?: string;
    duration?: string;
    description?: string;
    bulletPoints?: Point[];
    list?: string[];
}
