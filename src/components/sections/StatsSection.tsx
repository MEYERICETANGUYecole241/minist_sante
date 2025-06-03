'use client'
import React, { useEffect } from 'react';
import * as echarts from 'echarts'

// Exemple de composant React avec plusieurs graphiques ECharts

const StatistiquesSante = () => {
  useEffect(() => {
    // Cas de paludisme
    const paludismeChart = echarts.init(document.getElementById('paludisme-chart'));
    paludismeChart.setOption({
      title: { text: 'Cas de Paludisme (Jan - Juin 2024)', left: 'center' },
      tooltip: { trigger: 'axis' },
      legend: { data: ['Enfants', 'Adultes'], top: 30 },
      xAxis: { type: 'category', data: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'] },
      yAxis: { type: 'value' },
      series: [
        { name: 'Enfants', type: 'bar', data: [1200, 1320, 1010, 1340, 900, 1120], color: '#4CAF50' },
        { name: 'Adultes', type: 'bar', data: [800, 930, 870, 980, 760, 810], color: '#2196F3' },
      ],
    });

    // Vaccination
    const vaccinationChart = echarts.init(document.getElementById('vaccination-chart'));
    vaccinationChart.setOption({
      title: {
        text: 'Couverture Vaccinale DTC3 - 2024',
        left: 'center',
        textStyle: {
          fontSize: 16,
          fontWeight: 'bold'
        }
      },
      tooltip: {
        trigger: 'item',
        formatter: '{b}: {c}%'
      },
      legend: {
        orient: 'horizontal',
        bottom: 0,
        data: ['Couverture complète', 'Couverture partielle', 'Non vacciné']
      },
      series: [
        {
          name: 'Couverture Vaccinale',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: true,
            formatter: '{b}: {d}%',
            fontSize: 14
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 18,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: true
          },
          data: [
            { value: 65, name: 'Couverture complète', itemStyle: { color: '#4CAF50' } },
            { value: 20, name: 'Couverture partielle', itemStyle: { color: '#FFC107' } },
            { value: 15, name: 'Non vacciné', itemStyle: { color: '#F44336' } }
          ]
        }
      ]
    });

    // Structures sanitaires par province
    const infraChart = echarts.init(document.getElementById('infra-chart'));
    infraChart.setOption({
      title: { text: 'Structures de santé par province', left: 'center' },
      tooltip: {},
      xAxis: {
        type: 'category',
        data: ['Estuaire', 'Haut-Ogooué', 'Ogooué-Maritime', 'Ngounié', 'Woleu-Ntem']
      },
      yAxis: { type: 'value' },
      series: [
        {
          type: 'bar',
          data: [120, 80, 95, 60, 70],
          color: '#03A9F4'
        }
      ]
    });

    return () => {
      paludismeChart.dispose();
      vaccinationChart.dispose();
      infraChart.dispose();
    };
  }, []);

  return (
    <section className="p-6 space-y-4">
      <h2 className="text-2xl font-bold text-center">Statistiques de Santé Publique - Gabon 2024</h2>
      <div id="paludisme-chart" style={{ height: '240px', width: '100%' }}></div>
      <div id="vaccination-chart" style={{ height: '240px', width: '100%' }}></div>
      <div id="infra-chart" style={{ height: '240px', width: '100%' }}></div>
    </section>
  );
};

export default StatistiquesSante;
