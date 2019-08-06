import React from 'react'

class Scripts extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <script src="https://www.amcharts.com/lib/4/core.js"></script>
        <script src="https://www.amcharts.com/lib/4/maps.js"></script>
        <script src="https://www.amcharts.com/lib/4/geodata/worldLow.js"></script>
        <script src="//www.amcharts.com/lib/4/charts.js"></script>
      </div>
    )
  }
}

export default Scripts