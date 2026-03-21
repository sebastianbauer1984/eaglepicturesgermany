import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

function EagleSVG() {
  // Wing flap: gentle up-down rotation from body attachment
  const wingTransition = {
    duration: 1.4,
    repeat: Infinity,
    ease: [0.45, 0, 0.55, 1] as [number, number, number, number],
  }

  return (
    <svg
      viewBox="0 0 560 180"
      width="500"
      height="161"
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: 'drop-shadow(0 6px 28px rgba(0,0,0,0.45)) drop-shadow(0 2px 8px rgba(255,184,0,0.15))' }}
    >
      {/* ── LEFT WING (eagle's right, screen-left) ── */}
      <motion.g
        style={{ transformOrigin: '248px 96px' }}
        animate={{ rotate: [-8, 10, -8] }}
        transition={wingTransition}
      >
        {/* Upper wing surface */}
        <path
          d="M248,90 C215,74 155,54 90,44 C55,38 22,42 4,54
             C28,58 62,58 98,64 C150,72 205,88 244,104 Z"
          fill="rgba(245,242,238,0.96)"
        />
        {/* Lower wing / secondary feathers */}
        <path
          d="M244,104 C205,88 150,72 98,64 C62,58 28,58 4,54
             C24,72 58,76 96,80 C148,86 202,98 242,110 Z"
          fill="rgba(195,188,175,0.72)"
        />
        {/* Wing feather quill lines */}
        <path d="M200,82 C175,74 145,66 112,62" stroke="rgba(160,152,138,0.45)" strokeWidth="0.8" fill="none"/>
        <path d="M220,90 C192,82 160,74 124,69" stroke="rgba(160,152,138,0.35)" strokeWidth="0.8" fill="none"/>
        {/* Primary feather tips — 6 fingers */}
        <path d="M4,54 L-14,44 L2,60 Z"  fill="rgba(240,237,230,0.9)"/>
        <path d="M14,50 L-2,38  L12,56 Z" fill="rgba(238,234,226,0.85)"/>
        <path d="M26,46 L12,34  L24,52 Z" fill="rgba(235,230,222,0.80)"/>
        <path d="M40,43 L28,30  L38,49 Z" fill="rgba(232,227,218,0.75)"/>
        <path d="M56,41 L46,28  L54,47 Z" fill="rgba(228,223,214,0.70)"/>
        <path d="M74,40 L66,27  L72,46 Z" fill="rgba(225,220,210,0.65)"/>
      </motion.g>

      {/* ── RIGHT WING (eagle's left, screen-right) ── */}
      <motion.g
        style={{ transformOrigin: '312px 96px' }}
        animate={{ rotate: [8, -10, 8] }}
        transition={wingTransition}
      >
        {/* Upper wing surface */}
        <path
          d="M312,90 C345,74 405,54 470,44 C505,38 538,42 556,54
             C532,58 498,58 462,64 C410,72 355,88 316,104 Z"
          fill="rgba(245,242,238,0.96)"
        />
        {/* Lower wing / secondary feathers */}
        <path
          d="M316,104 C355,88 410,72 462,64 C498,58 532,58 556,54
             C536,72 502,76 464,80 C412,86 358,98 318,110 Z"
          fill="rgba(195,188,175,0.72)"
        />
        {/* Wing feather quill lines */}
        <path d="M360,82 C385,74 415,66 448,62" stroke="rgba(160,152,138,0.45)" strokeWidth="0.8" fill="none"/>
        <path d="M340,90 C368,82 400,74 436,69" stroke="rgba(160,152,138,0.35)" strokeWidth="0.8" fill="none"/>
        {/* Primary feather tips — 6 fingers */}
        <path d="M556,54 L574,44 L558,60 Z"  fill="rgba(240,237,230,0.9)"/>
        <path d="M546,50 L562,38 L548,56 Z"  fill="rgba(238,234,226,0.85)"/>
        <path d="M534,46 L548,34 L536,52 Z"  fill="rgba(235,230,222,0.80)"/>
        <path d="M520,43 L532,30 L522,49 Z"  fill="rgba(232,227,218,0.75)"/>
        <path d="M504,41 L514,28 L506,47 Z"  fill="rgba(228,223,214,0.70)"/>
        <path d="M486,40 L494,27 L488,46 Z"  fill="rgba(225,220,210,0.65)"/>
      </motion.g>

      {/* ── BODY ── */}
      <ellipse cx="280" cy="96" rx="54" ry="16" fill="rgba(248,245,240,0.97)"/>
      {/* belly shading */}
      <ellipse cx="278" cy="100" rx="40" ry="10" fill="rgba(180,172,158,0.28)"/>

      {/* ── HEAD ── */}
      <ellipse cx="322" cy="74" rx="22" ry="19" fill="rgba(248,245,240,0.97)"/>
      {/* white head / bald eagle style bright top */}
      <ellipse cx="324" cy="68" rx="16" ry="10" fill="rgba(255,255,255,0.55)"/>

      {/* ── BEAK ── */}
      <path d="M342,70 Q364,76 342,82 Q352,76 342,70 Z" fill="#E8A800"/>
      <path d="M342,70 Q360,76 342,80 Z" fill="#FFB800"/>

      {/* ── EYE ── */}
      <circle cx="330" cy="70" r="4" fill="#1a1008"/>
      <circle cx="328.5" cy="68.5" r="1.4" fill="rgba(255,255,255,0.75)"/>
      <circle cx="332" cy="70" r="1" fill="rgba(255,220,80,0.4)"/>

      {/* ── TAIL FEATHERS (behind body, to the left) ── */}
      <path
        d="M232,102
           C222,118 212,140 200,158
           C216,144 230,142 244,150
           C252,142 264,150 276,160
           C268,142 262,122 254,105 Z"
        fill="rgba(242,238,232,0.92)"
      />
      {/* Tail shading lines */}
      <path d="M232,102 C226,118 220,138 216,152 C228,140 236,144 244,150 Z" fill="rgba(180,172,158,0.45)"/>
      <path d="M254,105 C258,120 262,138 264,154 C256,142 264,148 276,160 Z" fill="rgba(180,172,158,0.40)"/>
      <path d="M242,104 C240,122 238,140 236,155 C240,148 244,150 248,155 Z" fill="rgba(180,172,158,0.30)"/>
    </svg>
  )
}

