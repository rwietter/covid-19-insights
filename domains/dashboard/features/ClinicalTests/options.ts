export const options = {
  responsive: true,
  maintainAspectRatio: false,
  borderWidth: 0,
  animation: {
    animateScale: true,
    animateRotate: true
  },
  indexAxis: 'y' as const,
  scales: {
    x: {
      display: false
    },
    y: {
      display: false
    }
  }
};

export const colors = [
  'rgba(235, 111, 146, 1)',
  'rgba(246, 193, 119, 1)',
  'rgba(156, 207, 216, 1)',
  'rgba(49, 116, 143, 1)',
  'rgba(196, 167, 231, 1)',
  'rgba(101, 98, 168, 1)',
  'rgba(34, 111, 104, 1)',
  'rgba(253, 164, 127, 1)'
];
