export interface NavListDataType {
    id: number;
    label: string;
    href: string;
};

export const NavListData:Array<NavListDataType> = [
    {id: 1,
    label: "Hi",
    href: "/"},
    {id: 2,
    label: "Works",
    href: "/work"},
    {id: 3,
    label: "Technology",
    href: "/technology"},
    {id: 4,
    label: "Get in touch",
    href: "/getintouch"}
    ]