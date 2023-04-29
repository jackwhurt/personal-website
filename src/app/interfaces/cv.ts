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

export interface DropdownContent {
    body: string;
}

export interface Point {
    title: string;
    modal?: ModalContent;
    dropdown?: DropdownContent;
}

export interface CvItem {
    title?: string;
    location?: string;
    locationLink?: string;
    duration?: string;
    description?: string;
    bulletPoints?: Point[];
    list?: string[];
}
