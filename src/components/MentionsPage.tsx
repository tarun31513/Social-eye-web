import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Twitter, MessageCircle, Newspaper, Facebook, ExternalLink, Plus, Filter } from 'lucide-react';
import { mentionsFeed } from '../lib/mockData';

export default function MentionsPage() {
  const platformIcons = {
    twitter: Twitter,
    reddit: MessageCircle,
    news: Newspaper,
    facebook: Facebook,
  };

  const sentimentColors = {
    positive: 'bg-green-100 text-green-800 border-green-200',
    neutral: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    negative: 'bg-red-100 text-red-800 border-red-200',
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1>Mentions Feed</h1>
          <p className="text-muted-foreground">Real-time social media mentions of your brand</p>
        </div>
        <Button className="bg-[#0099ff] hover:bg-[#0088ee]">
          <Plus className="w-4 h-4 mr-2" />
          Add Brand Keyword
        </Button>
      </div>

      {/* Filters */}
      <Card className="p-4">
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[200px]">
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Platform" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Platforms</SelectItem>
                <SelectItem value="twitter">Twitter</SelectItem>
                <SelectItem value="reddit">Reddit</SelectItem>
                <SelectItem value="news">News</SelectItem>
                <SelectItem value="facebook">Facebook</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex-1 min-w-[200px]">
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Sentiment" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sentiments</SelectItem>
                <SelectItem value="positive">Positive</SelectItem>
                <SelectItem value="neutral">Neutral</SelectItem>
                <SelectItem value="negative">Negative</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex-1 min-w-[200px]">
            <Select defaultValue="7days">
              <SelectTrigger>
                <SelectValue placeholder="Time Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="7days">Last 7 days</SelectItem>
                <SelectItem value="30days">Last 30 days</SelectItem>
                <SelectItem value="custom">Custom range</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            More Filters
          </Button>
        </div>
      </Card>

      {/* Mentions List */}
      <div className="space-y-4">
        {mentionsFeed.map((mention) => {
          const PlatformIcon = platformIcons[mention.platform as keyof typeof platformIcons];
          
          return (
            <Card key={mention.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#0099ff]/10 flex items-center justify-center">
                    <PlatformIcon className="w-6 h-6 text-[#0099ff]" />
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="flex items-center gap-2">
                        {mention.username}
                        <Badge variant="outline" className="capitalize">
                          {mention.platform}
                        </Badge>
                      </p>
                      <p className="text-sm text-muted-foreground">{mention.timestamp}</p>
                    </div>
                    <Badge 
                      variant="outline"
                      className={sentimentColors[mention.sentiment as keyof typeof sentimentColors]}
                    >
                      {mention.sentiment}
                    </Badge>
                  </div>
                  
                  <p className="mb-4">{mention.content}</p>
                  
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">
                      {mention.engagement} engagements
                    </span>
                    <Button variant="ghost" size="sm" className="text-[#0099ff]">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Original
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Load More */}
      <div className="flex justify-center">
        <Button variant="outline">Load More Mentions</Button>
      </div>
    </div>
  );
}
