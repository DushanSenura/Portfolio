import { useEffect, useRef } from 'react'
import './CursorEffect.css'

type TrailPoint = {
  x: number
  y: number
  life: number
}

function CursorEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const canUseCursor = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const canvas = canvasRef.current

    if (!canUseCursor || reduceMotion || !canvas) return

    const context = canvas.getContext('2d')
    if (!context) return

    const points: TrailPoint[] = []
    let frame = 0
    let visible = false

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = window.innerWidth * ratio
      canvas.height = window.innerHeight * ratio
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
    }

    const draw = () => {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight)

      for (const point of points) point.life -= 0.035
      while (points.length && points[0].life <= 0) points.shift()

      if (points.length > 1) {
        for (let index = 1; index < points.length; index += 1) {
          const previous = points[index - 1]
          const point = points[index]
          const progress = index / points.length
          const gradient = context.createLinearGradient(previous.x, previous.y, point.x, point.y)

          gradient.addColorStop(0, `rgba(91, 134, 255, ${previous.life * 0.48})`)
          gradient.addColorStop(1, `rgba(177, 91, 255, ${point.life * 0.72})`)

          context.beginPath()
          context.moveTo(previous.x, previous.y)
          context.lineTo(point.x, point.y)
          context.strokeStyle = gradient
          context.lineWidth = Math.max(1, progress * 15 * point.life)
          context.lineCap = 'round'
          context.lineJoin = 'round'
          context.shadowColor = `rgba(105, 128, 255, ${point.life * 0.55})`
          context.shadowBlur = 14
          context.stroke()
        }
      }

      frame = requestAnimationFrame(draw)
    }

    const handleMove = (event: PointerEvent) => {
      const lastPoint = points.at(-1)
      const distance = lastPoint
        ? Math.hypot(event.clientX - lastPoint.x, event.clientY - lastPoint.y)
        : 20

      if (distance > 2) {
        points.push({ x: event.clientX, y: event.clientY, life: 1 })
        if (points.length > 28) points.shift()
      }

      dotRef.current?.style.setProperty(
        'transform',
        `translate3d(${event.clientX}px, ${event.clientY}px, 0)`,
      )

      if (!visible) {
        visible = true
        canvas.classList.add('is-visible')
        dotRef.current?.classList.add('is-visible')
      }
    }

    const handleOver = (event: PointerEvent) => {
      const target = event.target as HTMLElement
      const interactive = Boolean(target.closest('a, button, input, textarea, select'))
      dotRef.current?.classList.toggle('is-active', interactive)
    }

    const handleLeave = () => {
      visible = false
      canvas.classList.remove('is-visible')
      dotRef.current?.classList.remove('is-visible')
      points.length = 0
    }

    const handleDown = () => {
      dotRef.current?.classList.remove('is-clicking')
      void dotRef.current?.offsetWidth
      dotRef.current?.classList.add('is-clicking')
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', handleMove, { passive: true })
    document.addEventListener('pointerover', handleOver, { passive: true })
    document.addEventListener('pointerdown', handleDown, { passive: true })
    document.documentElement.addEventListener('pointerleave', handleLeave)
    frame = requestAnimationFrame(draw)

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', handleMove)
      document.removeEventListener('pointerover', handleOver)
      document.removeEventListener('pointerdown', handleDown)
      document.documentElement.removeEventListener('pointerleave', handleLeave)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <>
      <canvas ref={canvasRef} className="cursor-fluid" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  )
}

export default CursorEffect
