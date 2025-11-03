import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { 
  Eye, 
  Twitter, 
  MessageCircle, 
  Newspaper, 
  Key, 
  CheckCircle,
  ArrowRight,
  AlertCircle
} from 'lucide-react';
import { Card } from './ui/card';

interface OnboardingWizardProps {
  open: boolean;
  onClose: () => void;
  userName: string;
}

export default function OnboardingWizard({ open, onClose, userName }: OnboardingWizardProps) {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-2">
            <Eye className="w-6 h-6 text-[#0099ff]" />
            <DialogTitle>Welcome to SocialEye, {userName}! 👋</DialogTitle>
          </div>
          <DialogDescription>
            Let's get you set up in just a few steps ({step} of {totalSteps})
          </DialogDescription>
        </DialogHeader>

        <div className="py-6">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              {[1, 2, 3, 4].map((s) => (
                <div
                  key={s}
                  className={`flex-1 h-2 mx-1 rounded-full transition-colors ${
                    s <= step ? 'bg-[#0099ff]' : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Step 1: Welcome & Overview */}
          {step === 1 && (
            <div className="space-y-4">
              <h3>What is SocialEye?</h3>
              <p className="text-muted-foreground">
                SocialEye is an AI-powered platform that monitors your brand across social media in real-time.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <Card className="p-4 bg-blue-50 border-blue-200">
                  <h4 className="mb-2">📊 Track Mentions</h4>
                  <p className="text-sm text-muted-foreground">
                    Monitor every mention of your brand across Twitter, Reddit, News, and more
                  </p>
                </Card>
                <Card className="p-4 bg-green-50 border-green-200">
                  <h4 className="mb-2">😊 Analyze Sentiment</h4>
                  <p className="text-sm text-muted-foreground">
                    AI understands if mentions are positive, neutral, or negative
                  </p>
                </Card>
                <Card className="p-4 bg-purple-50 border-purple-200">
                  <h4 className="mb-2">🎯 Compare Competitors</h4>
                  <p className="text-sm text-muted-foreground">
                    See how you stack up against your competition
                  </p>
                </Card>
                <Card className="p-4 bg-orange-50 border-orange-200">
                  <h4 className="mb-2">🔔 Get Alerts</h4>
                  <p className="text-sm text-muted-foreground">
                    Instant notifications when important events happen
                  </p>
                </Card>
              </div>

              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg flex gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm">
                    <strong>Note:</strong> This is a <strong>DEMO version</strong> using simulated data. 
                    In production, you would connect real social media accounts to monitor actual mentions.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: How It Works */}
          {step === 2 && (
            <div className="space-y-4">
              <h3>How Does It Work?</h3>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0099ff] text-white flex items-center justify-center">
                    1
                  </div>
                  <div>
                    <h4>Connect Your Social Accounts</h4>
                    <p className="text-sm text-muted-foreground">
                      You would use OAuth to securely connect Twitter, Reddit, Instagram, etc. 
                      <strong> No passwords stored</strong> - just secure API tokens.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0099ff] text-white flex items-center justify-center">
                    2
                  </div>
                  <div>
                    <h4>Set Up Keywords to Track</h4>
                    <p className="text-sm text-muted-foreground">
                      Specify your brand name, product names, hashtags, and competitor names to monitor.
                      Example: "@YourBrand", "#YourProduct", "Competitor Inc."
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0099ff] text-white flex items-center justify-center">
                    3
                  </div>
                  <div>
                    <h4>AI Monitors & Analyzes</h4>
                    <p className="text-sm text-muted-foreground">
                      Our system continuously searches for your keywords. Each mention is analyzed by AI 
                      to determine sentiment (positive/neutral/negative).
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0099ff] text-white flex items-center justify-center">
                    4
                  </div>
                  <div>
                    <h4>Get Insights & Alerts</h4>
                    <p className="text-sm text-muted-foreground">
                      View real-time dashboards, receive alerts when important events happen, 
                      and download reports to share with your team.
                    </p>
                  </div>
                </div>
              </div>

              <Card className="p-4 bg-blue-50 border-blue-200 mt-6">
                <h4 className="mb-2">🔐 Security & Privacy</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• OAuth 2.0 authentication (industry standard)</li>
                  <li>• Read-only access (we never post on your behalf)</li>
                  <li>• Encrypted API key storage</li>
                  <li>• You can disconnect anytime</li>
                </ul>
              </Card>
            </div>
          )}

          {/* Step 3: Integration Setup (Demo) */}
          {step === 3 && (
            <div className="space-y-4">
              <h3>Connect Your Platforms (Demo Mode)</h3>
              <p className="text-muted-foreground">
                In production, you would connect your social media accounts here. 
                For this demo, we'll simulate connected platforms.
              </p>

              <div className="space-y-3 my-6">
                <Card className="p-4 border-2 border-[#0099ff]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <Twitter className="w-5 h-5 text-blue-500" />
                      </div>
                      <div>
                        <p>Twitter / X</p>
                        <p className="text-sm text-muted-foreground">Monitor tweets and mentions</p>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-700 border-green-200">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Simulated
                    </Badge>
                  </div>
                </Card>

                <Card className="p-4 border-2 border-[#0099ff]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                        <MessageCircle className="w-5 h-5 text-orange-500" />
                      </div>
                      <div>
                        <p>Reddit</p>
                        <p className="text-sm text-muted-foreground">Track subreddit discussions</p>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-700 border-green-200">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Simulated
                    </Badge>
                  </div>
                </Card>

                <Card className="p-4 border-2 border-[#0099ff]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                        <Newspaper className="w-5 h-5 text-gray-700" />
                      </div>
                      <div>
                        <p>News Sources</p>
                        <p className="text-sm text-muted-foreground">Monitor press and articles</p>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-700 border-green-200">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Simulated
                    </Badge>
                  </div>
                </Card>
              </div>

              <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                <h4 className="mb-2">📝 In Production, You Would:</h4>
                <ol className="text-sm text-muted-foreground space-y-2">
                  <li>1. Click "Connect" on each platform</li>
                  <li>2. Be redirected to that platform's login page</li>
                  <li>3. Authorize SocialEye to read public data</li>
                  <li>4. Return to SocialEye with secure token stored</li>
                  <li>5. Monitoring begins automatically!</li>
                </ol>
              </div>
            </div>
          )}

          {/* Step 4: Setup Keywords */}
          {step === 4 && (
            <div className="space-y-4">
              <h3>Set Up Your Keywords (Demo)</h3>
              <p className="text-muted-foreground">
                Tell us what to monitor. You can add these later in Settings.
              </p>

              <div className="space-y-4 my-6">
                <div>
                  <label className="block mb-2">Your Brand Name</label>
                  <Input 
                    placeholder="e.g., @YourBrand, YourBrand Inc." 
                    defaultValue="@YourBrand"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    We'll track mentions with this exact name
                  </p>
                </div>

                <div>
                  <label className="block mb-2">Brand Hashtags (Optional)</label>
                  <Input 
                    placeholder="e.g., #YourBrand, #YourProduct" 
                    defaultValue="#YourBrand"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Separate multiple hashtags with commas
                  </p>
                </div>

                <div>
                  <label className="block mb-2">Competitors to Monitor (Optional)</label>
                  <Input 
                    placeholder="e.g., @CompetitorA, @CompetitorB" 
                    defaultValue="@CompetitorA, @CompetitorB"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Compare your performance against competitors
                  </p>
                </div>
              </div>

              <Card className="p-4 bg-green-50 border-green-200">
                <h4 className="mb-2">✅ You're All Set!</h4>
                <p className="text-sm text-muted-foreground">
                  In production, monitoring would start immediately. For this demo, 
                  explore the dashboard to see how your analytics would look!
                </p>
              </Card>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-4 border-t">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={step === 1}
          >
            Previous
          </Button>
          
          {step < totalSteps ? (
            <Button
              onClick={nextStep}
              className="bg-[#0099ff] hover:bg-[#0088ee]"
            >
              Next
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button
              onClick={onClose}
              className="bg-[#0099ff] hover:bg-[#0088ee]"
            >
              Start Exploring!
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
