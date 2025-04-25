// components/analytics/LeadChart.tsx
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

interface LeadChartProps {
  data: number[];
  color: string;
  maxValue?: number;
}

const LeadChart: React.FC<LeadChartProps> = ({ data, color, maxValue = 400 }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      
      if (ctx) {
        // Destroy previous chart if it exists
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
        
        // Create gradient
        const gradient = ctx.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, `${color}40`); // Semi-transparent
        gradient.addColorStop(1, `${color}05`); // Almost transparent
        
        // Create chart
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
        394
      </div>
    </div>
  );
};

export default LeadChart;
