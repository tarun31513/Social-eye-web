import { Card } from './ui/card';
import { Progress } from './ui/progress';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { sentimentOverTime, platformData, wordCloudData } from '../lib/mockData';
import { Smile, Meh, Frown } from 'lucide-react';

export default function SentimentPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1>Sentiment Analysis</h1>
        <p className="text-muted-foreground">Analyze the sentiment of mentions across platforms</p>
      </div>

      {/* Overall Sentiment Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
              <Smile className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-muted-foreground">Positive</p>
              <p style={{ fontSize: '32px', fontWeight: '700' }}>72%</p>
            </div>
          </div>
          <Progress value={72} className="h-2" style={{ backgroundColor: '#e5e7eb' }}>
            <div className="h-full bg-green-500 rounded-full" style={{ width: '72%' }}></div>
          </Progress>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
              <Meh className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <p className="text-muted-foreground">Neutral</p>
              <p style={{ fontSize: '32px', fontWeight: '700' }}>18%</p>
            </div>
          </div>
          <Progress value={18} className="h-2" style={{ backgroundColor: '#e5e7eb' }}>
            <div className="h-full bg-yellow-500 rounded-full" style={{ width: '18%' }}></div>
          </Progress>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
              <Frown className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <p className="text-muted-foreground">Negative</p>
              <p style={{ fontSize: '32px', fontWeight: '700' }}>10%</p>
            </div>
          </div>
          <Progress value={10} className="h-2" style={{ backgroundColor: '#e5e7eb' }}>
            <div className="h-full bg-red-500 rounded-full" style={{ width: '10%' }}></div>
          </Progress>
        </Card>
      </div>

      {/* Sentiment Over Time */}
      <Card className="p-6">
        <h3 className="mb-6">Sentiment Trends Over Time</h3>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={sentimentOverTime}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="date" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#fff', 
                border: '1px solid #e5e7eb',
                borderRadius: '8px'
              }}
            />
            <Legend />
            <Line type="monotone" dataKey="positive" stroke="#10b981" strokeWidth={2} name="Positive %" />
            <Line type="monotone" dataKey="neutral" stroke="#f59e0b" strokeWidth={2} name="Neutral %" />
            <Line type="monotone" dataKey="negative" stroke="#ef4444" strokeWidth={2} name="Negative %" />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      {/* Sentiment by Platform */}
      <Card className="p-6">
        <h3 className="mb-6">Sentiment Score by Platform</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={platformData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="platform" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#fff', 
                border: '1px solid #e5e7eb',
                borderRadius: '8px'
              }}
            />
            <Bar dataKey="sentiment" fill="#0099ff" name="Sentiment Score" />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      {/* Word Cloud */}
      <Card className="p-6">
        <h3 className="mb-6">Trending Keywords in Mentions</h3>
        <div className="min-h-[300px] bg-muted rounded-lg p-8 flex flex-wrap items-center justify-center gap-4">
          {wordCloudData.map((word, index) => {
            const fontSize = Math.max(12, Math.min(48, word.value / 2));
            const isPositive = word.value > 60;
            const isNegative = word.value < 40;
            const color = isPositive ? '#10b981' : isNegative ? '#ef4444' : '#0099ff';
            
            return (
              <span
                key={index}
                style={{
                  fontSize: `${fontSize}px`,
                  fontWeight: word.value > 70 ? 700 : 500,
                  color: color,
                  opacity: 0.7 + (word.value / 200),
                }}
                className="cursor-pointer hover:opacity-100 transition-opacity"
              >
                {word.text}
              </span>
            );
          })}
        </div>
      </Card>
    </div>
  );
}
