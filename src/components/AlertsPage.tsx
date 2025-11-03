import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Switch } from './ui/switch';
import { Input } from './ui/input';
import { AlertTriangle, CheckCircle, Info, Plus, Bell, Mail } from 'lucide-react';
import { alerts } from '../lib/mockData';

export default function AlertsPage() {
  const alertIcons = {
    warning: AlertTriangle,
    success: CheckCircle,
    info: Info,
  };

  const alertColors = {
    warning: 'border-yellow-500 bg-yellow-50',
    success: 'border-green-500 bg-green-50',
    info: 'border-blue-500 bg-blue-50',
  };

  const alertIconColors = {
    warning: 'text-yellow-600',
    success: 'text-green-600',
    info: 'text-blue-600',
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1>Alerts</h1>
          <p className="text-muted-foreground">Manage notifications and alert conditions</p>
        </div>
        <Button className="bg-[#0099ff] hover:bg-[#0088ee]">
          <Plus className="w-4 h-4 mr-2" />
          Create Alert
        </Button>
      </div>

      {/* Alert Conditions */}
      <Card className="p-6">
        <h3 className="mb-6">Alert Conditions</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
            <div className="flex-1">
              <p>Negative sentiment spike</p>
              <p className="text-sm text-muted-foreground">Notify when negative mentions exceed:</p>
            </div>
            <div className="flex items-center gap-4">
              <Input 
                type="number" 
                defaultValue="50" 
                className="w-20"
              />
              <span className="text-sm text-muted-foreground">mentions/hour</span>
              <Switch defaultChecked />
            </div>
          </div>

          <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
            <div className="flex-1">
              <p>Viral mention detected</p>
              <p className="text-sm text-muted-foreground">Notify when a post reaches:</p>
            </div>
            <div className="flex items-center gap-4">
              <Input 
                type="number" 
                defaultValue="5000" 
                className="w-24"
              />
              <span className="text-sm text-muted-foreground">engagements</span>
              <Switch defaultChecked />
            </div>
          </div>

          <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
            <div className="flex-1">
              <p>Competitor activity increase</p>
              <p className="text-sm text-muted-foreground">Notify when competitor mentions increase by:</p>
            </div>
            <div className="flex items-center gap-4">
              <Input 
                type="number" 
                defaultValue="20" 
                className="w-20"
              />
              <span className="text-sm text-muted-foreground">percent</span>
              <Switch defaultChecked />
            </div>
          </div>

          <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
            <div className="flex-1">
              <p>Daily summary report</p>
              <p className="text-sm text-muted-foreground">Send daily analytics summary at 9:00 AM</p>
            </div>
            <div className="flex items-center gap-4">
              <Switch defaultChecked />
            </div>
          </div>
        </div>
      </Card>

      {/* Notification Settings */}
      <Card className="p-6">
        <h3 className="mb-6">Notification Channels</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-[#0099ff]" />
              <div>
                <p>In-app notifications</p>
                <p className="text-sm text-muted-foreground">Receive alerts within the dashboard</p>
              </div>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#0099ff]" />
              <div>
                <p>Email notifications</p>
                <p className="text-sm text-muted-foreground">Send alerts to john@company.com</p>
              </div>
            </div>
            <Switch defaultChecked />
          </div>
        </div>
      </Card>

      {/* Recent Alerts */}
      <Card className="p-6">
        <h3 className="mb-6">Recent Alerts</h3>
        <div className="space-y-3">
          {alerts.map((alert) => {
            const Icon = alertIcons[alert.type as keyof typeof alertIcons];
            const colorClass = alertColors[alert.type as keyof typeof alertColors];
            const iconColorClass = alertIconColors[alert.type as keyof typeof alertIconColors];

            return (
              <div
                key={alert.id}
                className={`p-4 border-l-4 rounded-lg ${colorClass} ${!alert.read ? 'shadow-sm' : 'opacity-60'}`}
              >
                <div className="flex items-start gap-4">
                  <Icon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${iconColorClass}`} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-1">
                      <p>{alert.title}</p>
                      {!alert.read && <Badge variant="default">New</Badge>}
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{alert.description}</p>
                    <p className="text-xs text-muted-foreground">{alert.timestamp}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}
