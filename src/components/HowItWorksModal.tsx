import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Search, 
  Brain, 
  Bell, 
  BarChart3,
  Twitter,
  Lock,
  Database,
  Zap,
  AlertCircle
} from 'lucide-react';

interface HowItWorksModalProps {
  open: boolean;
  onClose: () => void;
}

export default function HowItWorksModal({ open, onClose }: HowItWorksModalProps) {
  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>How SocialEye Works - Complete Data Flow</DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Important Note */}
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg flex gap-3">
            <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="mb-2">
                <strong>Current Status: DEMO MODE</strong>
              </p>
              <p className="text-sm text-muted-foreground">
                This application uses simulated data to demonstrate functionality. 
                In production, all the processes below would be automated and connected to real social media platforms.
              </p>
            </div>
          </div>

          {/* Phase 1: Connection & Authentication */}
          <Card className="p-6 border-2 border-[#0099ff]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#0099ff]/10 flex items-center justify-center">
                <Lock className="w-6 h-6 text-[#0099ff]" />
              </div>
              <div>
                <h3>Phase 1: Secure Connection</h3>
                <Badge variant="outline">OAuth 2.0 Authentication</Badge>
              </div>
            </div>

            <div className="space-y-3 ml-15">
              <div className="flex gap-3">
                <div className="text-[#0099ff]">1.</div>
                <div>
                  <p>You click "Connect Twitter" in Integrations</p>
                  <p className="text-sm text-muted-foreground">
                    → Redirects you to twitter.com/oauth/authorize
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="text-[#0099ff]">2.</div>
                <div>
                  <p>You login with your Twitter credentials</p>
                  <p className="text-sm text-muted-foreground">
                    → Twitter verifies your identity (SocialEye never sees your password!)
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="text-[#0099ff]">3.</div>
                <div>
                  <p>You authorize SocialEye to read public data</p>
                  <p className="text-sm text-muted-foreground">
                    → Twitter generates a secure access token
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="text-[#0099ff]">4.</div>
                <div>
                  <p>Token is encrypted and stored in our database</p>
                  <p className="text-sm text-muted-foreground">
                    → SocialEye can now access Twitter API on your behalf
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded">
              <p className="text-sm">
                ✅ <strong>What we get:</strong> Read-only access to search for mentions
                <br />
                ❌ <strong>What we DON'T get:</strong> Ability to post, your password, private DMs
              </p>
            </div>
          </Card>

          {/* Phase 2: Data Collection */}
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                <Search className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3>Phase 2: Continuous Monitoring</h3>
                <Badge variant="outline">Every 5-15 minutes</Badge>
              </div>
            </div>

            <div className="space-y-3">
              <div className="p-3 bg-muted rounded">
                <p className="mb-2">Backend server runs automated jobs:</p>
                <div className="text-sm text-muted-foreground space-y-1 ml-4">
                  <p>→ Searches Twitter API for: "@YourBrand" OR "#YourBrand"</p>
                  <p>→ Searches Reddit API for: "YourBrand" in relevant subreddits</p>
                  <p>→ Searches News API for: "YourBrand" in articles</p>
                </div>
              </div>

              <div className="p-3 bg-muted rounded">
                <p className="mb-2">For each mention found, we collect:</p>
                <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground ml-4">
                  <div>• Post content (text)</div>
                  <div>• Author username</div>
                  <div>• Timestamp</div>
                  <div>• Platform (Twitter/Reddit/News)</div>
                  <div>• Engagement (likes, shares)</div>
                  <div>• Link to original post</div>
                </div>
              </div>

              <div className="p-3 bg-blue-50 border border-blue-200 rounded">
                <p className="text-sm">
                  <strong>Example API Request:</strong><br />
                  <code className="text-xs bg-white p-1 rounded">
                    GET https://api.twitter.com/2/tweets/search/recent?query=@YourBrand
                  </code>
                </p>
              </div>
            </div>
          </Card>

          {/* Phase 3: AI Processing */}
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <Brain className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3>Phase 3: AI Sentiment Analysis</h3>
                <Badge variant="outline">Natural Language Processing</Badge>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-muted-foreground">
                Each mention text is analyzed by AI to understand emotion and context:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="p-3 bg-green-50 border border-green-200 rounded">
                  <p className="mb-1">😊 <strong>Positive</strong></p>
                  <p className="text-sm text-muted-foreground">
                    "Love the new features!"<br />
                    "Best tool ever! 🔥"<br />
                    "Highly recommend"
                  </p>
                  <p className="text-xs mt-2">Score: 75-100%</p>
                </div>

                <div className="p-3 bg-yellow-50 border border-yellow-200 rounded">
                  <p className="mb-1">😐 <strong>Neutral</strong></p>
                  <p className="text-sm text-muted-foreground">
                    "Just released update"<br />
                    "Looking at options"<br />
                    "Anyone tried this?"
                  </p>
                  <p className="text-xs mt-2">Score: 40-74%</p>
                </div>

                <div className="p-3 bg-red-50 border border-red-200 rounded">
                  <p className="mb-1">😞 <strong>Negative</strong></p>
                  <p className="text-sm text-muted-foreground">
                    "Disappointed with..."<br />
                    "Missing features"<br />
                    "Customer service bad"
                  </p>
                  <p className="text-xs mt-2">Score: 0-39%</p>
                </div>
              </div>

              <div className="p-3 bg-muted rounded">
                <p className="text-sm">
                  <strong>How AI determines sentiment:</strong>
                </p>
                <ul className="text-sm text-muted-foreground ml-4 mt-2 space-y-1">
                  <li>• Analyzes keywords (excellent, terrible, love, hate)</li>
                  <li>• Understands context and sarcasm</li>
                  <li>• Detects emojis and punctuation (!!! vs ...)</li>
                  <li>• Compares to millions of training examples</li>
                  <li>• Assigns confidence score (0-100%)</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Phase 4: Data Storage */}
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                <Database className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3>Phase 4: Structured Storage</h3>
                <Badge variant="outline">PostgreSQL Database</Badge>
              </div>
            </div>

            <div className="p-3 bg-muted rounded">
              <p className="mb-2">Processed data is stored in organized tables:</p>
              <div className="text-sm text-muted-foreground space-y-2 ml-4">
                <div>
                  <strong>mentions</strong> table:
                  <div className="ml-4 mt-1">
                    • id, content, author, platform, timestamp, sentiment_score, engagement
                  </div>
                </div>
                <div>
                  <strong>analytics</strong> table:
                  <div className="ml-4 mt-1">
                    • daily summaries, trend calculations, platform breakdowns
                  </div>
                </div>
                <div>
                  <strong>alerts</strong> table:
                  <div className="ml-4 mt-1">
                    • triggered_at, condition, severity, notification_sent
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Phase 5: Alert Engine */}
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                <Bell className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3>Phase 5: Smart Alerts</h3>
                <Badge variant="outline">Real-time Monitoring</Badge>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-muted-foreground">
                System constantly checks your alert conditions:
              </p>

              <div className="space-y-2">
                <div className="p-3 bg-red-50 border-l-4 border-red-500 rounded">
                  <p className="mb-1">🚨 <strong>Negative Sentiment Spike</strong></p>
                  <p className="text-sm text-muted-foreground">
                    IF negative mentions &gt; 50 per hour<br />
                    THEN send email alert to team@company.com
                  </p>
                </div>

                <div className="p-3 bg-green-50 border-l-4 border-green-500 rounded">
                  <p className="mb-1">🔥 <strong>Viral Post Detected</strong></p>
                  <p className="text-sm text-muted-foreground">
                    IF single mention reaches &gt; 10,000 engagements<br />
                    THEN send in-app notification + email
                  </p>
                </div>

                <div className="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
                  <p className="mb-1">📈 <strong>Competitor Activity</strong></p>
                  <p className="text-sm text-muted-foreground">
                    IF competitor mentions increase &gt; 25%<br />
                    THEN alert marketing team
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Phase 6: Display */}
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3>Phase 6: Real-time Dashboard</h3>
                <Badge variant="outline">React Frontend</Badge>
              </div>
            </div>

            <div className="space-y-3">
              <div className="p-3 bg-muted rounded">
                <p className="mb-2">When you open SocialEye:</p>
                <div className="text-sm text-muted-foreground space-y-1 ml-4">
                  <p>1. Frontend requests latest data from API</p>
                  <p>2. Backend queries database for your brand's data</p>
                  <p>3. Charts and graphs are generated</p>
                  <p>4. Updates appear on your screen</p>
                  <p>5. WebSocket connection provides live updates</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-blue-50 rounded">
                  <p className="text-sm mb-1"><strong>Dashboard</strong></p>
                  <p className="text-xs text-muted-foreground">
                    Overview metrics, trend charts
                  </p>
                </div>
                <div className="p-3 bg-purple-50 rounded">
                  <p className="text-sm mb-1"><strong>Mentions Feed</strong></p>
                  <p className="text-xs text-muted-foreground">
                    Real-time stream of posts
                  </p>
                </div>
                <div className="p-3 bg-green-50 rounded">
                  <p className="text-sm mb-1"><strong>Sentiment Analysis</strong></p>
                  <p className="text-xs text-muted-foreground">
                    Emotion trends over time
                  </p>
                </div>
                <div className="p-3 bg-orange-50 rounded">
                  <p className="text-sm mb-1"><strong>Competitor Comparison</strong></p>
                  <p className="text-xs text-muted-foreground">
                    Side-by-side analytics
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Technology Stack */}
          <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50">
            <h3 className="mb-4">🛠️ Technology Stack (Production)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="mb-2"><strong>Frontend</strong></p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• React + TypeScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• Recharts (graphs)</li>
                  <li>• WebSocket (live updates)</li>
                </ul>
              </div>
              <div>
                <p className="mb-2"><strong>Backend</strong></p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Node.js / Python</li>
                  <li>• PostgreSQL database</li>
                  <li>• Redis (caching)</li>
                  <li>• Cron jobs (scheduling)</li>
                </ul>
              </div>
              <div>
                <p className="mb-2"><strong>External APIs</strong></p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Twitter API v2</li>
                  <li>• Reddit API</li>
                  <li>• News API</li>
                  <li>• OpenAI (sentiment AI)</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Data Flow Summary */}
          <div className="p-6 bg-gradient-to-r from-[#0099ff]/10 to-purple-100 rounded-lg border-2 border-[#0099ff]">
            <h3 className="mb-4">📊 Complete Data Flow</h3>
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex items-center gap-2">
                <Twitter className="w-4 h-4 text-[#0099ff]" />
                <span>Social Media Platforms</span>
                <span className="text-muted-foreground">→</span>
              </div>
              <div className="flex items-center gap-2 ml-6">
                <Search className="w-4 h-4 text-purple-600" />
                <span>API Search Queries</span>
                <span className="text-muted-foreground">→</span>
              </div>
              <div className="flex items-center gap-2 ml-12">
                <Brain className="w-4 h-4 text-green-600" />
                <span>AI Sentiment Analysis</span>
                <span className="text-muted-foreground">→</span>
              </div>
              <div className="flex items-center gap-2 ml-18">
                <Database className="w-4 h-4 text-orange-600" />
                <span>Database Storage</span>
                <span className="text-muted-foreground">→</span>
              </div>
              <div className="flex items-center gap-2 ml-24">
                <Zap className="w-4 h-4 text-yellow-600" />
                <span>Alert Engine Check</span>
                <span className="text-muted-foreground">→</span>
              </div>
              <div className="flex items-center gap-2 ml-30">
                <BarChart3 className="w-4 h-4 text-blue-600" />
                <span>Your Dashboard</span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
