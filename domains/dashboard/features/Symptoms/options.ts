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
        color: 'text-slate-900',
        padding: 15,
        font: {
          size: 12,
          family: 'Inter'
        }
      }
    }
  }
};
