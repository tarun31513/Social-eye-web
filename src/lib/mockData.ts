// Mock data for SocialEye dashboard

export const mentionsData = [
  { date: 'Nov 1', mentions: 245, positive: 180, negative: 35, neutral: 30 },
  { date: 'Nov 2', mentions: 320, positive: 240, negative: 45, neutral: 35 },
  { date: 'Nov 3', mentions: 280, positive: 210, negative: 40, neutral: 30 },
  { date: 'Nov 4', mentions: 390, positive: 300, negative: 50, neutral: 40 },
  { date: 'Nov 5', mentions: 410, positive: 320, negative: 45, neutral: 45 },
  { date: 'Nov 6', mentions: 350, positive: 270, negative: 42, neutral: 38 },
  { date: 'Nov 7', mentions: 425, positive: 340, negative: 48, neutral: 37 },
];

export const sentimentDistribution = [
  { name: 'Positive', value: 72, fill: '#10b981' },
  { name: 'Neutral', value: 18, fill: '#f59e0b' },
  { name: 'Negative', value: 10, fill: '#ef4444' },
];

export const platformData = [
  { platform: 'Twitter', mentions: 1250, sentiment: 75 },
  { platform: 'Reddit', mentions: 680, sentiment: 68 },
  { platform: 'News', mentions: 420, sentiment: 82 },
  { platform: 'Facebook', mentions: 890, sentiment: 71 },
];

export const mentionsFeed = [
  {
    id: 1,
    username: '@techcrunch',
    platform: 'twitter',
    content: 'Just tried the new AI features from @YourBrand - absolutely game-changing! The automation is seamless and intuitive.',
    timestamp: '2 hours ago',
    sentiment: 'positive',
    engagement: 245,
  },
  {
    id: 2,
    username: 'u/startupfounder',
    platform: 'reddit',
    content: 'Has anyone used YourBrand for social monitoring? Looking for alternatives to existing tools.',
    timestamp: '4 hours ago',
    sentiment: 'neutral',
    engagement: 89,
  },
  {
    id: 3,
    username: '@marketing_daily',
    platform: 'twitter',
    content: 'YourBrand\'s latest update is missing some key features that competitors have. Disappointed with the rollout.',
    timestamp: '6 hours ago',
    sentiment: 'negative',
    engagement: 67,
  },
  {
    id: 4,
    username: 'TechNews Today',
    platform: 'news',
    content: 'YourBrand raises $10M Series A to expand AI-powered social monitoring capabilities across enterprise market.',
    timestamp: '8 hours ago',
    sentiment: 'positive',
    engagement: 532,
  },
  {
    id: 5,
    username: '@saas_reviewer',
    platform: 'twitter',
    content: 'After 3 months with @YourBrand, I can confidently say it\'s revolutionized how we track brand sentiment. Highly recommended!',
    timestamp: '10 hours ago',
    sentiment: 'positive',
    engagement: 178,
  },
  {
    id: 6,
    username: 'u/digitalmarketer',
    platform: 'reddit',
    content: 'The sentiment analysis on YourBrand seems off sometimes. Getting false positives on negative sentiment.',
    timestamp: '12 hours ago',
    sentiment: 'negative',
    engagement: 43,
  },
];

export const trendingKeywords = [
  { keyword: '#AIMarketing', mentions: 1240 },
  { keyword: '#SocialListening', mentions: 980 },
  { keyword: '#BrandMonitoring', mentions: 856 },
  { keyword: '#CustomerInsights', mentions: 734 },
  { keyword: '#SentimentAnalysis', mentions: 692 },
];

export const competitorData = [
  {
    name: 'Competitor A',
    mentions: 3200,
    sentiment: 68,
    engagement: 12500,
    shareOfVoice: 35,
  },
  {
    name: 'Competitor B',
    mentions: 2800,
    sentiment: 71,
    engagement: 10200,
    shareOfVoice: 30,
  },
  {
    name: 'Your Brand',
    mentions: 3100,
    sentiment: 75,
    engagement: 14300,
    shareOfVoice: 35,
  },
];

export const alerts = [
  {
    id: 1,
    type: 'warning',
    title: 'Negative sentiment spike detected',
    description: '15% increase in negative mentions in the last 2 hours',
    timestamp: '30 minutes ago',
    read: false,
  },
  {
    id: 2,
    type: 'success',
    title: 'Viral post detected',
    description: 'Your brand mentioned in a post with 10K+ engagements',
    timestamp: '2 hours ago',
    read: false,
  },
  {
    id: 3,
    type: 'info',
    title: 'Weekly report ready',
    description: 'Your weekly analytics report is ready to download',
    timestamp: '1 day ago',
    read: true,
  },
  {
    id: 4,
    type: 'warning',
    title: 'Competitor activity increase',
    description: 'Competitor A mentions increased by 25% this week',
    timestamp: '2 days ago',
    read: true,
  },
];

export const integrations = [
  {
    name: 'Twitter / X',
    description: 'Monitor mentions, hashtags, and engagement',
    connected: true,
    icon: 'twitter',
  },
  {
    name: 'Reddit',
    description: 'Track subreddit discussions and comments',
    connected: true,
    icon: 'reddit',
  },
  {
    name: 'News Sources',
    description: 'Monitor news articles and press mentions',
    connected: true,
    icon: 'newspaper',
  },
  {
    name: 'Instagram',
    description: 'Track Instagram posts, stories, and comments',
    connected: false,
    icon: 'instagram',
  },
  {
    name: 'YouTube',
    description: 'Monitor video mentions and comments',
    connected: false,
    icon: 'youtube',
  },
  {
    name: 'LinkedIn',
    description: 'Track professional network discussions',
    connected: false,
    icon: 'linkedin',
  },
];

export const wordCloudData = [
  { text: 'innovative', value: 95 },
  { text: 'excellent', value: 88 },
  { text: 'powerful', value: 82 },
  { text: 'seamless', value: 76 },
  { text: 'intuitive', value: 71 },
  { text: 'reliable', value: 68 },
  { text: 'expensive', value: 45 },
  { text: 'complex', value: 38 },
  { text: 'confusing', value: 32 },
  { text: 'slow', value: 28 },
  { text: 'amazing', value: 85 },
  { text: 'feature-rich', value: 72 },
  { text: 'recommended', value: 79 },
  { text: 'professional', value: 65 },
  { text: 'buggy', value: 35 },
];

export const geographyData = [
  { country: 'United States', mentions: 1245, lat: 37.0902, lng: -95.7129 },
  { country: 'United Kingdom', mentions: 680, lat: 55.3781, lng: -3.4360 },
  { country: 'Canada', mentions: 420, lat: 56.1304, lng: -106.3468 },
  { country: 'Germany', mentions: 385, lat: 51.1657, lng: 10.4515 },
  { country: 'France', mentions: 340, lat: 46.2276, lng: 2.2137 },
  { country: 'Australia', mentions: 298, lat: -25.2744, lng: 133.7751 },
];

export const sentimentOverTime = [
  { date: 'Oct 28', positive: 68, neutral: 20, negative: 12 },
  { date: 'Oct 29', positive: 70, neutral: 18, negative: 12 },
  { date: 'Oct 30', positive: 72, neutral: 19, negative: 9 },
  { date: 'Oct 31', positive: 75, neutral: 15, negative: 10 },
  { date: 'Nov 1', positive: 73, neutral: 18, negative: 9 },
  { date: 'Nov 2', positive: 75, neutral: 17, negative: 8 },
  { date: 'Nov 3', positive: 77, neutral: 15, negative: 8 },
];
