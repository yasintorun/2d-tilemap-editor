import { useEffect, useState } from 'react'

const WIDTH = 1280, 
      HEIGHT = 736,
      GRID_SIZE = 32;

class Grid {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;
    this.ctx.fillStyle = "#151515"
    this.ctx.fillRect(0, 0, WIDTH, HEIGHT)
    this.init()
  }

  init() {
    this.createGridWorld()
  }

  createGridWorld() {
    this.ctx.beginPath()
    for(let x = 0; x <= WIDTH; x+=GRID_SIZE) {
      this.ctx.moveTo(x, 0)
      this.ctx.lineTo(x, HEIGHT)
      for(let y = 0; y <= HEIGHT; y+=GRID_SIZE) {
        this.ctx.moveTo(0, y)
        this.ctx.lineTo(WIDTH, y)
      } 
    }
    this.ctx.stroke();
  }
}


function App() {
  const [grid, setGrid] = useState<Grid | null>(null)
  useEffect(() => {
    const canvas = document.getElementById("scene-canvas") as HTMLCanvasElement;
    setGrid(new Grid(canvas))
  }, [])

  return (
    <div className="App">
      <canvas id='scene-canvas' width={WIDTH} height={HEIGHT} />
    </div>
  )
}

export default App