type FlightState = 'hidden' | 'flying'

export default function FlyingEagle() {
  const [state, setState] = useState<FlightState>('hidden')
  const [pos, setPos] = useState({ x: 2000, y: 120 })
  const [flightKey, setFlightKey] = useState(0)
  const mounted = useRef(true)

  const launchEagle = () => {
    if (!mounted.current) return
    const vw = window.innerWidth
    const vh = window.innerHeight
    const startY = vh * (0.06 + Math.random() * 0.20)
    setPos({ x: vw + 520, y: startY })
    setState('flying')
    setFlightKey(k => k + 1)
  }

  useEffect(() => {
    mounted.current = true
    // First appearance after 10–20s
    const t = setTimeout(launchEagle, 10000 + Math.random() * 10000)
    return () => {
      mounted.current = false
      clearTimeout(t)
    }
  }, [])

  const handleComplete = () => {
    setState('hidden')
    // Next appearance 20–40s later
    setTimeout(launchEagle, 20000 + Math.random() * 20000)
  }

  if (state === 'hidden') return null

  const endX = -(500 + 60)  // fully off-screen left

  return (
    <motion.div
      key={flightKey}
      initial={{ x: pos.x, y: pos.y, opacity: 0 }}
      animate={{
        x: endX,
        y: pos.y + (Math.random() * 30 - 15),
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: 30,
        ease: 'linear',
        opacity: { times: [0, 0.04, 0.93, 1], ease: 'easeInOut', duration: 30 },
      }}
      onAnimationComplete={handleComplete}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 55,
        pointerEvents: 'none',
      }}
    >
      <EagleSVG />
    </motion.div>
  )
}
