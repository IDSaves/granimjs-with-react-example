import React, { Component } from 'react';
import Granim from 'granim'

class App extends Component {
  state = {
    images: [
      {
        title: 'First',
        image_key: Math.random(),
        loaded: false
      },
      {
        title: 'Second',
        image_key: Math.random(),
        loaded: false
      },
      {
        title: 'Third',
        image_key: Math.random(),
        loaded: false
      },
      {
        title: 'Fourth',
        image_key: Math.random(),
        loaded: false
      },
      {
        title: 'Fifth',
        image_key: Math.random(),
        loaded: false
      },
      {
        title: 'Sixth',
        image_key: Math.random(),
        loaded: false
      },
      {
        title: 'Seventh',
        image_key: Math.random(),
        loaded: false
      },
      {
        title: 'Eighth',
        image_key: Math.random(),
        loaded: false
      },
      {
        title: 'Ninth',
        image_key: Math.random(),
        loaded: false
      },
      {
        title: 'Tenth',
        image_key: Math.random(),
        loaded: false
      },
      {
        title: 'Eleventh',
        image_key: Math.random(),
        loaded: false
      },
      {
        title: 'Twelfth',
        image_key: Math.random(),
        loaded: false
      }
    ]
  }

  componentDidMount(){
      var granimInstance = new Granim({
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
    });
  }

  onLoadImage = (i) => {
    let new_state = Object.assign({}, this.state, {
      images: this.state.images.map((image, index) => {
        if (index === i) {
          return Object.assign({}, image, {
            loaded: true
          })
        }
        return image
      })
    })
    this.setState(new_state)
  }

  LoadNewImage = (i) => {
    let new_state = Object.assign({}, this.state, {
      images: this.state.images.map((image, index) => {
        if (index === i) {
          return Object.assign({}, image, {
            image_key: Math.random(),
            loaded: false
          })
        }
        return image
      })
    })
    this.setState(new_state)
  }

  render() {
    console.log(this.state.images)
    return (
      <div className="App ">
        <canvas id="canvas-basic" />

        <div className="container pt-3 text-center">
          <h1 className="canvas-text mt-2">RateEm</h1>
        </div>

        <div className="content container mb-5">
          <div className="row">

            {this.state.images.map((image, i) => {
              return(
                <div className="col-lg-3 mt-5" key={i} onClick={() => this.LoadNewImage(i)}>
                  <div className="content-piece text-center container-fluid">
                    <h1>{image.title}</h1>
                    {!image.loaded ?
                      <div className="img-fluid image-loading mx-auto"></div> : ''
                    }
                    <img className={!image.loaded ? "img-fluid d-none" : "img-fluid"} src={'https://picsum.photos/200/300/?random' + image.image_key} onLoad={() => this.onLoadImage(i)} ref="image"/>
                  </div>
                </div>
              )
            })}

          </div>
        </div>

      </div>
    );
  }
}

export default App;
