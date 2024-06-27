// ScrollTrigger
const panels = gsap.utils.toArray('.parallax-item')

panels.forEach((panel, i) => {
    if (i !== panels.length - 1) {
        // 마지막 섹션이 아닌 경우에만 고정
        ScrollTrigger.create({
            trigger: panel,
            start: 'top top',
            pin: true,
            pinSpacing: false,
        })
    }
})

// text animation
gsap.utils.toArray('.parallax-item-tit').forEach((item) => {
    ScrollTrigger.create({
        trigger: item,
        start: 'top 80%',
        end: 'bottom 20%',
        onEnter: () => {
            animate(item)
        },
    })

    item.style.opacity = '0'
})

const animate = (item) => {
    gsap.fromTo(
        item,
        { autoAlpha: 0, x: 0, y: 100 },
        { autoAlpha: 1, x: 0, y: 0, duration: 1.25, overwrite: 'auto', ease: 'expo' },
    )
}

// lenis
const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
