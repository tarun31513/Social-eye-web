import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Twitter, MessageCircle, Newspaper, Instagram, Youtube, Linkedin, Check, Plus } from 'lucide-react';
import { integrations } from '../lib/mockData';

export default function IntegrationsPage() {
  const platformIcons = {
    twitter: Twitter,
    reddit: MessageCircle,
    newspaper: Newspaper,
    instagram: Instagram,
    youtube: Youtube,
    linkedin: Linkedin,
  };

  return (
    <div className="space-y-6">
      <div>
        <h1>Integrations</h1>
        <p className="text-muted-foreground">Connect your social media platforms to start monitoring</p>
      </div>

      {/* Connected Platforms */}
      <div>
        <h3 className="mb-4">Connected Platforms</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.filter(int => int.connected).map((integration, index) => {
            const Icon = platformIcons[integration.icon as keyof typeof platformIcons];
            
            return (
              <Card key={index} className="p-6 border-[#0099ff] border-2">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#0099ff]/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#0099ff]" />
                  </div>
                  <Badge className="bg-green-100 text-green-700 border-green-200">
                    <Check className="w-3 h-3 mr-1" />
                    Connected
                  </Badge>
                </div>
                
                <h4 className="mb-2">{integration.name}</h4>
                <p className="text-sm text-muted-foreground mb-4">{integration.description}</p>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    Configure
                  </Button>
                  <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                    Disconnect
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Available Platforms */}
      <div>
        <h3 className="mb-4">Available Platforms</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.filter(int => !int.connected).map((integration, index) => {
            const Icon = platformIcons[integration.icon as keyof typeof platformIcons];
            
            return (
              <Card key={index} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                    <Icon className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <Badge variant="outline">Not Connected</Badge>
                </div>
                
                <h4 className="mb-2">{integration.name}</h4>
                <p className="text-sm text-muted-foreground mb-4">{integration.description}</p>
                
                <Button className="w-full bg-[#0099ff] hover:bg-[#0088ee]">
                  <Plus className="w-4 h-4 mr-2" />
                  Connect
                </Button>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Integration Stats */}
      <Card className="p-6">
        <h3 className="mb-6">Integration Statistics</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <p className="text-muted-foreground mb-2">Active Integrations</p>
            <p style={{ fontSize: '32px', fontWeight: '700' }}>3</p>
          </div>
          <div>
            <p className="text-muted-foreground mb-2">Total Data Sources</p>
            <p style={{ fontSize: '32px', fontWeight: '700' }}>12</p>
          </div>
          <div>
            <p className="text-muted-foreground mb-2">Last Sync</p>
            <p style={{ fontSize: '32px', fontWeight: '700' }}>2m</p>
            <p className="text-sm text-muted-foreground">ago</p>
          </div>
          <div>
            <p className="text-muted-foreground mb-2">API Calls Today</p>
            <p style={{ fontSize: '32px', fontWeight: '700' }}>8.2K</p>
          </div>
        </div>
      </Card>

      {/* API Configuration */}
      <Card className="p-6">
        <h3 className="mb-4">API Configuration</h3>
        <p className="text-muted-foreground mb-6">
          Configure API keys and webhooks for advanced integrations
        </p>
        
        <div className="space-y-4">
          <div className="p-4 bg-muted rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <p>Twitter API Key</p>
              <Badge className="bg-green-100 text-green-700 border-green-200">Active</Badge>
            </div>
            <p className="text-sm text-muted-foreground font-mono">
              sk_live_••••••••••••••••••••••••8h3K
            </p>
          </div>

          <div className="p-4 bg-muted rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <p>Reddit API Key</p>
              <Badge className="bg-green-100 text-green-700 border-green-200">Active</Badge>
            </div>
            <p className="text-sm text-muted-foreground font-mono">
              sk_live_••••••••••••••••••••••••2jL9
            </p>
          </div>

          <div className="p-4 bg-muted rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <p>Webhook URL</p>
              <Button variant="outline" size="sm">Configure</Button>
            </div>
            <p className="text-sm text-muted-foreground font-mono">
              https://your-domain.com/webhooks/socialeye
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
