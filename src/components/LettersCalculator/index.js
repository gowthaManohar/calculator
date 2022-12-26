import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {value: 0}

  valuechange = event => {
    const ipvalue = event.target.value
    const butt = document.getElementById('value')
    const v = ipvalue.length
    butt.textContent = v
  }

  render() {
    const {value} = this.state
    return (
      <div className="bg-container">
        <div className="details-container">
          <h1 className="card-head">Calculate the Letters you enter</h1>
          <label htmlFor="label1" className="labelforip">
            Enter the phrase
          </label>
          <div>
            <input
              id="label1"
              onChange={this.valuechange}
              className="inputip"
              type="text"
              placeholder="Enter the phrase"
            />
          </div>
          <button type="button" className="button">
            <p id="value">No.of letters: 0</p>
          </button>
        </div>
        <img
          alt="letters calculator"
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
        />
      </div>
    )
  }
}

export default LettersCalculator
