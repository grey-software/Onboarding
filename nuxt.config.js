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
