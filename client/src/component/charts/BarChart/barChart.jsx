import { useEffect } from 'react'
import ApexCharts from 'apexcharts'

const BarChart = (props) => {
  const options = {
    series: [
      {
        data: [],
      },
    ],
    chart: {
      type: 'bar',
      height: 300,
      foreColor: '#FFFFFF',
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [],
    },
  }

  useEffect(() => {
    var chart = new ApexCharts(document.querySelector('#barChart'), options)
    chart.render()

    const ordersMap = new Map()
    props.resOrders?.payload.map((elm) => {
      const pId = elm.line_items[0].product_id
      ordersMap.set(pId, ordersMap.has(pId) ? ordersMap.get(pId) + 1 : 1)
    })
    const ordersTopTen = new Map(
      [...ordersMap.entries()].sort((a, b) => b[1] - a[1]).slice(0, 10),
    )

    var topTenProducts = []
    var topProductsValue = []
    ordersTopTen.forEach((key, value) => {
      props.resProducts?.payload.map((elm) => {
        if (elm.id === value) {
          topProductsValue.push(key)
          topTenProducts.push(elm.title)
        }
      })
    })

    chart.updateSeries([{ name: 'TopTenProducts', data: topProductsValue }])

    chart.updateOptions({
      xaxis: {
        categories: topTenProducts,
      },
    })
  }, [props.resProducts])

  return (
    <>
      <div id="barChart" className="w-full"></div>
    </>
  )
}

export default BarChart
