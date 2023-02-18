'use strict'

const elCanvas = document.getElementById('canvas')
const gCtx = elCanvas.getContext('2d')

elCanvas.width = window.innerWidth
elCanvas.height = window.innerHeight
const particlesArray = []
let h = 0

window.addEventListener('resize', function () {
  elCanvas.width = window.innerWidth
  elCanvas.height = window.innerHeight
})

const mouse = {
  x: undefined,
  y: undefined,
}

elCanvas.addEventListener('click', function (event) {
  mouse.x = event.x
  mouse.y = event.y
  for (let i = 0; i < 5; i++) {
    particlesArray.push(new Particle())
  }
})

elCanvas.addEventListener('mousemove', function (event) {
  mouse.x = event.x
  mouse.y = event.y
  for (let i = 0; i < 100; i++) {
    particlesArray.push(new Particle())
  }
  console.log(event)
})

class Particle {
  constructor() {
    this.x = mouse.x
    this.y = mouse.y
    // this.x = Math.random() * elCanvas.width
    // this.y = Math.random() * elCanvas.height
    this.size = Math.random() * 15 + 1
    this.speedX = Math.random() * 3 - 1.5
    this.speedY = Math.random() * 3 - 1.5
    this.color = 'hsl(' + h + ',100%, 50%)'
  }
  update() {
    this.x += this.speedX
    this.y += this.speedY
    if (this.size > 0.2) this.size -= 0.1
  }
  draw() {
    gCtx.fillStyle = this.color
    gCtx.beginPath()
    gCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    gCtx.fill()
  }
}

function handleParticles() {
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update()
    particlesArray[i].draw()
    // for (var j = i; j < particlesArray.length; j++) {
    //   const dx = particlesArray[i].x - particlesArray[i].x
    //   const dy = particlesArray[i].y - particlesArray[j].y
    //   const distance = Math.sqrt(dx * dx + dy * dy)
    //   if (distance < 100) {
    //     gCtx.beginPath()
    //     gCtx.strokeStyle = particlesArray[i].color
    //     gCtx.lineWidth = 0.5
    //     // gCtx.lineWidth = particlesArray[i].size / 10
    //     gCtx.moveTo(particlesArray[i].x, particlesArray[i].y)
    //     gCtx.lineTo(particlesArray[j].x, particlesArray[j].y)
    //     gCtx.stroke()
    //     gCtx.closePath()
    //   }
    // }
    if (particlesArray[i].size <= 0.3) {
      particlesArray.splice(i, 1)
      i--
    }
  }
}

function animate() {
  //   gCtx.clearRect(0, 0, elCanvas.width, elCanvas.height)
  gCtx.fillStyle = 'rgba(0,0,0,0.02)'
  gCtx.fillRect(0, 0, elCanvas.width, elCanvas.height)
  handleParticles()
  h += 5
  requestAnimationFrame(animate)
}
animate()
