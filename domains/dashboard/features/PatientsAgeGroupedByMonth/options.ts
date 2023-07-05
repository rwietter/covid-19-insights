export const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      display: true,
      title: {
        text: 'Infecções',
        display: true,
        font: {
          size: 16,
          family: 'Quicksand, sans-serif',
          weight: '600',
        },
      },
      grid: {
        display: true,
      },
      ticks: {
        font: {
          size: 14,
          family: 'Quicksand, sans-serif',
          weight: '500',
        },
        count: 6,
      },
    },
    x: {
      display: true,
      title: {
        text: 'Mês',
        display: true,
        font: {
          size: 16,
          family: 'Quicksand, sans-serif',
          weight: '600',
        },
      },
      ticks: {
        font: {
          size: 14,
          family: 'Quicksand, sans-serif',
          weight: '500',
        },
      },
    },
  },
};
