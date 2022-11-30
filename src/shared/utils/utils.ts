
export const sortByDate= <T extends {createdAt: Date}>(arr: T[]) :T[]=> {
    return arr.sort((a, b) => (new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()))
}