// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {number: 0, evenOdd: 'Even'}

  oddOrEven = () => {
    // const {number, evenOdd} = this.state

    this.setState(prevState => {
      console.log(prevState)
      // console.log(Math.random() * 100)

      const incrementAndAddition =
        Math.round(Math.random() * 100) + prevState.number
      console.log(incrementAndAddition)

      if (incrementAndAddition % 2 === 0) {
        return {number: incrementAndAddition, evenOdd: 'Even'}
      }
      return {number: incrementAndAddition, evenOdd: 'Odd'}
    })
  }

  render() {
    const {number, evenOdd} = this.state
    return (
      <div className="bg-container">
        <div className="even-odd-container">
          <h1 className="count">
            Count <span>{number}</span>
          </h1>
          <p className="evenorodd">Count is {evenOdd}</p>
          <button onClick={this.oddOrEven} className="button" type="button">
            Increment
          </button>
          <p className="note">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
