import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Eye, Mail, Chrome, Linkedin } from 'lucide-react';

interface LoginPageProps {
  onLogin: (email: string) => void;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [email, setEmail] = useState('');
  return (
    <div className="min-h-screen flex">
      {/* Left side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <Eye className="w-8 h-8 text-[#0099ff]" />
              <span className="text-[#0099ff]" style={{ fontSize: '28px', fontWeight: '700' }}>SocialEye</span>
            </div>
            <p className="text-muted-foreground mt-4">
              Track. Analyze. Engage. All in one place.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="mb-6">Welcome back</h2>
              <p className="text-muted-foreground mb-6">
                Sign in to your account to continue
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block mb-2">Email</label>
                <Input 
                  type="email" 
                  placeholder="you@company.com"
                  className="w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && email) {
                      onLogin(email);
                    }
                  }}
                />
              </div>
              <div>
                <label className="block mb-2">Password</label>
                <Input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && email) {
                      onLogin(email);
                    }
                  }}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="rounded" />
                Remember me
              </label>
              <a href="#" className="text-sm text-[#0099ff] hover:underline">
                Forgot password?
              </a>
            </div>

            <Button 
              onClick={() => email && onLogin(email)}
              className="w-full bg-[#0099ff] hover:bg-[#0088ee]"
              disabled={!email}
            >
              Sign In
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-background text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <Button 
                variant="outline" 
                onClick={() => onLogin('demo@socialeye.com')}
                className="w-full"
              >
                <Mail className="w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                onClick={() => onLogin('demo.user@gmail.com')}
                className="w-full"
              >
                <Chrome className="w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                onClick={() => onLogin('john.doe@company.com')}
                className="w-full"
              >
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>

            <p className="text-center text-sm text-muted-foreground">
              Don't have an account?{' '}
              <a href="#" className="text-[#0099ff] hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Background Image */}
      <div 
        className="hidden lg:block lg:w-1/2 bg-cover bg-center relative"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1652212976547-16d7e2841b8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBibHVlfGVufDF8fHx8MTc2MjA3NzQ5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)',
        }}
      >
        <div className="absolute inset-0 bg-[#0099ff]/20"></div>
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <div className="text-white max-w-lg">
            <h2 className="mb-4 text-white" style={{ fontSize: '32px', fontWeight: '700' }}>
              Monitor Your Brand in Real-Time
            </h2>
            <p className="text-white/90" style={{ fontSize: '18px' }}>
              Track mentions, analyze sentiment, and stay ahead of your competition with AI-powered social media monitoring.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
