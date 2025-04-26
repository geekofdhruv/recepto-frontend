import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { useAnalytics } from '../context/leadAnalyticsContext';

interface LeadChartProps {
  data: number[];
  color: string;
  maxValue?: number;
  type: 'receptoNet' | 'orgNetwork';
}

const LeadChart: React.FC<LeadChartProps> = ({ data, color, maxValue = 400,type }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);
  const { receptoLeads, orgLeads } = useAnalytics();
  const yetToUnlock = type === 'receptoNet' ? receptoLeads.yetToUnlock : orgLeads.yetToUnlock;

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      
      if (ctx) {
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
        const gradient = ctx.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, `${color}40`); 
        gradient.addColorStop(1, `${color}05`); 
        
        chartInstance.current = new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [{
              label: 'Leads',
              data: data,
              borderColor: color,
              backgroundColor: gradient,
              tension: 0.4,
              fill: true,
              pointRadius: 0,
              pointHoverRadius: 5,
              pointBackgroundColor: color,
              pointHoverBackgroundColor: color,
              pointBorderWidth: 0,
              pointHoverBorderWidth: 2,
              pointHoverBorderColor: 'white'
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false
              },
              tooltip: {
                enabled: true
              }
            },
            scales: {
              x: {
                grid: {
                  display: false
                }
              },
              y: {
                min: 0,
                max: maxValue,
                grid: {
                  color: '#f0f0f0'
                },
                ticks: {
                  stepSize: 100
                }
              }
            },
            elements: {
              line: {
                borderWidth: 2
              }
            }
          }
        });
      }
    }
   
    
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data, color, maxValue]);

  return (
    <div className="h-40 relative">
      <canvas ref={chartRef}></canvas>
      <div className="absolute top-0 right-0 bg-white px-2 py-1 rounded-full text-xs font-medium">
        {yetToUnlock}
      </div>
    </div>
  );
};

export default LeadChart;
