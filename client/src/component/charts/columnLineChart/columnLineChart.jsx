import { useEffect } from 'react'
import ApexCharts from 'apexcharts'

const ColumnLineChart = (props) => {
  const options = {
    series: [],

    chart: {
      height: '300px',
      foreColor: '#FFFFFF',
      type: 'line',
    },
    stroke: {
      width: [0, 4],
    },
    title: {
      text: 'Traffic Sources',
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1],
    },
    labels: [
      '01 Jan 2022',
      '02 Jan 2022',
      '03 Jan 2022',
      '04 Jan 2022',
      '05 Jan 2022',
      '06 Jan 2022',
      '07 Jan 2022',
      '08 Jan 2022',
      '09 Jan 2022',
      '10 Jan 2022',
      '11 Jan 2022',
      '12 Jan 2022',
    ],
    xaxis: {
      type: 'datetime',
    },
    yaxis: [
      {
        title: {
          text: 'Products Sales Count',
        },
      },
      {
        opposite: true,
        title: {
          text: 'Product Price',
        },
      },
    ],
  }

  useEffect(() => {
    var chart = new ApexCharts(
      document.querySelector('#columnLineChart'),
      options,
    )
    chart.render()

    const ordersMap = new Map()
    props.resOrders?.payload.map((elm) => {
      const pId = elm.line_items[0].product_id
      ordersMap.set(pId, ordersMap.has(pId) ? ordersMap.get(pId) + 1 : 1)
    })
    const ordersTopTen = new Map(
      [...ordersMap.entries()].sort((a, b) => b[1] - a[1]).slice(0, 12),
    )

    var topProductsPrices = []
    var topProductsValue = []
    var topProductsNames = []
    ordersTopTen.forEach((key, value) => {
      props.resProducts?.payload.map((elm) => {
        if (elm.id === value) {
          topProductsValue.push(key)
          topProductsNames.push(elm.title)
          topProductsPrices.push(elm.variants[0].price)
        }
      })
    })

    chart.updateSeries([
      { name: 'Product Price', type: 'column', data: topProductsValue },
      { name: 'Product Sales Count', type: 'line', data: topProductsPrices },
    ])
  }, [props.resProducts])

  return (
    <>
      <div id="columnLineChart" className="w-full"></div>
    </>
  )
}

export default ColumnLineChart
