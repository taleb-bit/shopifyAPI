import { useEffect } from 'react'
import ApexCharts from 'apexcharts'

const PloarChart = (props) => {
  const options = {
    series: [],
    chart: {
      type: 'polarArea',
      height: '300px',
      foreColor: '#FFFFFF',
    },
    stroke: {
      colors: ['#fff'],
    },
    fill: {
      opacity: 0.8,
    },
  }

  useEffect(() => {
    var chart = new ApexCharts(document.querySelector('#polarChart'), options)
    chart.render()

    const ordersMap = new Map()
    props.resOrders?.payload.map((elm) => {
      const pId = elm.line_items[0].product_id
      ordersMap.set(pId, ordersMap.has(pId) ? ordersMap.get(pId) + 1 : 1)
    })
    const ordersTopTen = new Map(
      [...ordersMap.entries()].sort((a, b) => b[1] - a[1]).slice(0, 10),
    )

    var topProductsImages = []
    var topProductsValue = []
    var topProductsNames = []
    ordersTopTen.forEach((key, value) => {
      props.resProducts?.payload.map((elm) => {
        if (elm.id === value) {
          topProductsValue.push(key)
          topProductsNames.push(elm.title)
          topProductsImages.push(elm.image.src)
        }
      })
    })

    chart.updateSeries(topProductsValue)

    chart.updateOptions({
      labels: topProductsNames,
    })
  }, [props.resProducts])

  return (
    <>
      <div id="polarChart" className="w-full"></div>
    </>
  )
}

export default PloarChart
