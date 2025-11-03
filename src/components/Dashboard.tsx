import { useState } from 'react';
import MetricCard from './MetricCard';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { MessageSquare, Heart, ThumbsDown, Users, TrendingUp, Hash, HelpCircle } from 'lucide-react';
import { LineChart, Line, PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { mentionsData, sentimentDistribution, trendingKeywords, platformData } from '../lib/mockData';
import { Badge } from './ui/badge';
import HowItWorksModal from './HowItWorksModal';

export default function Dashboard() {
  const [showHowItWorks, setShowHowItWorks] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1>Dashboard</h1>
          <p className="text-muted-foreground">Overview of your social media monitoring</p>
        </div>
        <Button 
          variant="outline" 
          onClick={() => setShowHowItWorks(true)}
          className="gap-2"
        >
          <HelpCircle className="w-4 h-4" />
          How It Works
        </Button>
      </div>

      <HowItWorksModal 
        open={showHowItWorks}
        onClose={() => setShowHowItWorks(false)}
      />

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Mentions"
          value="3,247"
          change="+12.5% from last week"
          changeType="positive"
          icon={MessageSquare}
          iconColor="#0099ff"
        />
        <MetricCard
          title="Positive Sentiments"
          value="72%"
          change="+5.2% from last week"
          changeType="positive"
          icon={Heart}
          iconColor="#10b981"
        />
        <MetricCard
          title="Negative Sentiments"
          value="10%"
          change="-2.1% from last week"
          changeType="positive"
          icon={ThumbsDown}
          iconColor="#ef4444"
        />
        <MetricCard
          title="Engagement Rate"
          value="8.4%"
          change="+1.8% from last week"
          changeType="positive"
          icon={TrendingUp}
          iconColor="#f59e0b"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Mentions Over Time */}
        <Card className="p-6">
          <h3 className="mb-6">Mentions Over Time</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={mentionsData}>
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
              <Line type="monotone" dataKey="mentions" stroke="#0099ff" strokeWidth={2} name="Total Mentions" />
              <Line type="monotone" dataKey="positive" stroke="#10b981" strokeWidth={2} name="Positive" />
              <Line type="monotone" dataKey="negative" stroke="#ef4444" strokeWidth={2} name="Negative" />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Sentiment Distribution */}
        <Card className="p-6">
          <h3 className="mb-6">Sentiment Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={sentimentDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {sentimentDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Platform Performance & Trending Keywords */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Platform Performance */}
        <Card className="p-6 lg:col-span-2">
          <h3 className="mb-6">Platform Performance</h3>
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
              <Legend />
              <Bar dataKey="mentions" fill="#0099ff" name="Mentions" />
              <Bar dataKey="sentiment" fill="#10b981" name="Sentiment Score" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Trending Keywords */}
        <Card className="p-6">
          <h3 className="mb-6">Trending Keywords</h3>
          <div className="space-y-4">
            {trendingKeywords.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#0099ff]/10">
                    <Hash className="w-4 h-4 text-[#0099ff]" />
                  </div>
                  <span>{item.keyword}</span>
                </div>
                <Badge variant="secondary">{item.mentions}</Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Geography Heatmap Placeholder */}
      <Card className="p-6">
        <h3 className="mb-6">Mentions by Geography</h3>
        <div className="h-96 bg-muted rounded-lg flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            <p>Interactive World Map</p>
            <p className="text-sm mt-2">Top regions: United States (1,245), United Kingdom (680), Canada (420)</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
