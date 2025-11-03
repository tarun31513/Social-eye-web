import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Switch } from './ui/switch';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { User, Key, Users as UsersIcon, Bell, Palette, Trash2, Plus } from 'lucide-react';

export default function SettingsPage() {
  const trackedKeywords = [
    { keyword: '@YourBrand', type: 'Brand' },
    { keyword: '#YourBrand', type: 'Hashtag' },
    { keyword: 'YourBrand AI', type: 'Keyword' },
    { keyword: 'YourBrand monitoring', type: 'Keyword' },
  ];

  const teamMembers = [
    { name: 'John Doe', email: 'john@company.com', role: 'Admin', status: 'Active' },
    { name: 'Jane Smith', email: 'jane@company.com', role: 'Editor', status: 'Active' },
    { name: 'Mike Johnson', email: 'mike@company.com', role: 'Viewer', status: 'Invited' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1>Settings</h1>
        <p className="text-muted-foreground">Manage your account and application preferences</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="keywords">Keywords</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
        </TabsList>

        {/* Profile Settings */}
        <TabsContent value="profile" className="space-y-6">
          <Card className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <User className="w-5 h-5 text-[#0099ff]" />
              <h3>Profile Information</h3>
            </div>
            
            <div className="space-y-4 max-w-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2">First Name</label>
                  <Input defaultValue="John" />
                </div>
                <div>
                  <label className="block mb-2">Last Name</label>
                  <Input defaultValue="Doe" />
                </div>
              </div>
              
              <div>
                <label className="block mb-2">Email</label>
                <Input type="email" defaultValue="john@company.com" />
              </div>
              
              <div>
                <label className="block mb-2">Company</label>
                <Input defaultValue="Acme Inc." />
              </div>
              
              <Button className="bg-[#0099ff] hover:bg-[#0088ee]">
                Save Changes
              </Button>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <Key className="w-5 h-5 text-[#0099ff]" />
              <h3>Security</h3>
            </div>
            
            <div className="space-y-4 max-w-2xl">
              <div>
                <label className="block mb-2">Current Password</label>
                <Input type="password" placeholder="••••••••" />
              </div>
              
              <div>
                <label className="block mb-2">New Password</label>
                <Input type="password" placeholder="••••••••" />
              </div>
              
              <div>
                <label className="block mb-2">Confirm New Password</label>
                <Input type="password" placeholder="••••••••" />
              </div>
              
              <Button variant="outline">
                Update Password
              </Button>
            </div>
          </Card>
        </TabsContent>

        {/* Keywords Settings */}
        <TabsContent value="keywords" className="space-y-6">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3>Tracked Keywords</h3>
              <Button className="bg-[#0099ff] hover:bg-[#0088ee]">
                <Plus className="w-4 h-4 mr-2" />
                Add Keyword
              </Button>
            </div>
            
            <div className="space-y-3">
              {trackedKeywords.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-muted rounded-lg"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono">{item.keyword}</span>
                    <Badge variant="outline">{item.type}</Badge>
                  </div>
                  <Button variant="ghost" size="sm" className="text-red-600">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="mb-6">Keyword Tracking Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p>Case Sensitive Matching</p>
                  <p className="text-sm text-muted-foreground">
                    Distinguish between uppercase and lowercase letters
                  </p>
                </div>
                <Switch />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p>Include Retweets</p>
                  <p className="text-sm text-muted-foreground">
                    Track retweets and reposts in mentions
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p>Track Variations</p>
                  <p className="text-sm text-muted-foreground">
                    Include common misspellings and variations
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Team Settings */}
        <TabsContent value="team" className="space-y-6">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <UsersIcon className="w-5 h-5 text-[#0099ff]" />
                <h3>Team Members</h3>
              </div>
              <Button className="bg-[#0099ff] hover:bg-[#0088ee]">
                <Plus className="w-4 h-4 mr-2" />
                Invite Member
              </Button>
            </div>
            
            <div className="space-y-3">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-muted rounded-lg"
                >
                  <div>
                    <p>{member.name}</p>
                    <p className="text-sm text-muted-foreground">{member.email}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant={member.status === 'Active' ? 'default' : 'outline'}>
                      {member.status}
                    </Badge>
                    <Select defaultValue={member.role.toLowerCase()}>
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="admin">Admin</SelectItem>
                        <SelectItem value="editor">Editor</SelectItem>
                        <SelectItem value="viewer">Viewer</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="ghost" size="sm" className="text-red-600">
                      Remove
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        {/* Notifications Settings */}
        <TabsContent value="notifications" className="space-y-6">
          <Card className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <Bell className="w-5 h-5 text-[#0099ff]" />
              <h3>Notification Preferences</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p>Email Notifications</p>
                  <p className="text-sm text-muted-foreground">
                    Receive email alerts for important events
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p>Daily Digest</p>
                  <p className="text-sm text-muted-foreground">
                    Get a daily summary of mentions and alerts
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p>Weekly Report</p>
                  <p className="text-sm text-muted-foreground">
                    Receive weekly analytics reports
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p>Mention Notifications</p>
                  <p className="text-sm text-muted-foreground">
                    Get notified for each new mention
                  </p>
                </div>
                <Switch />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p>Sentiment Alerts</p>
                  <p className="text-sm text-muted-foreground">
                    Alert me when sentiment changes significantly
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Appearance Settings */}
        <TabsContent value="appearance" className="space-y-6">
          <Card className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <Palette className="w-5 h-5 text-[#0099ff]" />
              <h3>Appearance</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block mb-2">Theme</label>
                <Select defaultValue="light">
                  <SelectTrigger className="w-full max-w-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block mb-2">Language</label>
                <Select defaultValue="en">
                  <SelectTrigger className="w-full max-w-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Español</SelectItem>
                    <SelectItem value="fr">Français</SelectItem>
                    <SelectItem value="de">Deutsch</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block mb-2">Timezone</label>
                <Select defaultValue="utc">
                  <SelectTrigger className="w-full max-w-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="utc">UTC (GMT+0)</SelectItem>
                    <SelectItem value="est">Eastern (GMT-5)</SelectItem>
                    <SelectItem value="pst">Pacific (GMT-8)</SelectItem>
                    <SelectItem value="cet">Central European (GMT+1)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
