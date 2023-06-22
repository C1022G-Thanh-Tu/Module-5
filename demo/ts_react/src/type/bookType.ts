export type BookType = {
    id: number,
    name: string,
    bookDTOSet: null | []
}

export type Book = {
    id: number,
    code: string,
    name: string,
    importedDate: string,
    quantity: number,
    bookTypeDTO: BookType
}

export type DeletedBook = {
    deletedId: number | string,
    deletedName: string
}

export type BookFilter = {
    page: number | string,
    name: string,
    id: number | string 
}

export type AddedBook = {
    bookTypeDTO: {
        id: number;
    };
    code: string;
    name: string;
    importedDate: string;
    quantity: string;
}

export type UpdatedBook = {
    bookTypeDTO: {
        id: number | undefined;
    };
    id: number | undefined;
    code: string | undefined;
    name: string | undefined;
    importedDate: string | undefined;
    quantity: number | undefined;
}