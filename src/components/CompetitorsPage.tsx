import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Plus, TrendingUp, MessageSquare, Heart } from 'lucide-react';
import { competitorData } from '../lib/mockData';

export default function CompetitorsPage() {
  const shareOfVoiceData = competitorData.map(comp => ({
    name: comp.name,
    value: comp.shareOfVoice,
    fill: comp.name === 'Your Brand' ? '#0099ff' : comp.name === 'Competitor A' ? '#8b5cf6' : '#f59e0b'
  }));

  const topPosts = [
    { brand: 'Competitor A', content: 'Launching our new AI-powered dashboard...', sentiment: 85, engagement: 12400 },
    { brand: 'Your Brand', content: 'Excited to announce our Series A funding...', sentiment: 92, engagement: 14300 },
    { brand: 'Competitor B', content: 'New integration with popular CRM tools...', sentiment: 78, engagement: 9800 },
    { brand: 'Competitor A', content: 'Behind the scenes at our product team...', sentiment: 71, engagement: 7200 },
    { brand: 'Your Brand', content: 'Customer success story: How @company...', sentiment: 88, engagement: 11500 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1>Competitor Monitoring</h1>
          <p className="text-muted-foreground">Track and compare your brand against competitors</p>
        </div>
        <Button className="bg-[#0099ff] hover:bg-[#0088ee]">
          <Plus className="w-4 h-4 mr-2" />
          Add Competitor
        </Button>
      </div>

      {/* Competitor Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {competitorData.map((competitor, index) => (
          <Card key={index} className={`p-6 ${competitor.name === 'Your Brand' ? 'border-[#0099ff] border-2' : ''}`}>
            <div className="flex items-start justify-between mb-4">
              <h3>{competitor.name}</h3>
              {competitor.name === 'Your Brand' && (
                <Badge className="bg-[#0099ff]">You</Badge>
              )}
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MessageSquare className="w-4 h-4" />
                  <span>Mentions</span>
                </div>
                <span>{competitor.mentions.toLocaleString()}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Heart className="w-4 h-4" />
                  <span>Sentiment</span>
                </div>
                <span>{competitor.sentiment}%</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <TrendingUp className="w-4 h-4" />
                  <span>Engagement</span>
                </div>
                <span>{competitor.engagement.toLocaleString()}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Comparison Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Mentions & Engagement Comparison */}
        <Card className="p-6">
          <h3 className="mb-6">Mentions & Engagement Comparison</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={competitorData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="name" stroke="#6b7280" />
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
              <Bar dataKey="engagement" fill="#10b981" name="Engagement" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Share of Voice */}
        <Card className="p-6">
          <h3 className="mb-6">Share of Voice</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={shareOfVoiceData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {shareOfVoiceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Top Competitor Posts */}
      <Card className="p-6">
        <h3 className="mb-6">Top Performing Posts</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Brand</TableHead>
              <TableHead>Content</TableHead>
              <TableHead>Sentiment</TableHead>
              <TableHead>Engagement</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {topPosts.map((post, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Badge variant={post.brand === 'Your Brand' ? 'default' : 'outline'}>
                    {post.brand}
                  </Badge>
                </TableCell>
                <TableCell className="max-w-md">{post.content}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-green-500 rounded-full"
                        style={{ width: `${post.sentiment}%` }}
                      ></div>
                    </div>
                    <span className="text-sm">{post.sentiment}%</span>
                  </div>
                </TableCell>
                <TableCell>{post.engagement.toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
