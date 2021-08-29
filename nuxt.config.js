import theme from 'grey-docs'

export default theme({
    components: true,
    content: {
        liveEdit: false
    },
    docs: {
        primaryColor: '#64748b'
    },
    head: {
        title: 'Onboarding by Grey Software | Democratizing Software Education!',
        meta: [
            {
                name: 'og:title',
                content: 'Onboarding by Grey Software | Democratizing Software Education!'
            },
            {
                name: 'og:description',
                content: 'A practical intro to open source software development for new team members or curious explorers!'
            },
            {
                name: 'og:image',
                content: '/preview.png'
            },
            {
                name: 'twitter:card',
                content: 'summary_large_image'
            },
            {
                name: 'twitter:title',
                content: 'Onboarding by Grey Software | Democratizing Software Education!'
            },
            {
                name: 'twitter:description',
                content: 'A practical intro to open source software development for new team members or curious explorers!'
            },
            {
                name: 'twitter:image',
                content: '/preview.png'
            },
        ],
        script: [
            {
                src: 'https://plausible.io/js/plausible.js',
                async: true,
                defer: true,
                'data-domain': 'onboarding.grey.software',
            },
        ]
    }
})
