export interface BlogPost{
    id?: number
    title: string
    url?: string
    discussionUrl?: string
    html?: string
    bodyText: string
    createdAt: string
    lastEditedAt: string | null
    author:{
        name: string
        avatar: string
        url: string
    } 
    tags: string[]
}

export interface BlogDetail{
    title: string
    bodyHTML: string
    createdAt: string
    author:{
        name: string
        avatar: string
        url: string
    } 
}