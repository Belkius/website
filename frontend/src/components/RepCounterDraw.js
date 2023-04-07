const color = "#C4344F"
const lineWidth = 2
const pointPairs = [[0,1], [0,2], [1,3], [2,4], [5,6], [5,7], [5,11], [6,12], [6,8], [7,9], [8,10], [11,12], [11,13], [12,14], [13,15], [14,16]]

export function drawSkeleton(keypoints, minConfidence, ctx) {
  ctx.fillStyle = color
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth

  pointPairs.forEach(([i, j]) => {
    const kp1 = keypoints[i]
    const kp2 = keypoints[j]

    const score1 = kp1.score 
    const score2 = kp2.score 

    if (score1 >= minConfidence && score2 >= minConfidence) {
      ctx.beginPath()
      ctx.moveTo(kp1.x, kp1.y)
      ctx.lineTo(kp2.x, kp2.y)
      ctx.stroke()
    }
  });
} 

export function drawKeypoints(keypoints, minConfidence, ctx, scale = 1) {
  const radius = 4
  for (let i = 0; i < keypoints.length; i++) {
    const keypoint = keypoints[i]
    if (keypoint.score < minConfidence) {
      continue
    }
    const x = keypoint.x
    const y = keypoint.y

    ctx.beginPath()
    ctx.arc(x * scale, y * scale, radius, 0, 2 * Math.PI)
    ctx.fillStyle = color
    ctx.fill()
  }
}