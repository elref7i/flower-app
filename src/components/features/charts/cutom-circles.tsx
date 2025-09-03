import React from "react"
import { PieLabelRenderProps } from "recharts"

export default function CustomPieLabel(props: PieLabelRenderProps) {
  //variables
  const { cx, cy, midAngle, outerRadius, percent } = props

  if (
    cx == null ||
    cy == null ||
    midAngle == null ||
    outerRadius == null ||
    percent == null
  ) {
    return null
  }

  const xCx = Number(cx)
  const yCy = Number(cy)
  const angle = Number(midAngle)
  const outer = Number(outerRadius)
  const ratio = Number(percent)

  const RADIAN = Math.PI / 180
  const radius = outer; 
  const x = xCx + radius * Math.cos(-angle * RADIAN)
  const y = yCy + radius * Math.sin(-angle * RADIAN)

  return (
    <g >
      <circle
        cx={x}
        cy={y}
        r={15.75}
        fill="#FAFAFA"
        stroke="#E5E7EB"
        strokeWidth={1}
      >

      </circle>
      <text
        x={x}
        y={y}
        fill="#27272A"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={10}
        fontWeight={700}
      >
        {`${(ratio * 100).toFixed(0)}%`}
      </text>
    </g>
  )
}
