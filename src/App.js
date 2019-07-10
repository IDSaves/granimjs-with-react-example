import React, { useState, useEffect } from 'react'
import {images as imagesArray} from './images'
import Granim from 'granim'

export default () => {
  const [images, setImages] = useState(imagesArray)
  
  useEffect(() => {
    new Granim({
      element: '#canvas-basic',
      name: 'basic-gradient',
      direction: 'left-right', // 'diagonal', 'top-bottom', 'radial'
      opacity: [1, 1],
      isPausedWhenNotInView: true,
      states : {
          "default-state": {
              gradients: [
                  ['#AA076B', '#61045F'],
                  ['#02AAB0', '#00CDAC'],
                  ['#DA22FF', '#9733EE']
              ]
          }
      }
    })
  }, [])

  const onLoadImage = (i) => {
    let newImages = images.map((image, index) => {
      if (index === i) {
        return Object.assign({}, image, {
          loaded: true
        })
      }
      return image
    })
    setImages(newImages)
  }

  const loadNewImage = (i) => {
    let newImages = images.map((image, index) => {
      if (index === i) {
        return Object.assign({}, image, {
          image_key: Math.random(),
          loaded: false
        })
      }
      return image
    })
    setImages(newImages)
  }

  return (
    <div className="App ">
      <canvas id="canvas-basic" />

      <div className="container pt-3 text-center">
        <h1 className="canvas-text mt-2">Granim + React</h1>
      </div>

      <div className="content container mb-5">
        <div className="row">

          {images && images.map((image, i) => {
            return(
              <div className="col-lg-3 mt-5" key={i} onClick={() => loadNewImage(i)}>
                <div className="content-piece text-center container-fluid">
                  <h1>{image.title}</h1>
                  {!image.loaded ?
                    <div className="img-fluid image-loading mx-auto"></div> : ''
                  }
                  <img className={!image.loaded ? "img-fluid d-none" : "img-fluid"} src={'https://picsum.photos/200/300/?random' + image.image_key} onLoad={() => onLoadImage(i)}/>
                </div>
              </div>
            )
          })}

        </div>
      </div>

    </div>
  )
}
