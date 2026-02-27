import { useEffect } from 'react'

const Cursor = () => {
  useEffect(() => {
    const ring = document.getElementById('cursor-ring')
    const dot = document.getElementById('cursor-dot')
    const lag = document.getElementById('cursor-lag')

    if (!ring || !dot || !lag) return

    let mouseX = 0, mouseY = 0
    let lagX = 0, lagY = 0
    let ringX = 0, ringY = 0
    let visible = false

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY

      if (!visible) {
        ring.style.opacity = '1'
        dot.style.opacity = '1'
        lag.style.opacity = '1'
        visible = true
      }

      dot.style.left = mouseX + 'px'
      dot.style.top = mouseY + 'px'
    }

    const handleMouseLeave = () => {
      ring.style.opacity = '0'
      dot.style.opacity = '0'
      lag.style.opacity = '0'
      visible = false
    }

    const handleMouseEnter = () => {
      if (visible) {
        ring.style.opacity = '1'
        dot.style.opacity = '1'
        lag.style.opacity = '1'
      }
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.18
      ringY += (mouseY - ringY) * 0.18
      ring.style.left = ringX + 'px'
      ring.style.top = ringY + 'px'

      lagX += (mouseX - lagX) * 0.08
      lagY += (mouseY - lagY) * 0.08
      lag.style.left = lagX + 'px'
      lag.style.top = lagY + 'px'

      requestAnimationFrame(animate)
    }

    const handleMouseDown = () => document.body.classList.add('cursor-click')
    const handleMouseUp = () => document.body.classList.remove('cursor-click')

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)

    animate()

    const hoverTargets = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select, label, [data-cursor-hover]'
    )

    const handleHoverEnter = () => document.body.classList.add('cursor-hover')
    const handleHoverLeave = () => document.body.classList.remove('cursor-hover')

    hoverTargets.forEach((el) => {
      el.addEventListener('mouseenter', handleHoverEnter)
      el.addEventListener('mouseleave', handleHoverLeave)
    })

    const observer = new MutationObserver(() => {
      const newTargets = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, label, [data-cursor-hover]'
      )
      newTargets.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverEnter)
        el.removeEventListener('mouseleave', handleHoverLeave)
        el.addEventListener('mouseenter', handleHoverEnter)
        el.addEventListener('mouseleave', handleHoverLeave)
      })
    })

    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)

      hoverTargets.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverEnter)
        el.removeEventListener('mouseleave', handleHoverLeave)
      })

      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div id="cursor-ring"></div>
      <div id="cursor-dot"></div>
      <div id="cursor-lag"></div>
    </>
  )
}

export default Cursor
