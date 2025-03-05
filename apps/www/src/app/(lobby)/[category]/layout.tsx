import CategoryNavigation from '@/components/mdx/blocks/blocks-nav' 
import { categories } from '@/data/blocks'

export default function CategoryLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <>
            <CategoryNavigation categories={categories} />
            <main>{children}</main>
 
        </>
    )
}
