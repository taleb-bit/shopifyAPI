import { useEffect } from 'react'
import ApexCharts from 'apexcharts'

const PieChart = (props) => {
  const options = {
    series: [],
    chart: {
      height: 350,
      type: 'pie',
      foreColor: '#FFFFFF',
    },
    colors: ['#93C3EE', '#E5C6A0', '#669DB5', '#94A74A'],
    fill: {
      type: 'image',
      opacity: 0.85,
      image: {
        src: [],
        width: 25,
        imagedHeight: 250,
      },
    },
    labels: [],
    stroke: {
      width: 4,
    },
    dataLabels: {
      enabled: true,
      style: {
        colors: ['#111'],
      },
      background: {
        enabled: true,
        foreColor: '#fff',
        borderWidth: 0,
      },
    },
  }

  useEffect(() => {
    var chart = new ApexCharts(document.querySelector('#pieChart'), options)
    chart.render()

    const ordersMap = new Map()
    props.resOrders?.payload.map((elm) => {
      const pId = elm.line_items[0].product_id
      ordersMap.set(pId, ordersMap.has(pId) ? ordersMap.get(pId) + 1 : 1)
    })
    const ordersTopTen = new Map(
      [...ordersMap.entries()].sort((a, b) => b[1] - a[1]).slice(0, 4),
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
      fill: {
        image: {
          src: topProductsImages,
        },
      },
      labels: topProductsNames,
    })
  }, [props.resProducts])

  return (
    <>
      <div id="pieChart" className="w-full"></div>
    </>
  )
}

export default PieChart
