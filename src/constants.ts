export const CATEGORIES = {
    ALL: 'all',
    MARKETING: 'marketing',
    WEB: 'web'
} as const

export const CATEGORY_TABS = [
    {
        id: CATEGORIES.ALL,
        label: 'All'
    },
    {
        id: CATEGORIES.MARKETING,
        label: 'Marketing'
    },
    {
        id: CATEGORIES.WEB,
        label: 'Web development'
    }
]

export const projectList = [
    {
        id: 1,
        category: CATEGORIES.WEB,
        title: 'Youtube Saver',
        link: 'https://adrianjv27.github.io/00-youtube-galery/',
        description: 'A web site that allows you to save your videos to watch them later, with future implementations as download, and share list'
    },
    {
        id: 2,
        category: CATEGORIES.MARKETING,
        title: 'Marketing Report',
        link: 'https://ilsceducationgroup-my.sharepoint.com/:p:/g/personal/bv030686_ilsceducation_com/IQAHRcL1iehqRYkQ5mOn0oGuATzQVg2A2p51Ymqvjh4lgmE?e=45dP1T',
        description: 'An activity from Greystone that makes me work as a marketing manager with an 6 month review'

    }
]