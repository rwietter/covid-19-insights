export const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      grid: {
        display: true
      },
      ticks: {
        font: {
          size: 14,
          family: 'Quicksand, sans-serif',
          weight: '500'
        },
        count: 6
      }
    },
    x: {
      ticks: {
        font: {
          size: 14,
          family: 'Quicksand, sans-serif',
          weight: '500'
        }
      }
    }
  },
  plugins: {
    legend: {
      fullSize: true,
      position: 'top' as const,
      labels: {
        color: 'text-foreground',
        padding: 15,
        font: {
          size: 15,
          weight: '500',
          family: 'Quicksand, sans-serif'
        }
      }
    },
    tooltip: {
      titleFont: {
        family: 'Quicksand, sans-serif',
        size: 14
      },
      bodyFont: {
        family: 'Quicksand, sans-serif',
        size: 14,
        weight: '500'
      }
    }
  }
};
