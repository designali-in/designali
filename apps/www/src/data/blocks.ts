import fs from 'fs'
import path from 'path'

export interface Block {
    slug: string
    title: string
    category: string
    preview: string
    code: string
}

function loadCode(filePath: string): string {
    const fullPath = path.join(process.cwd(), filePath)
    return fs.readFileSync(fullPath, 'utf-8')
}

export const blocks: Block[] = [
    {
        slug: 'hero-section',
        title: 'one',
        category: 'hero-section',
        preview: 'src/app/preview/hero-section/one',
        code: loadCode('src/app/preview/hero-section/one/page.tsx'),
    },
    {
        slug: 'hero-section',
        title: 'two',
        category: 'hero-section',
        preview: 'src/app/preview/hero-section/two',
        code: loadCode('src/app/preview/hero-section/two/page.tsx'),
    },
    {
        slug: 'hero-section',
        title: 'three',
        category: 'hero-section',
        preview: 'src/app/preview/hero-section/three',
        code: loadCode('src/app/preview/hero-section/three/page.tsx'),
    },
    {
        slug: 'hero-section',
        title: 'four',
        category: 'hero-section',
        preview: 'src/app/preview/hero-section/four',
        code: loadCode('src/app/preview/hero-section/four/page.tsx'),
    },
    {
        slug: 'logo-cloud',
        title: 'one',
        category: 'logo-cloud',
        preview: 'src/app/preview/logo-cloud/one',
        code: loadCode('src/app/preview/logo-cloud/one/page.tsx'),
    },
    {
        slug: 'features',
        title: 'one',
        category: 'features',
        preview: 'src/app/preview/features/one',
        code: loadCode('src/app/preview/features/one/page.tsx'),
    },
    {
        slug: 'features',
        title: 'two',
        category: 'features',
        preview: 'src/app/preview/features/two',
        code: loadCode('src/app/preview/features/two/page.tsx'),
    },
    {
        slug: 'features',
        title: 'three',
        category: 'features',
        preview: 'src/app/preview/features/three',
        code: loadCode('src/app/preview/features/three/page.tsx'),
    },
    {
        slug: 'features',
        title: 'four',
        category: 'features',
        preview: 'src/app/preview/features/four',
        code: loadCode('src/src/app/preview/features/four/page.tsx'),
    },
    {
        slug: 'features',
        title: 'five',
        category: 'features',
        preview: 'src/app/preview/features/five',
        code: loadCode('src/app/preview/features/five/page.tsx'),
    },
    {
        slug: 'features',
        title: 'six',
        category: 'features',
        preview: 'src/app/preview/features/six',
        code: loadCode('src/app/preview/features/six/page.tsx'),
    },
    {
        slug: 'features',
        title: 'seven',
        category: 'features',
        preview: 'src/app/preview/features/seven',
        code: loadCode('src/app/preview/features/seven/page.tsx'),
    },
    {
        slug: 'features',
        title: 'eight',
        category: 'features',
        preview: 'src/app/preview/features/eight',
        code: loadCode('src/app/preview/features/eight/page.tsx'),
    },
    {
        slug: 'features',
        title: 'nine',
        category: 'features',
        preview: 'src/app/preview/features/nine',
        code: loadCode('src/app/preview/features/nine/page.tsx'),
    },

    {
        slug: 'content',
        title: 'one',
        category: 'content',
        preview: 'src/app/preview/content/one',
        code: loadCode('src/app/preview/content/one/page.tsx'),
    },
    {
        slug: 'content',
        title: 'seven',
        category: 'content',
        preview: 'src/app/preview/content/seven',
        code: loadCode('src/app/preview/content/seven/page.tsx'),
    },
    {
        slug: 'content',
        title: 'two',
        category: 'content',
        preview: 'src/app/preview/content/two',
        code: loadCode('src/app/preview/content/two/page.tsx'),
    },
    {
        slug: 'content',
        title: 'three',
        category: 'content',
        preview: 'src/app/preview/content/three',
        code: loadCode('src/app/preview/content/three/page.tsx'),
    },
    {
        slug: 'content',
        title: 'four',
        category: 'content',
        preview: 'src/app/preview/content/four',
        code: loadCode('src/app/preview/content/four/page.tsx'),
    },
    {
        slug: 'content',
        title: 'five',
        category: 'content',
        preview: 'src/app/preview/content/five',
        code: loadCode('src/app/preview/content/five/page.tsx'),
    },
    {
        slug: 'content',
        title: 'six',
        category: 'content',
        preview: 'src/app/preview/content/six',
        code: loadCode('src/app/preview/content/six/page.tsx'),
    },
    {
        slug: 'stats',
        title: 'one',
        category: 'stats',
        preview: 'src/app/preview/stats/one',
        code: loadCode('src/app/preview/stats/one/page.tsx'),
    },
    {
        slug: 'stats',
        title: 'two',
        category: 'stats',
        preview: 'src/app/preview/stats/two',
        code: loadCode('src/app/preview/stats/two/page.tsx'),
    },
    {
        slug: 'stats',
        title: 'three',
        category: 'stats',
        preview: 'src/app/preview/stats/three',
        code: loadCode('src/app/preview/stats/three/page.tsx'),
    },
    {
        slug: 'stats',
        title: 'four',
        category: 'stats',
        preview: 'src/app/preview/stats/four',
        code: loadCode('src/app/preview/stats/four/page.tsx'),
    },
    {
        slug: 'team',
        title: 'one',
        category: 'team',
        preview: 'src/app/preview/team/one',
        code: loadCode('src/app/preview/team/one/page.tsx'),
    },
    {
        slug: 'team',
        title: 'two',
        category: 'team',
        preview: 'src/app/preview/team/two',
        code: loadCode('src/app/preview/team/two/page.tsx'),
    },

    {
        slug: 'testimonials',
        title: 'one',
        category: 'testimonials',
        preview: 'src/app/preview/testimonials/one',
        code: loadCode('src/app/preview/testimonials/one/page.tsx'),
    },
    {
        slug: 'testimonials',
        title: 'two',
        category: 'testimonials',
        preview: 'src/app/preview/testimonials/two',
        code: loadCode('src/app/preview/testimonials/two/page.tsx'),
    },
    {
        slug: 'testimonials',
        title: 'three',
        category: 'testimonials',
        preview: 'src/app/preview/testimonials/three',
        code: loadCode('src/app/preview/testimonials/three/page.tsx'),
    },
    {
        slug: 'testimonials',
        title: 'four',
        category: 'testimonials',
        preview: 'src/app/preview/testimonials/four',
        code: loadCode('src/app/preview/testimonials/four/page.tsx'),
    },
    {
        slug: 'testimonials',
        title: 'five',
        category: 'testimonials',
        preview: 'src/app/preview/testimonials/five',
        code: loadCode('src/app/preview/testimonials/five/page.tsx'),
    },
    {
        slug: 'testimonials',
        title: 'six',
        category: 'testimonials',
        preview: 'src/app/preview/testimonials/six',
        code: loadCode('src/app/preview/testimonials/six/page.tsx'),
    },


    {
        slug: 'call-to-action',
        title: 'one',
        category: 'call-to-action',
        preview: 'src/app/preview/call-to-action/one',
        code: loadCode('src/app/preview/call-to-action/one/page.tsx'),
    },
    {
        slug: 'call-to-action',
        title: 'two',
        category: 'call-to-action',
        preview: 'src/app/preview/call-to-action/two',
        code: loadCode('src/app/preview/call-to-action/two/page.tsx'),
    },
    {
        slug: 'call-to-action',
        title: 'three',
        category: 'call-to-action',
        preview: 'src/app/preview/call-to-action/three',
        code: loadCode('src/app/preview/call-to-action/three/page.tsx'),
    },

    {
        slug: 'footer',
        title: 'one',
        category: 'footer',
        preview: 'src/app/preview/footer/one',
        code: loadCode('src/app/preview/footer/one/page.tsx'),
    },
    {
        slug: 'footer',
        title: 'two',
        category: 'footer',
        preview: 'src/app/preview/footer/two',
        code: loadCode('src/app/preview/footer/two/page.tsx'),
    },
    {
        slug: 'footer',
        title: 'three',
        category: 'footer',
        preview: 'src/app/preview/footer/three',
        code: loadCode('src/app/preview/footer/three/page.tsx'),
    },
    {
        slug: 'footer',
        title: 'four',
        category: 'footer',
        preview: 'src/app/preview/footer/four',
        code: loadCode('src/app/preview/footer/four/page.tsx'),
    },
    {
        slug: 'footer',
        title: 'five',
        category: 'footer',
        preview: 'src/app/preview/footer/five',
        code: loadCode('src/app/preview/footer/five/page.tsx'),
    },

    {
        slug: 'pricing',
        title: 'one',
        category: 'pricing',
        preview: 'src/app/preview/pricing/one',
        code: loadCode('src/app/preview/pricing/one/page.tsx'),
    },
    {
        slug: 'pricing',
        title: 'two',
        category: 'pricing',
        preview: 'src/app/preview/pricing/two',
        code: loadCode('src/app/preview/pricing/two/page.tsx'),
    },
    {
        slug: 'pricing',
        title: 'three',
        category: 'pricing',
        preview: 'src/app/preview/pricing/three',
        code: loadCode('src/app/preview/pricing/three/page.tsx'),
    },
    {
        slug: 'pricing',
        title: 'four',
        category: 'pricing',
        preview: 'src/app/preview/pricing/four',
        code: loadCode('src/app/preview/pricing/four/page.tsx'),
    },
    {
        slug: 'pricing',
        title: 'five',
        category: 'pricing',
        preview: 'src/app/preview/pricing/five',
        code: loadCode('src/app/preview/pricing/five/page.tsx'),
    },

    {
        slug: 'comparator',
        title: 'one',
        category: 'comparator',
        preview: 'src/app/preview/comparator/one',
        code: loadCode('src/app/preview/comparator/one/page.tsx'),
    },

    {
        slug: 'faqs',
        title: 'one',
        category: 'faqs',
        preview: 'src/app/preview/faqs/one',
        code: loadCode('src/app/preview/faqs/one/page.tsx'),
    },

    {
        slug: 'login',
        title: 'one',
        category: 'login',
        preview: 'src/app/preview/login/one',
        code: loadCode('src/app/preview/login/one/page.tsx'),
    },
    {
        slug: 'login',
        title: 'two',
        category: 'login',
        preview: 'src/app/preview/login/two',
        code: loadCode('src/app/preview/login/two/page.tsx'),
    },
    {
        slug: 'login',
        title: 'three',
        category: 'login',
        preview: 'src/app/preview/login/three',
        code: loadCode('src/app/preview/login/three/page.tsx'),
    },

    {
        slug: 'sign-up',
        title: 'one',
        category: 'sign-up',
        preview: 'src/app/preview/sign-up/one',
        code: loadCode('src/app/preview/sign-up/one/page.tsx'),
    },
    {
        slug: 'sign-up',
        title: 'two',
        category: 'sign-up',
        preview: 'src/app/preview/sign-up/two',
        code: loadCode('src/app/preview/sign-up/two/page.tsx'),
    },
    {
        slug: 'sign-up',
        title: 'three',
        category: 'sign-up',
        preview: 'src/app/preview/sign-up/three',
        code: loadCode('src/app/preview/sign-up/three/page.tsx'),
    },
    {
        slug: 'contact',
        title: 'one',
        category: 'contact',
        preview: 'src/app/preview/contact/one',
        code: loadCode('src/app/preview/contact/one/page.tsx'),
    },
    {
        slug: 'contact',
        title: 'two',
        category: 'contact',
        preview: 'src/app/preview/contact/two',
        code: loadCode('src/app/preview/contact/two/page.tsx'),
    }
]

export const categories = [...new Set(blocks.map((b) => b.category))]