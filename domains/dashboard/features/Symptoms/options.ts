export const options = {
  responsive: true,
  maintainAspectRatio: false,
  borderWidth: 0,
  animation: {
    animateScale: true,
    animateRotate: true
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
