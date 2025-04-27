document.addEventListener('DOMContentLoaded', () => {
  // Forzamos que todas las secciones estén “activas” (visibles)
  document.querySelectorAll('main section').forEach(sec => {
    sec.classList.add('aparecer');
  });

  // Configuración de los gráficos
  const ctxBarras = document.getElementById('graficoAbuso').getContext('2d');
  new Chart(ctxBarras, {
    type: 'bar',
    data: {
      labels: ['India','EE.UU.','México','Brasil','Sudáfrica'],
      datasets: [{ 
        label: 'Casos x100 000 niños',
        data: [25,20,15,10,5],
        backgroundColor: '#007bff',
        borderColor: '#0056b3',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: { y: { beginAtZero: true } }
    }
  });

  const ctxPastel = document.getElementById('graficoTiposAbuso').getContext('2d');
  new Chart(ctxPastel, {
    type: 'pie',
    data: {
      labels: ['Sexual','Físico','Emocional','Negligencia'],
      datasets: [{
        data: [40,30,20,10],
        backgroundColor: ['#ff5733','#33ff57','#3357ff','#f2a0a1']
      }]
    },
    options: { responsive: true }
  });
});
